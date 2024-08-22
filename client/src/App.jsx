import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from "./actions/posts";

import memories from "./images/memories.png";
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

import './App.css'; // Import the CSS file

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="container">
      <header className="appBar">
        <h2 className="heading">Memories</h2>
        <img className="image" src={memories} alt="icon" height="60" />
      </header>
      <div className="grow">
        <div className="grid-container">
          <div className="grid-item">
            <Posts />
          </div>
          <div className="grid-item">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
