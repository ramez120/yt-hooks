import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSubmit }) => {
  const [item, setItem] = useState("");
  const handleInput = (e) => {
    e.preventDefault();
    onSubmit(item);
  };
    return (
      <div className="ui segment search-bar container">
        <form className="ui form" onSubmit={handleInput}>
          <div className="field">
            <label htmlFor="item"> Video Search : </label>
            <input
              name="item"
              placeholder="Search here"
              value={item}
              type="text"
              onChange={(e) => {
                setItem(e.target.value);
              }}
            />
          </div>
        </form>
      </div>
    );
  
};

export default SearchBar;
