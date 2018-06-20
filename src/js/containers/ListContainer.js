import React, { Component } from 'react';
import {sortBy, map} from 'lodash'
import Table from '../components/Table'
import Description from '../components/Description'

class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "No movie selected",
      director: ""
    };
    this.selectMovie = this.selectMovie.bind(this);
  }

  selectMovie = (chosenMovie) => {
    this.setState({
      title: chosenMovie.title,
      description: chosenMovie.opening_crawl,
      director: chosenMovie.director
    });
  }

  render() {
    var data = [];
    data = map(this.props.listMovies, "fields");
    data = sortBy(data, [this.props.sortBy]);
    return (
      <div className="list">
          <Table data={data} selectMovie={this.selectMovie} />
          <Description
            description={this.state.description}
            title={this.state.title}
            director={this.state.director}
          />
      </div>
    );
  }
}

export default ListContainer;