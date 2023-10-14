import React from 'react';
import './Home.css'
import logo from './logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

const Home = () => {

  let navigate = useNavigate();

  function registerBtnClick() {
    navigate('/register');
  }

  return (
    <div className="home">
      <header className="home-header">
        <nav className="navbar navbar-expand-lg bg-body-tertiary" >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">ShareIt</a>
            <a className="nav-link active" aria-current="page" href="#">About</a>
          </div>
        </nav>
      </header>
      <div className='content'>
        <img src={logo} className="home-logo" alt="logo" />
        <div className='login-box'>
          <div className="mb-3">
            <label className="form-label">Username:</label>
            <div className="input-group">
                <input type="text" className="form-control" id="username-input" aria-describedby="basic-addon3 basic-addon4" />
            </div>
            <label className="form-label">Password:</label>
            <div className="input-group">
                <input type="password" className="form-control" id="password-input" aria-describedby="basic-addon3 basic-addon4" />
            </div>
          </div>
            <div>
              <button type="button" className="btn btn-primary" >Login</button>
            </div>
            <button type="button" className="btn btn-primary" onClick={registerBtnClick}>Register</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
