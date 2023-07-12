import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import "./SearchBar.css";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <form className="search-bar">
      <input 
        type="search" 
        value= { searchValue }
        placeholder="Buscar produtos" 
        className="search__input"
        onChange={ ( {target} ) => setSearchValue(target.value) }
        required
      />

      <button type="submit" className="search__button">
        <AiOutlineSearch />
      </button>
    </form>
  );
}

export default SearchBar;
