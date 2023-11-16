import React from 'react';
import './Post.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

const Post = () => {
  let navigate = useNavigate();

  function postBtnClick() {
    console.log('posted');
  }

  return (
    <div className="post-container">
      <header className="post-header">
        <Navbar />
      </header>
      <div className="content">
        <div className="post-box">
          <div className="mb-3">
            <label htmlFor="post-text" className="form-label">
              Post:
            </label>
            <div className="input-group">
              <textarea
                className="form-control"
                id="post-text"
                rows={3}
                placeholder="Write your post here..."
              ></textarea>
            </div>
            <label htmlFor="image-upload" className="form-label">
              Upload Image:
            </label>
            <div className="input-group">
              <input
                type="file"
                className="form-control"
                id="image-upload"
                aria-describedby="image-upload-addon"
              />
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={postBtnClick}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
