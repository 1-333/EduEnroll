import React, {useEffect} from 'react';
import {Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import AddStudents from './components/AddStudents';
import './App.css';
import './index.css'

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
  useEffect(() => {
    // Check if students data is already in local storage
    const studentsData = localStorage.getItem('students');
    if (!studentsData) {
      // Initialize local storage with data from students.json (simulated here)
      const initialStudents = [
        {
          id: 1,
          firstName: "abc",
          lastName: "def",
          email: "abcdef@example.com",
          mobileNumber: 9226052343,
          active: true
        },
        {
          id: 2,
          firstName: "abc",
          lastName: "def",
          email: "abcdef@example.com",
          mobileNumber: 9173986591,
          active: true
        },
        {
          id: 3,
          firstName: "Aditya",
          lastName: "Todi",
          email: "adityatodi@example.com",
          mobileNumber: 9173986591,
          active: true
        }
      ];
      localStorage.setItem('students', JSON.stringify(initialStudents));
    }
  }, []);
  return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/add-students"
          element={
            <PrivateRoute>
              <AddStudents />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>

  );
};

export default App;

