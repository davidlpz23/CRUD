# CRUD App – Full Stack (React + Node.js + PostgreSQL)

This repository contains a **full-stack CRUD application** developed to demonstrate
clean separation of concerns, RESTful API design, and frontend–backend integration.

The application manages users with full **Create, Read, Update, and Delete (CRUD)** functionality.

---

## 📌 Project Architecture Overview

This project follows a **three-layer architecture**:

1. **Presentation Layer** – React frontend
2. **Business Logic Layer** – Node.js + Express controllers
3. **Data Access Layer** – Sequelize ORM with a relational database

---

## 📁 Project Structure

CRUD/
├── backend/
│ ├── config/ # Database and environment configuration
│ ├── controllers/ # Business logic (CRUD operations)
│ ├── migrations/ # Database schema management
│ ├── models/ # Sequelize models (Data layer)
│ ├── routes/ # REST API endpoints
│ ├── app.js # Express server entry point
│ ├── package.json
│ └── package-lock.json
│
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/ # React UI components
│ │ │ ├── UserList.js
│ │ │ └── UserForm.js
│ │ ├── App.js # Main React component
│ │ ├── index.js # React bootstrap
│ │ └── styles/ # CSS files
│ ├── package.json
│ └── README.md
│
├── ARCHITECTURE.md # Detailed architecture description
└── README.md


---

## 🚀 Features

- Create users
- Retrieve user list
- Update user data
- Delete users
- RESTful API communication
- MVC pattern implemented in backend
- Separation of frontend and backend concerns

---

## 🧪 Technologies Used

### Frontend
- React (Create React App)
- JavaScript (ES6+)
- HTML5 / CSS3

### Backend
- Node.js
- Express.js
- Sequelize ORM
- PostgreSQL (configurable)

---

## 📂 Key Source Files

### Frontend
- `frontend/src/index.js` – React entry point
- `frontend/src/App.js` – Application container
- `frontend/src/components/UserList.js` – User list UI
- `frontend/src/components/UserForm.js` – Create / update form

### Backend
- `backend/app.js` – Express server setup
- `backend/routes/userRoutes.js` – API routes
- `backend/controllers/userController.js` – Business logic
- `backend/models/user.js` – Sequelize model

---

## ▶️ How to Run the Project Locally

### Backend
```bash
cd backend
npm install
npm start


### Frontend
```bash
cd frontend
npm install
npm start

Frontend: http://localhost:3000

Backend API: http://localhost:5000 (or configured port)

Purpose of This Project


This project was developed to demonstrate:

Full-stack development fundamentals

Clean architectural separation

REST API design

React component-based UI

Database modeling with ORM



Author

German David Lopez

GitHub: https://github.com/davidlpz23



---

## 📄 `ARCHITECTURE.md` (listo completo)

```md
# CRUD Application Architecture

This document describes the architectural design of the CRUD application.

---

## Backend Architecture

**Pattern:** MVC (Model–View–Controller)

- **Models:** Sequelize ORM entities representing database tables
- **Controllers:** Business logic handling CRUD operations
- **Routes:** REST API endpoints mapping HTTP requests to controllers
- **Config:** Database connection and environment configuration

This structure enforces a clear separation between business logic, routing, and data access.

---

## Frontend Architecture

**Pattern:** Component-based React architecture

- **App.js:** Root application component
- **components/:** Reusable UI components (UserList, UserForm, etc.)
- **index.js:** React DOM bootstrap and application entry point

---

## Communication

- REST API over HTTP
- JSON request and response format
- Frontend consumes backend endpoints using HTTP requests

---

## Database

- Relational database: PostgreSQL
- Managed through Sequelize ORM and migrations
