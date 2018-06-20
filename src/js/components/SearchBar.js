import React from 'react';

function SearchBar (props) {
    return (
      <div className="filter__search">
        <input type="text" placeholder="Type to search..." className="filter__search-bar"/>
      </div>
    );
}

export default SearchBar;