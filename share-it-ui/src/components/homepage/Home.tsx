import React from 'react';
import logo from './logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className='login-box'>
      <div className="mb-3">
        <label className="form-label">Your vanity URL</label>
        <div className="input-group">
            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
