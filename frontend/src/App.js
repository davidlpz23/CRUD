import React from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

function App() {
  return (
    <div className="container">
      <h1 className="mt-5">User Management</h1>
      <UserForm />
      <UserList />
    </div>
  );
}

export default App;

