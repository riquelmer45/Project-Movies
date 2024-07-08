import React from "react";
import "./Search.css";

function Search() {
  return (
    <div className="search">
      <input type="text" placeholder="Search" />
      <ion-icon name="search-outline"></ion-icon>
    </div>
  );
}

export default Search;
