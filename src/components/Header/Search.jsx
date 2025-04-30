// import React from 'react'
import "../../../stylesheets/Nav.css";
export default function Search() {
  return (
    <div className="search-box">
      <i className="fas fa-search"></i>
      <input type="text" id="search-box" placeholder="Search" />
    </div>
  );
}
