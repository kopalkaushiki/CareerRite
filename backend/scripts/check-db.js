// Run: node scripts/check-db.js
import dns from 'node:dns/promises'
import net from 'node:net'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const uri = process.env.MONGO_URI || process.env.MONGODB_URI
if (!uri) { console.error('FAIL: no MONGO_URI in backend/.env'); process.exit(1) }

if (process.env.DNS_SERVERS) {
  dns.setServers(process.env.DNS_SERVERS.split(',').map((s) => s.trim()))
  console.log('Using DNS servers:', process.env.DNS_SERVERS)
}

const tcp = (host, port) =>
  new Promise((resolve) => {
    const s = net.connect({ host, port, timeout: 6000 })
    s.on('connect', () => { s.destroy(); resolve('open') })
    s.on('timeout', () => { s.destroy(); resolve('TIMEOUT (blocked by network/firewall?)') })
    s.on('error', (e) => resolve('ERROR ' + e.code))
  })

const m = uri.match(/^mongodb(\+srv)?:\/\/(?:([^:@/]+)(?::[^@]*)?@)?([^/?]+)/)
if (!m) { console.error('FAIL: URI format looks wrong (expected mongodb://host:port/db or mongodb+srv://user:pass@host/...)'); process.exit(1) }
const [, srv, user, hostPart] = m
console.log(`User: ${user || '(none)'} | Host: ${hostPart} | SRV: ${!!srv}`)

// first host only for plain URIs; each host:port is tested
const hosts = hostPart.split(',')
let targets = hosts.map((h) => { const [name, port] = h.split(':'); return { name, port: Number(port) || 27017 } })
const host = hosts[0]
if (srv) {
  try {
    const recs = await dns.resolveSrv('_mongodb._tcp.' + host)
    targets = recs.map((r) => ({ name: r.name, port: r.port }))
    console.log('1. DNS SRV lookup: OK ->', targets.map((t) => t.name).join(', '))
  } catch (e) {
    console.log('1. DNS SRV lookup: FAILED', e.code, '\n   -> Try DNS_SERVERS=8.8.8.8,1.1.1.1 in .env, a different network, or the non-SRV connection string.')
    process.exit(1)
  }
}

for (const t of targets) console.log(`2. TCP ${t.name}:${t.port} ->`, await tcp(t.name, t.port))

try {
  await mongoose.connect(uri, { dbName: process.env.DB_NAME || 'careerrite', serverSelectionTimeoutMS: 15000 })
  console.log('3. Mongo login + connect: OK')
  await mongoose.disconnect()
} catch (e) {
  console.log('3. Mongo connect: FAILED')
  console.log('   ', e.message)
  for (const [h, d] of e.reason?.servers ?? []) console.log(`    ${h}:`, d.error?.message || d.type)
  process.exit(1)
}
