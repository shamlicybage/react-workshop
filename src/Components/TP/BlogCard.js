import React from 'react'


const BlogCard=(blogs)=>{
    console.log(blogs);
    return(
    <div className="BlogCard">
        <div className="card mx-0">
            <img className="card-img" src={blogs.url} alt=""/>
        </div>
        <div className="card-body">
          <h4 className="card-title">{blogs.postTitle}</h4>
          <p className="card-text">{blogs.content}</p>
        </div>
        <div className="card-footer">
          <p> Created on: <span>{blogs.postDate} at {blogs.postTime}</span> by <b>{blogs.author}</b></p>
          <p> Categoery: <span><b>{blogs.category}</b></span></p>
        </div>
    </div>
    )
}

export default BlogCard