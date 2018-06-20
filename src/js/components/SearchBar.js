import React from 'react';

function SearchBar (props) {
    return (
      <div className="filter__search">
        <input type="text" placeholder="Type to search..." className="filter__search-bar" onChange={(ev) => props.filterMovies(ev)}/>
      </div>
    );
}

export default SearchBar;