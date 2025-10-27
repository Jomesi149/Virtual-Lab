# UX Virtual Lab - Backend (MongoDB)

Backend API for UX Virtual Lab application using MongoDB database.

## Features

- ✅ User Authentication (Register/Login) with JWT
- ✅ User Profile Management
- ✅ UX Laws Database
- ✅ User Progress Tracking
- ✅ MongoDB Database
- ✅ RESTful API

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **ODM**: Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs

## Installation

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Update the values in `.env` file

3. Make sure MongoDB is running:
   - For local MongoDB: Start MongoDB service
   - For MongoDB Atlas: Update MONGODB_URI in `.env` with your connection string

## Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ux-virtual-lab
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
NODE_ENV=development
```

## Running the Server

Development mode with auto-reload:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### User

- `GET /api/user/profile` - Get user profile (protected)
- `PUT /api/user/progress/:lawId` - Update user progress (protected)

### UX Laws

- `GET /api/ux-laws` - Get all UX laws
- `GET /api/ux-laws/:id` - Get single UX law by ID
- `POST /api/ux-laws/initialize` - Initialize UX laws database (protected, run once)

### Health Check

- `GET /api/health` - Check API status

## Database Models

### User Model
- name (String, required)
- email (String, required, unique)
- password (String, required, hashed)
- progress (Map of law completions)
- completedLaws (Array of law IDs)
- timestamps (createdAt, updatedAt)

### UXLaw Model
- id (String, unique identifier)
- title (String)
- description (String)
- category (String: interaction, cognitive, behavior, perception)
- fullContent (String)
- principles (Array of Strings)
- examples (Array of Objects)
- timestamps (createdAt, updatedAt)

## Initial Setup

After starting the server for the first time:

1. Register a user account
2. Login to get authentication token
3. Call `/api/ux-laws/initialize` endpoint with the token to populate UX laws

Example using curl:
```bash
# Register
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Admin","email":"admin@example.com","password":"password123"}'

# Initialize UX Laws (use token from register/login response)
curl -X POST http://localhost:5000/api/ux-laws/initialize \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

## Project Structure

```
backend/
├── config/
│   └── database.js       # MongoDB connection
├── models/
│   ├── User.js          # User model
│   └── UXLaw.js         # UX Law model
├── routes/
│   ├── auth.js          # Authentication routes
│   ├── user.js          # User routes
│   └── uxLaws.js        # UX Laws routes
├── middleware/
│   └── auth.js          # JWT authentication middleware
├── .env                 # Environment variables
├── .env.example         # Environment variables template
├── package.json
└── server.js            # Main server file
```

## License

ISC
