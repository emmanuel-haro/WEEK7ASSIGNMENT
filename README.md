Developer Task Manager
A full-stack MERN application for managing tasks with role-based access control.

Features
User Authentication - JWT-based signup/login

Role-Based Dashboards - Separate admin and developer views

Task Management - Create, read, update, delete tasks

Admin Controls - Admins can manage all users' tasks

Developer Access - Developers can only manage their own tasks

Responsive UI - Built with React and Tailwind CSS

Dark Mode - Theme toggle support

Tech Stack
Frontend: React, Vite, Tailwind CSS, Radix UI

Backend: Node.js, Express.js, MongoDB, Mongoose

Authentication: JWT tokens with bcrypt

UI Components: Shadcn/ui components

Live Demo
Frontend (Vercel): https://week-7-assignment-six.vercel.app/

Backend (Render): https://week7assignment-68se.onrender.com

⚠️ Replace the above URLs with your actual deployed links.

Installation
Prerequisites
Node.js (v14+)

MongoDB

pnpm (recommended) or npm

Setup
Clone the repository

bash
Copy
Edit
git clone <repository-url>
cd developer-task-manager
Install dependencies

bash
Copy
Edit
# Install server dependencies
cd server
pnpm install

# Install client dependencies
cd ../client
pnpm install
Environment Setup

Create a .env file in the server directory:

ini
Copy
Edit
PORT=5000
MONGO_URI=mongodb://localhost:27017/devtaskdb
JWT_SECRET=supersecretkey123
Start MongoDB

bash
Copy
Edit
sudo systemctl start mongod
Start the application

bash
Copy
Edit
# Start server (from server directory)
pnpm dev

# Start client (from client directory, in a new terminal)
pnpm dev
Usage
Access the Application Locally
Client: http://localhost:5173

Server API: http://localhost:5000

Or use the hosted versions:

Client (Vercel): https://your-vercel-app.vercel.app

Server (Render): https://your-render-backend.onrender.com

Default Admin Account
Username: admin

Email: admin@example.com

Password: admin123

Creating Admin User
To create an admin user manually, run this script in the server directory:

bash
Copy
Edit
node -e "
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
  const hashedPassword = await bcrypt.hash('admin123', 10);
  await User.create({
    username: 'admin',
    email: 'admin@example.com',
    password: hashedPassword,
    role: 'admin'
  });
  console.log('Admin user created!');
  process.exit(0);
}).catch(console.error);
"
User Roles
Admin: Can view and manage all users' tasks

Developer: Can only manage their own tasks

Project Structure
bash
Copy
Edit
├── client/          # React frontend
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page components
│   │   ├── services/    # API services
│   │   └── utils/       # Utility functions
│   └── package.json
├── server/          # Express backend
│   ├── controllers/ # Route handlers
│   ├── middleware/  # Authentication middleware
│   ├── models/      # MongoDB models
│   ├── routes/      # API routes
│   └── package.json
└── README.md
API Endpoints
Authentication
POST /api/auth/signup - User registration

POST /api/auth/login - User login

Tasks
GET /api/tasks/me - Get user's tasks

GET /api/tasks/all - Get all tasks (admin only)

POST /api/tasks - Create task

PUT /api/tasks/:id - Update task

DELETE /api/tasks/:id - Delete task