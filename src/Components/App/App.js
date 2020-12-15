import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../Header";
import BlogPost from "../BlogPosts/BlogPost";
import CreateNew from "../CreateNew";
import Footer from "../Footer";
import Login from "../Login/Login";
import { LoginContext } from "../Login/LoginContext";
import store from "../../store";
import { Provider } from "react-redux";
import Dummy from "../Dummy";

export default function App() {
  const [blogs, setBlogs] = useState([]);
  const login = useState(false);
  console.log(store);

  //============================Set blogs after creating new blog===================
  function handleCreateNew(newBlog) {
    setBlogs([newBlog, ...blogs]);
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        
        <Switch>
          {/*================Home===================== */}
          <Route exact path="/">
            <BlogPost />
          </Route>
          {/*================Create Blog===================== */}
          <Route path="/create">
            <CreateNew />
          </Route>
          {/*================Login===================== */}
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
