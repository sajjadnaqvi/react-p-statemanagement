import React from "react";
import { isElementOfType } from 'react-dom/test-utils';
import './App.css';

const PostList = () =>{
  return <div></div>
}

const PostDetail = () =>{
  return <div></div>
}

function App() {
  return (
    <div className = "container listItembox">
    <div className="row">
      <section className="col-md">
      <ul className="list-group">
      <li className="list-group-item">
            <h1>list item</h1>
          </li>
      
    </ul>
      </section >
      <section className="col-md box" >
        <div className="row">
          <h1>list detail</h1>
        </div>
      </section>
    </div>

  </div>
  );
}

export default App;
