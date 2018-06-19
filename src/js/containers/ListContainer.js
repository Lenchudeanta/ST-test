import React, { Component } from 'react';
import {sortBy} from 'lodash'
import Table from '../components/Table'
import Description from '../components/Description'

const mockedData = [
  {
    title: "Episode I",
    description: "Episode I........",
    epidode: 1,
    year: 1999
  },
  {
    title: "Episode II",
    description: "Episode II........",
    epidode: 2,
    year: 2000
  },
  {
    title: "Episode III",
    description: "Episode VI........",
    epidode: 3,
    year: 2001
  },
  {
    title: "Episode IV",
    description: "Episode IV........",
    epidode: 4,
    year: 1977
  },
  {
    title: "Episode V",
    description: "Episode V........",
    epidode: 5,
    year: 1978
  },
  {
    title: "Episode VI",
    description: "Episode VI........",
    epidode: 6,
    year: 1979
  }
]

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
    var data = sortBy(mockedData, [this.props.sortBy]);
    return (
      <div className="list">
          <Table data={data} selectMovie={this.selectMovie} />
          <Description description={this.state.description} />
      </div>
    );
  }
}

export default ListContainer;