import React, { useState, useRef, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import "./CreateNew.style.css";

import { connect } from "react-redux";

function CreateNew(props) {
  //==================Ref for focus on input Fields=============
  const urlRef = useRef();
  const blogTextRef = useRef();
  //===================History==================================
  const history = useHistory();

  const [formData, setFormData] = useState({
    type: "text",
    content: "",
  });

  //============================set the Form data on InputChange===================
  function handleInputChange({ target }) {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  }

  //===========================Form Submit Function============================
  function handleFormSubmit(e) {
    e.preventDefault();

    const id = Math.floor(Math.random() * 100);
    const user = {
      id: 1,
      name: "katarina toren",
      image: "https://randomuser.me/api/portraits/thumb/women/20.jpg",
    };
    const postData = {
      ...formData,
      id,
      user,
    };
    props.dispatch({
      type: "AddCard",
      payload: postData,
    });
    history.push("/");
  }

  const { content, type } = formData;

  return (
    <div className="container-create">
      <div className="create-new-blog">
        <h1>Create New Blog</h1>
      </div>
      <form className="create-new" onSubmit={handleFormSubmit}>
        <div className="control-wrapper">
          <label>Content Type</label>
          <select name="type" value={type} onChange={handleInputChange}>
            <option value="image">Image</option>
            <option value="text">Text</option>
          </select>
        </div>
        {/*===============Render required component according to content type=============  */}
        {type === "image" ? (
          <div className="control-wrapper">
            <label>Image URL</label>
            <input
              ref={urlRef}
              name="content"
              type="text"
              value={content}
              onChange={handleInputChange}
              required
            />
          </div>
        ) : (
          <div className="control-wrapper">
            <label>Blog Text</label>
            <textarea
              ref={blogTextRef}
              name="content"
              value={content}
              onChange={handleInputChange}
              required
              maxLength="200"
            />
          </div>
        )}

        <button type="Submit">Submit</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  postData: state.postData,
  isLoggedIn: state.isLoggedIn,
});

export default connect(mapStateToProps)(CreateNew);
