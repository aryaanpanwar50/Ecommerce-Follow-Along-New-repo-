import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Homepage from './components/HomePage';
import Footer from './components/Footer';
import Header from './components/Header';
import AddProduct from './components/AddProduct';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/e" element={
            <div>
              <Header />
              <Homepage />
              <Footer />
            </div>
          } />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
      </Router>
    </div>
  );
}