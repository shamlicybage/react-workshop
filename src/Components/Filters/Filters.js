import React from "react";
import "./Filters.styles.css";


function Filters({ onFilterChange,filters }) {
  return (
    <div className="filters" data-testid="filter-component">
      
      <label>Filter by Content: </label>
      <select name="type" value={filters.type} onChange={onFilterChange} data-test="content-type">
        <option value="" data-test="all">All</option>
        <option value="image">Image</option>
        <option value="text">Text</option>
      </select>
    </div>
  );
}

export default Filters;