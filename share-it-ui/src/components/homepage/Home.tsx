import React, { useState, useEffect, useContext } from 'react';
import './Home.css'
import logo from './logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useUserContext } from '../config/UserContext';

const Home = () => {

  let navigate = useNavigate();

  const { userName, updateUser } = useUserContext();

  // const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [reqPassword, setReqPassword] = useState();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const userData = {
      userName: userName
    };
    //get user data by username, check if password matches
    axios
    .get(`http://localhost:8080/users/${userName}`)
    .then(res => {
      console.log(res);
      console.log(res.data);
      setReqPassword(res.data.password);

      if (password === reqPassword) {
        //if sucessful login:
        navigate('/feed');
      } 

    }).catch((err) => {
      console.log(err)
  });
  }

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
        <form onSubmit={handleSubmit}>
        <div className='login-box'>
          <div className="mb-3">
            <label className="form-label">Username:</label>
            <div className="input-group">
                <input type="text" className="form-control" id="username-input" aria-describedby="basic-addon3 basic-addon4" name="us" onChange={(e: any) => updateUser(e.target.value)}/>
            </div>
            <label className="form-label">Password:</label>
            <div className="input-group">
                <input type="password" className="form-control" id="password-input" aria-describedby="basic-addon3 basic-addon4" name="pw" onChange={(e: any) => setPassword(e.target.value)}/>
            </div>
          </div>
            <div>
              <button type="submit" className="btn btn-primary" >Login</button>
            </div>
            <button type="button" className="btn btn-primary" onClick={registerBtnClick}>Register</button>
        </div>
        </form>
      </div>
    </div>
  );
}

export default Home;
