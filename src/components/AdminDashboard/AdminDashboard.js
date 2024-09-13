import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css'; 

function AdminDashboard() {
  return (
    <div className="container1">
      <h2>Admin Dashboard</h2>
      <Link to="/products" className="button">View Products</Link>
      <br />
      <Link to="/product-form" className="button">Add Product</Link>
    </div>
  );
}

export default AdminDashboard;
