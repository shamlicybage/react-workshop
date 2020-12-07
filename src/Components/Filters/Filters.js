import React from "react";
import "./Filters.styles.css";

function Filters({ onFilterChange }) {
  return (
    <div className="filters">
      <label>Filter by Content: </label>
      <select name="type" onChange={onFilterChange}>
        <option value="">All</option>
        <option value="image">Image</option>
        <option value="text">Text</option>
      </select>
    </div>
  );
}

export default Filters;