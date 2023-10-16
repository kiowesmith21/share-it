import React from 'react';
import axios from "axios";
import './Feed.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../navbar/Navbar';

const baseURL = "http://localhost:8080/users";

const Feed = () => {

  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  let navigate = useNavigate();

  function backBtn() {
    navigate('/');
  }

  return (
    <div className="register">
      <header className="register-header">
        <Navbar />
      </header>
      <div className='content'>
        feed
      </div>
    </div>
  );
}

export default Feed;
