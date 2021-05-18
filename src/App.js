import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import './App.css';
import PostList from "./PostList";
import PostDetail from "./PostDetail";
import {PostStoreProvider} from "./PostStore";

// create context for storing data





function App() {
  
  return (
    <PostStoreProvider>
    <div className = "container listItembox">
    <div className="row">
      <section className="col-md">
      <ul className="list-group">
       <PostList/>
      
    </ul>
      </section >
      <section className="col-md box" >
        <div className="row">
          <PostDetail/>
        </div>
      </section>
    </div>

  </div>
  </PostStoreProvider>
  );
}

export default App;
