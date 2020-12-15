import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Filters from "../Filters";
import { connect } from "react-redux";
import Search from "../Search";
import { getFilteredBlogs } from "./helpers";
import Card from "../Card";

function BlogPost(props) {
  const [search, setSearchTerm] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);
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
    setSearchClicked(true);
  }

  const typeFilter = location.search ? location.search.split("=")[1] : "";
  const filters = { type: typeFilter };
  const filteredBlogs = getFilteredBlogs(props.blogs, filters, search);
  //=================Fetch the blogs from data.json file================
  useEffect(() => {
    if (props.blogs.length === 0) {
      fetch("/data.json")
        .then((resp) => resp.json())
        .then((data) =>
          props.dispatch({
            type: "setBlogs",
            payload: data,
          })
        );
    }
  }, []);
  console.log(props.blogs);
  return (
    <>
      {filters.type !== "image" ? (
        <Search onSearchChange={setSearchValue} searchClicked={searchClicked} />
      ) : null}
      {/*===========================Filters=========================================  */}
      <Filters filters={filters} onFilterChange={setFilterValue} />
      <div className="blog-posts">
        {filteredBlogs
          .filter((val) => {
            if (search === "") {
              return val;
            } else if (
              val.content.toLowerCase().includes(search.toLowerCase())
            ) {
              return val;
            }
            {
              /*===========================Card=========================================  */
            }
          })
          .map((data) => (
            <Card key={data.id} data={data} />
          ))}
      </div>
    </>
  );
}
const mapStateToProps = (state) => ({
  blogs: state.blogs,
  postData: state.postData,
});
export default connect(mapStateToProps)(BlogPost);
