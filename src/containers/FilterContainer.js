import React, { Component } from 'react';
import SortButton from '../components/SortButton'
import SearchBar from '../components/SearchBar'

class FilterContainer extends Component {
  render() {
    return (
      <div>
          <SortButton />
          <SearchBar />
      </div>
    );
  }
}

export default FilterContainer;