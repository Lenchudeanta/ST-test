import React, { Component } from 'react';
import FilterContainer from './containers/FilterContainer'
import ListContainer from './containers/ListContainer'

const API = "https://star-wars-api.herokuapp.com/films";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: "episode",
      movies: []
    };
    this.sorting = this.sorting.bind(this);
    this.getMovies = this.getMovies.bind(this);
  }

  sorting = (parameter) => {
    this.setState({
      sortBy: parameter
    });
  }

  getMovies () {
    fetch(API).then(response => {
      if (response.status === 200) {
        return response.json().then(response => {
          this.setState({
            movies: response
          });
        });
      }
      else {
        console.log("Bad request");
        this.setState({
          movies: []
        });
      }
    });
  }

  componentDidMount () {
    this.getMovies();
  }

  render() {
    return (
      <div>
        <FilterContainer
          sortBy={this.state.sortBy}
          sortMode={this.sorting}
        />
        <ListContainer
          sortBy={this.state.sortBy}
          listMovies={this.state.movies}
        />
      </div>
    );
  }
}

export default App;
