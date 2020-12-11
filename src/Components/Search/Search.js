import React from 'react'
import './Search.styles.css'

const Search=({onSearchChange})=>{
    return(
        <>
        <div className="search">
        
        <input label="Search" placeholder="search.." onChange={onSearchChange}/>
        </div>
       </>
    )
}

export default Search