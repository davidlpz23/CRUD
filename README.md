
# CRUD App – Full Stack (React + Node.js + PostgreSQL)
---
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

---

A full-stack CRUD application demonstrating RESTful API design, React component architecture, and relational database management using Sequelize ORM.

The application provides a complete user management system with Create, Read, Update, and Delete (CRUD) operations.

---

## Project Overview

- Full-stack application with separated frontend and backend
- Three-layer architecture implementation
- RESTful API with Express
- React-based user interface
- Relational database managed via ORM

---

## Architecture Overview

This project follows a **three-layer architecture**:

1. **Presentation Layer** – React frontend
2. **Business Logic Layer** – Node.js + Express controllers
3. **Data Access Layer** – Sequelize ORM with a relational database

This separation improves maintainability, scalability, and clarity of responsibilities.

---

## Project Structure

    CRUD/
    ├── backend/
    │   ├── config/       # Database and environment configuration
    │   ├── controllers/  # Business logic (CRUD operations)
    │   ├── migrations/   # Database schema management
    │   ├── models/       # Sequelize ORM models
    │   ├── routes/       # REST API endpoints
    │   ├── app.js        # Express server entry point
    │   ├── package.json
    │   └── package-lock.json
    │
    ├── frontend/
    │   ├── public/       # Static assets
    │   ├── src/
    │   │   ├── components/
    │   │   │   ├── UserList.js
    │   │   │   └── UserForm.js
    │   │   ├── App.js    # Main React component
    │   │   ├── index.js  # React entry point
    │   │   └── styles/   # CSS files
    │   ├── package.json
    │   └── README.md
    │
    ├── ARCHITECTURE.md   # Detailed architecture documentation
    └── README.md

---

## Features

- Create users
- Retrieve user list
- Update user data
- Delete users
- RESTful API communication
- MVC pattern implemented in backend
- Clear separation between frontend and backend
- ORM-based database modeling

---

## Technologies Used

### Frontend
- React (Create React App)
- JavaScript (ES6+)
- HTML5
- CSS3

### Backend
- Node.js
- Express.js
- Sequelize ORM
- PostgreSQL (configurable)

---

## 🔗 Backend API Endpoints

| Method | Endpoint           | Description             |
|:-------|:-------------------|:------------------------|
| GET    | `/api/users`       | Retrieve all users      |
| POST   | `/api/users`       | Create a new user       |
| PUT    | `/api/users/:id`   | Update an existing user |
| DELETE | `/api/users/:id`   | Delete a user           |

---

## Key Source Files

### Frontend
- `frontend/src/index.js` – React entry point
- `frontend/src/App.js` – Main application container
- `frontend/src/components/UserList.js` – User list UI
- `frontend/src/components/UserForm.js` – User create/update form

### Backend
- `backend/app.js` – Express server setup
- `backend/routes/userRoutes.js` – API routes
- `backend/controllers/userController.js` – Business logic
- `backend/models/user.js` – Sequelize model

---

## How to Run the Project Locally

### Backend

    cd backend
    npm install
    npm start

### Frontend

    cd frontend
    npm install
    npm start

### Local URLs
- **Frontend:** `http://localhost:3000`
- **Backend API:** `http://localhost:5000` (or configured port)

---

## Purpose of This Project

This project was developed to demonstrate:

- Full-stack development fundamentals
- Clean architectural separation
- REST API design
- React component-based UI
- Database modeling using an ORM
- Professional project organization for junior developer roles

---

## Author

**German David Lopez Orozco**

GitHub: [https://github.com/davidlpz23](https://github.com/davidlpz23)
