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
  const [loading, setLoading] = useState(true);

  const getFollowing = async () => {
    try {
    const result = await axios.get(`http://localhost:8080/users/${userName}`);
    setFollowing(result.data.following);
  } catch (error) {
    console.error('Error fetching following:', error);
  } 
  };

  const getPosts = async (name: string) => {
    try {
      const result = await axios.get(`http://localhost:8080/users/${name}`);
      const userPosts = result.data.postIds || [];
      return userPosts;
    } catch (error) {
      console.error('Error fetching post ids:', error);
      return [];
    }
  };

  useEffect(() => {
    const getAllPosts = async () => {
  setLoading(true);

  try {
    if (!following) {
      await getFollowing();
    }

    const allPosts = [];
    if (following) {
      for (let i = 0; i < following.length; i++) {
        const userPosts = await getPosts(following[i]);
        allPosts.push(...userPosts);
      }
    }

    setPosts(allPosts);
  } finally {
    setLoading(false);
  }
};

    getAllPosts();
  }, [userName, following]);

  if (loading) {
    return <p>Loading...</p>; // or display a loading spinner or other loading indicator
  }

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
