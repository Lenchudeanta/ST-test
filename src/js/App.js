import React, { Component } from 'react';
import FilterContainer from './containers/FilterContainer'
import ListContainer from './containers/ListContainer'

class App extends Component {
  render() {
    return (
      <div>
        <FilterContainer />
        <ListContainer />
      </div>
    );
  }
}

export default App;
