import React from 'react';
import axios from "axios";
import './Register.css';
import logo from '../homepage/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const baseURL = "http://localhost:8080/users";

const Register = () => {

  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  let navigate = useNavigate();

  function backBtn() {
    navigate('/');
  }

  const handleSubmit = async () => {
    axios
    .post(baseURL, {
      userName: {userName},
      password: {password}
    })
    .then(res => {
      console.log(res);
      console.log(res.data);
    }).catch((err) => {
      console.log(err)
  });
    
  }

  return (
    <div className="register">
      <header className="register-header">
        <nav className="navbar navbar-expand-lg bg-body-tertiary" >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">ShareIt</a>
            <a className="nav-link active" aria-current="page" href="#">About</a>
          </div>
        </nav>
      </header>
      <div className='content'>
        <img src={logo} className="register-logo" alt="logo" />
        <form onSubmit={handleSubmit}>
          <div className='login-box'>
            <div className="mb-3">
              <h1>Create Account</h1>
              <label className="form-label">Create Username:</label>
              <div className="input-group">
                  <input type="text" className="form-control" id="username-input" aria-describedby="basic-addon3 basic-addon4" name="us" onChange={(e: any) => setUserName(e.target.value)}/>
              </div>
              <label className="form-label">Create Password:</label>
              <div className="input-group">
                  <input type="password" className="form-control" id="password-input" aria-describedby="basic-addon3 basic-addon4" name="pw" onChange={(e: any) => setPassword(e.target.value)}/>
              </div>
            </div>
              <div>
                <button type="submit" className="btn btn-primary">Create Account</button>
              </div>
              <button type="button" className="btn btn-primary" onClick={backBtn}>Back</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
