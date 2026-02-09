
# CRUD App – Full Stack (React + Node.js + PostgreSQL)

This repository contains a **full-stack CRUD application** built to demonstrate solid foundations in **frontend and backend development**, clean architectural separation, and RESTful API design.

The application manages users with full **Create, Read, Update, and Delete (CRUD)** functionality.

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
