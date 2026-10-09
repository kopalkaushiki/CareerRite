# CareerRite - Career Counseling Web App

A full-stack career counseling web application built with React, Express, and MongoDB.

## 🚀 Quick Start

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

4. Update `.env` with your MongoDB Atlas connection string and a JWT secret:
```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-host>.mongodb.net/?retryWrites=true&w=majority
DB_NAME=careerrite
JWT_SECRET=any-long-random-string
CLIENT_URL=http://localhost:3000
```

In Atlas, add your IP under Network Access and create a user under Database Access.

5. Start the backend server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

The backend API will be available at `http://localhost:5000`.

## 📁 Project Structure

```text
CareerRite/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── data/
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

## 🌐 Pages

1. Home (`/`) - user information form
2. Explore (`/explore`) - browse career streams
3. Stream Details (`/stream/:streamName`) - view path, exams, and colleges
4. Profile (`/profile`) - user profile and progress
5. Career Quiz (`/quiz`) - save recommendation results

## 🛠️ Tech Stack

- Frontend: React + Vite + Tailwind CSS + React Router
- Backend: Node.js + Express
- Database: MongoDB Atlas
- Authentication: JWT tokens

## 📝 Features

- User profile management
- Career stream exploration
- Career quiz result tracking
- Progress tracking
- Responsive design
- Modern UI with pastel colors

## 🚢 Deployment

### Frontend (Vercel)
1. Push code to GitHub
2. Connect the repository to Vercel
3. Set the build command to `cd frontend && npm install && npm run build`
4. Set the output directory to `frontend/dist`

### Backend (Render)
1. Push code to GitHub
2. Create a Web Service on Render
3. Connect the repository
4. Set the build command to `cd backend && npm install`
5. Set the start command to `cd backend && npm start`
6. Add environment variables: `MONGO_URI`, `DB_NAME`, `JWT_SECRET`, `CLIENT_URL`, and `PORT`

## 📄 License

MIT


