import React, { Component } from 'react';
import {sortBy} from 'lodash'
import Table from '../components/Table'
import Description from '../components/Description'

class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "No movie selected"
    };
    this.selectMovie = this.selectMovie.bind(this);
  }

  selectMovie = (chosenMovie) => {
    this.setState({
      description: chosenMovie
    });
  }

  render() {
    var data = sortBy(this.props.listMovies, [this.props.sortBy]);
    return (
      <div className="list">
          <Table data={data} selectMovie={this.selectMovie} />
          <Description description={this.state.description} />
      </div>
    );
  }
}

export default ListContainer;