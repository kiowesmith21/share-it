import React, { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './components/homepage/Home';
import Register from './components/register/Register';
import Post from './components/post/Post';
import Feed from './components/feed/Feed';
import { UserContextProvider } from "./components/config/UserContext";

function App() {

  return (
    <BrowserRouter>
    <UserContextProvider>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/post" element={<Post />} />
          <Route path="/feed" element={<Feed />} />
      </Routes>
    </UserContextProvider>
  </BrowserRouter>
  );
}

export default App;
