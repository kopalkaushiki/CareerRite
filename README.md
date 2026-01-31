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

4. Update `.env` with your MongoDB Atlas connection string:
```
PORT=5000
MONGODB_URI=your-mongodb-atlas-connection-string
```

5. Start the backend server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

The backend API will be available at `http://localhost:5000`

## 📁 Project Structure

```
CareerRite/
├── frontend/
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/           # Page components
│   │   ├── context/         # React Context for state
│   │   ├── data/            # Static data files
│   │   └── App.jsx          # Main app component
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── models/              # MongoDB models
│   ├── routes/              # API routes
│   ├── server.js            # Express server
│   └── package.json
│
└── README.md
```

## 🌐 Pages

1. **Home** (`/`) - User information form
2. **Explore** (`/explore`) - Browse career streams
3. **Stream Details** (`/stream/:streamName`) - View path, exams, and colleges
4. **Profile** (`/profile`) - User profile and progress

## 🛠️ Tech Stack

- **Frontend**: React + Vite + Tailwind CSS + React Router
- **Backend**: Node.js + Express
- **Database**: MongoDB Atlas
- **Deployment**: Vercel (Frontend) + Render (Backend)

## 📝 Features

- User profile management
- Career stream exploration
- Detailed path, exam, and college information
- Progress tracking
- Responsive design
- Modern UI with pastel color scheme

## 🚢 Deployment

### Frontend (Vercel)
1. Push code to GitHub
2. Connect repository to Vercel
3. Set build command: `cd frontend && npm install && npm run build`
4. Set output directory: `frontend/dist`

### Backend (Render)
1. Push code to GitHub
2. Create new Web Service on Render
3. Connect repository
4. Set build command: `cd backend && npm install`
5. Set start command: `cd backend && npm start`
6. Add environment variables (MONGODB_URI, PORT)

## 📄 License

MIT



