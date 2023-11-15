import React, { useState, useEffect } from 'react';
import axios from "axios";
import './Feed.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../navbar/Navbar';
import { useUserContext } from '../config/UserContext';

const Feed = () => {
  const { userName } = useUserContext();
  const [following, setFollowing] = useState<string[] | undefined>(undefined);
  const [posts, setPosts] = useState<any[]>([]); // State to store the posts

  const getFollowing = async () => {
    const result = await axios.get(`http://localhost:8080/users/${userName}`);
    setFollowing(result.data.following);
  };

  const getPosts = async (name: string) => {
    const result = await axios.get(`http://localhost:8080/users/${name}`);
    setPosts([]); // Clear the posts state
    setPosts(prevPosts => [...prevPosts, ...result.data.postIds]);
  };

  useEffect(() => {
    const getAllPosts = async () => {
      if (!following) {
        await getFollowing();
      }

      if (following) {
        for (let i = 0; i < following.length; i++) {
          await getPosts(following[i]);
        }
      }
    };

    getAllPosts();
  }, [userName, following]);

  return (
    <div className="feed-container">
      <header className="feed-header">
        <Navbar />
      </header>
      <div className="feed-content">
        <h2>Posts</h2>
        {posts.map(post => (
          <div key={post.id} className="post-card">
            <div className="post-header">
              <img src={post.userAvatar} alt="User Avatar" className="user-avatar" />
              <p className="username">{post.username}</p>
            </div>
            <p className="post-body">{post.body}</p>
            {post.img && <img src={post.img} alt="Post Image" className="post-image" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
