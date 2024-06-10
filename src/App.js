import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './components/Login/Login';
import { UserManagement } from './components/UserManagement/UserManagement';
import { CreateUser } from './components/NewUser/NewUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user-management" element={<UserManagement />} />
        <Route path="/create-user" element={<CreateUser />} />
      </Routes>
    </Router>
  );
}
