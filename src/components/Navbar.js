import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Navbar() {

      const state = useSelector( state => state.cart)

      console.log('ins navbar');
  return (
    <div style={{position:'fixed', top:0, zIndex:100, width:'100%', }} >
      <nav className="navbar navbar-expand-md  bg-dark py-2 px-5 navbar-dark">
        <div className="container-fluid ">
          <NavLink to="/" className="navbar-brand fw-bold fs-4">
            V-MALL
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/addproduct">
                  Add Product
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              <NavLink to="/login" className="btn btn-secondary">
                <i className="fa fa-sign-in me-1"></i> Login
              </NavLink>
              <NavLink to="/register" className="btn btn-secondary ms-2">
                <i className="fa fa-user-plus me-1"></i> Register
              </NavLink>
              <NavLink to="/cart" className="btn btn-secondary ms-2">
                <i className="fa fa-shopping-cart me-1"></i> Cart
                ({state.length})
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
