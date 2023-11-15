import React from 'react';
import axios from "axios";
import './Feed.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import { useUserContext } from '../config/UserContext';

const Feed = () => {

  const { userName, updateUser } = useUserContext();

  const [ following, setFollowing ] = useState<string[] | undefined>(undefined);
  const [ postIds, setPostIds ] = useState<string[] | undefined>(undefined);
  // const [items, setItems] = useState<any[]>([])

  let navigate = useNavigate();

  const getFollowing = async () => {
    const result = await axios(
      `http://localhost:8080/users/${userName}`,
    )
      .then(res => {
          setFollowing(res.data.following);
          console.log(following);
      })
    // .then((res) => setItems(res.data));
  };

  const getPostIds = async (name: string) => {
    const result = await axios(
      `http://localhost:8080/users/${name}`,
    )
      .then(res => {
          setPostIds(res.data.postIds);
          console.log(postIds); 
      })
  };

  const getPost = async (id: string) => {
    const result = await axios(
      `http://localhost:8080/posts/${id}`,
    )
      .then(res => {
          console.log(res.data);
      })
  };

  const getAllPosts = async () => {

    await getFollowing();

    if (following) {
      for (let i = 0; i < following.length; i++) {
        await getPostIds(following[i]);
      }

      if (postIds) {
        for (let k = 0; k < postIds.length; k++) {
          await getPost(postIds[k]);
        }
      }
    }
   };

  useEffect(() => {
    getAllPosts();
  }, []);


  return (
    <div className="register">
      <header className="register-header">
        <Navbar />
      </header>
      <div className='content'>
        testing
        {/* <div>
          {items.length > 0 && items.map((item) => <p key={item.id}>{item.prod_name}</p>)}
        </div> */}
      </div>
    </div>
  );
}

export default Feed;
