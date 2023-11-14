import React from 'react';
import axios from "axios";
import './Feed.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '../navbar/Navbar';

const baseURL = "http://localhost:8080/users";

const Feed = () => {

  // const [userName, setUserName] = useState();
  const [items, setItems] = useState<any[]>([])

  let navigate = useNavigate();

  const fetchData = async () => {
    const result = await axios(
      'http://localhost:8080/users',
    )
    .then((response) => setItems(response.data));
  };

  useEffect(() => {
    fetchData();
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
