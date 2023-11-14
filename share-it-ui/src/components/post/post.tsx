import React from 'react';
import './Post.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import Navbar from '../navbar/Navbar';

const Post = () => {

  let navigate = useNavigate();

  function postBtnClick() {
    console.log("posted")
  }

  return (
    <div className="post">
      <header className="post-header">
        <Navbar />
      </header>
      <div className='content'>
        <div className='post-box'>
          <div className="mb-3">
            <label className="form-label">Post:</label>
            <div className="input-group">
                <input type="text" className="form-control" id="username-input" aria-describedby="basic-addon3 basic-addon4" />
            </div>
            <label className="form-label">Upload Image:</label>
            <div className="input-group">
                <input type="text" className="form-control" id="post-text-input" aria-describedby="basic-addon3 basic-addon4" />
            </div>
          </div>
            <button type="button" className="btn btn-primary" onClick={postBtnClick}>Post</button>
        </div>
      </div>
    </div>
  );
}

export default Post;
