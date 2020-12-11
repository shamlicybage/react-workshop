import React, { useEffect, useState } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Header from "../Header";
import BlogPosts from "../BlogPosts";
import CreateNew from "../CreateNew";
import Footer from "../Footer"
import Login from "../Login/Login";
import {LoginContext} from '../Login/LoginContext'

export default function App() {
  const [blogs, setBlogs] = useState([]);
  const login = useState(false)
 
  //=================Fetch the blogs from data.json file================
  useEffect(() => {
    
      fetch("/data.json")
      .then(resp=>resp.json())
      .then(data=>setBlogs(data))
  }, []);

//============================Set blogs after creating new blog===================
  function handleCreateNew(newBlog) {
    setBlogs([newBlog, ...blogs]);
    
  }
  
  return (
    <>
    <BrowserRouter>
      <div className="app">
        {/*================Header===================== */}
        
         <LoginContext.Provider value={login}>
           <Header/>
          <Switch>
          {/*================Routes===================== */}
          {/*================Home===================== */}
          <Route exact path="/">
            <BlogPosts blogs={blogs} />
          </Route>
          {/*================Create Blog===================== */}
          <Route path="/create">
            <CreateNew
            onSubmit={handleCreateNew}/>
          </Route>
          {/*================Login===================== */}
          <Route exact path="/login">
            <Login/>
           </Route>
         </Switch>
         {/*================Footer===================== */}
        <Footer/>
        </LoginContext.Provider>
      </div>
      </BrowserRouter>
    </>
  );
}

