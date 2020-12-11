import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Card from "../Card";
import Filters from "../Filters";
import Search from '../Search';
import { getFilteredBlogs } from "./helpers";
import "./BlogPosts.styles.css";



function BlogPosts({ blogs}) {
  const[search,setSearchTerm]=useState("");
  const[searchClicked,setSearchClicked]=useState(false)
  const history = useHistory();
  const location = useLocation();
  //====================set Filter Value=======================================
  function setFilterValue({ target }) {
    const { name, value } = target;
    history.push(`/?filter=${value}`);
  }
//====================set Search Value=======================================
  function setSearchValue({ target }) {
     setSearchTerm(target.value);
    console.log(search);
    setSearchClicked(true)
  }

  const typeFilter = location.search ? location.search.split("=")[1] : "";
  const filters = { type: typeFilter };
  const filteredBlogs = getFilteredBlogs(blogs, filters,search);
return (
    <>
    {filters.type!=="image"?<Search onSearchChange={setSearchValue} searchClicked={searchClicked}/>:null}
    {/*===========================Filters=========================================  */}
    <Filters filters={filters} onFilterChange={setFilterValue}/>
    <div className="blog-posts">
      {filteredBlogs.filter((val)=>{
          if(search ===""){
            return val
          }else if(val.content.toLowerCase().includes(search.toLowerCase())){
            
            return val;
          }
          {/*===========================Card=========================================  */}
        }).map((data) => (
          <Card key={data.id} data={data} />))
      }
     </div>
    </>)}
    
export default BlogPosts;    


