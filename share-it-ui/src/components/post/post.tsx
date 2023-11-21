import React, { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';
import './Post.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import { useUserContext } from '../config/UserContext';

const Post = () => {
  const navigate = useNavigate();
  const { userName } = useUserContext();
  const [postBody, setPostBody] = useState<string>('');
  const [postFile, setPostFile] = useState<File | null>(null);

  const handlePostBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPostBody(e.target.value);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setPostFile(file);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('userName', userName);
    formData.append('postBody', postBody);

    if (postFile) {
      formData.append('file', postFile);
    }

    try {
      const response = await axios.post('http://localhost:8080/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Post submitted successfully:', response.data);

      // Add logic to handle successful submission
      // navigate('/path-to-redirect');

    } catch (error) {
      console.error('Error submitting post:', error);
      // Add logic to handle error
    }
  };

  return (
    <div className="post-container">
      <header className="post-header">
        <Navbar />
      </header>
      <div className="content">
        <div className="post-box">
          <form onSubmit={handleSubmit}>
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
                  onChange={handlePostBodyChange}
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
                  onChange={handleFileChange} // Add this line
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Post;
