import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/Login/LoginPage';
import UserDashboard from './components/UserDashboard/UserDashboard';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import ProductList from './components/ProductList/ProductList';
import ProductForm from './components/ProductForm/ProductForm';


function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product-form" element={<ProductForm />} />
      </Routes>
    </>
  );
}

export default App;
