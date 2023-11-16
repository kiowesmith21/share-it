import React from 'react';
import './Navbar.css';
import logo from './logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="http://localhost:3000/feed">ShareIt</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="http://localhost:3000/feed">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Profile</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="http://localhost:3000/post">Post</a>
          </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="http://localhost:3000">Log Out</a>
          </li>
      </ul>
          
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

  );
}

export default Navbar;
