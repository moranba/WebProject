import React, { useState } from "react";
import "./MenuBar.css";

const MenuBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Search term: ${searchTerm}`);
    // Perform the search action here, using the searchTerm value.
  };

  return (
    <nav className="nav">
      <ul className="ul">
        <li className="li"><a href="#">Home</a></li>
        <li className="li"><a href="#">Car Reviews</a></li>
        <li className="li"><a href="#">Industry News</a></li>
        <li className="li"><a href="#">DIY Maintenance</a></li>
      </ul>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          className="input"
        />
        <button type="submit" className="button">Search</button>
      </form>
    </nav>
  );
};

export default MenuBar;
