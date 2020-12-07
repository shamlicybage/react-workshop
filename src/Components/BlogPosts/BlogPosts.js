import React, { useState } from "react";
import Card from "../Card";
import Filters from "../Filters";
import { getFilteredBlogs } from "./helpers";
import "./BlogPosts.styles.css";

function BlogPosts({ blogs }) {
  console.log(blogs[0].content);
  const [filters, setFilters] = useState({});

  function setFilterValue({ target }) {
    const { name, value } = target;
    setFilters({ ...filters, [name]: value });
  }

  const filteredBlogs = getFilteredBlogs(blogs, filters);
  const[search,setSearchTerm]=useState("")
  BlogPosts.defaultProps={
    content:"abc",
    keyword:"abc"
  }
  
 
  return (
    <>
    <label>Search By Keyword: </label>
      <input label="Search" placeholder="search.." onChange={event=>{setSearchTerm(event.target.value)}}/>
      <Filters onFilterChange={setFilterValue} />

      <div className="blog-posts">
       

        {filteredBlogs.filter((val)=>{
          
          if(search ===""){
            return val
          }else if(val.content.toLowerCase().includes(search.toLowerCase())){
            return val;

          }
        }).map((val) => (
          <Card key={val.id} data={val} />))
        }
      </div>

    </>
        )
}
    
export default BlogPosts;    


