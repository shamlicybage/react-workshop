import React, { useState } from "react";
import Header from "../Header";
import BlogPosts from "../BlogPosts";
import CreateNew from "../CreateNew";
import blogPostsData from "./data";
import Footer from "../Footer"

export default function App() {
  const [nav, setNav] = useState("home");
  const [blogs, setBlogs] = useState(blogPostsData);

  function handleNavClick(value) {
    const updatedNav = value === nav ? null : value;
    setNav(updatedNav);
  }

  function handleCreateNew(newBlog) {
    setBlogs([newBlog, ...blogs]);
    setNav("home");
  }

  return (
    <>
      <Header onNavClick={handleNavClick} />
      {nav === "createNew" ? (
        <CreateNew onSubmit={handleCreateNew} />
      ) : (
        <BlogPosts blogs={blogs} />
      )}
      <Footer/>
    </>
  );
}

