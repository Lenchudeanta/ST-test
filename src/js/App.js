import React, { Component } from 'react';
import FilterContainer from './containers/FilterContainer'
import ListContainer from './containers/ListContainer'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: "episode"
    };
    this.sorting = this.sorting.bind(this);
  }

  sorting = (parameter) => {
    this.setState({
      sortBy: parameter
    });
  }

  render() {
    return (
      <div>
        <FilterContainer
          sortBy={this.state.sortBy}
          sortMode={this.sorting}
        />
        <ListContainer sortBy={this.state.sortBy}/>
      </div>
    );
  }
}

export default App;
