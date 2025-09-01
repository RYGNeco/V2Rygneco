# RYGNeco V2 - Enterprise Resource Management Platform

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-2.0.0-green.svg)

## 🚀 Overview

RYGNeco V2 is a modern, full-stack enterprise resource management platform built with React, TypeScript, and Node.js. The application features separate frontend and backend architectures, role-based access control (RBAC), and a comprehensive dashboard system for both administrators and clients.

## 📋 Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## ✨ Features

- **Authentication & Authorization**
  - Secure user authentication system
  - Role-based access control (RBAC)
  - JWT token-based security

- **Admin Dashboard**
  - Comprehensive metrics and analytics
  - User management interface
  - System monitoring tools

- **Client Dashboard**
  - Request management
  - User history tracking
  - Personalized interface

- **Modern UI/UX**
  - Responsive design
  - Dark/Light mode support
  - Interactive components
  - Error boundaries and fallbacks

## 🛠 Technology Stack

### Frontend
- React 18
- TypeScript
- Vite
- TailwindCSS
- React Router
- Context API

### Backend
- Node.js
- Express.js
- TypeScript
- JWT Authentication
- Error Handling Middleware

## 📁 Project Structure

```
V2Rygneco/
├── frontend/                # React frontend application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React context providers
│   │   ├── services/      # API services
│   │   └── utils/         # Utility functions
│   └── public/            # Static assets
│
├── backend/                # Node.js backend application
│   ├── src/
│   │   ├── controllers/   # Request handlers
│   │   ├── middleware/    # Custom middleware
│   │   ├── routes/        # API routes
│   │   └── config/        # Configuration files
│   └── tests/             # Backend tests
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v16.0.0 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/RYGNeco/V2Rygneco.git
cd V2Rygneco
```

2. Install frontend dependencies:
```bash
cd frontend
npm install
```

3. Install backend dependencies:
```bash
cd ../backend
npm install
```

4. Set up environment variables:
```bash
# Backend (.env)
cp .env.example .env

# Frontend (.env)
cp .env.example .env
```

5. Start the development servers:

```bash
# Backend
cd backend
npm run dev

# Frontend (in a new terminal)
cd frontend
npm run dev
```

## ⚙️ Configuration

### Environment Variables

Backend (.env):
```env
PORT=3000
NODE_ENV=development
JWT_SECRET=your_jwt_secret
DATABASE_URL=your_database_url
```

Frontend (.env):
```env
VITE_API_URL=http://localhost:3000
VITE_ENV=development
```

## 📘 Usage

1. Access the frontend application at `http://localhost:5173`
2. Access the backend API at `http://localhost:3000`

### Available Scripts

Frontend:
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

Backend:
```bash
npm run dev      # Start development server
npm run build    # Build TypeScript
npm run start    # Start production server
npm run test     # Run tests
```

## 📚 API Documentation

API documentation is available at `/api/docs` when running the backend server in development mode.

### Key Endpoints

- `POST /api/auth/login` - User authentication
- `POST /api/auth/register` - User registration
- `GET /api/users` - Get users (Admin only)
- `PUT /api/users/:id` - Update user (Admin only)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Commit Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test changes
- `chore:` Build process or auxiliary tool changes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

Project Link: [https://github.com/RYGNeco/V2Rygneco](https://github.com/RYGNeco/V2Rygneco)

---

Made by RYGNeco Team
