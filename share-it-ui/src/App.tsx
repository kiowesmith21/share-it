import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './components/homepage/Home';
import Register from './components/register/Register';
import Post from './components/post/Post' 
import Feed from './components/feed/Feed';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/post" element={<Post />} />
        <Route path="/feed" element={<Feed />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
