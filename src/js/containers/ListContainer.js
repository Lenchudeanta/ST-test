import React, { Component } from 'react';
import Table from '../components/Table'
import Description from '../components/Description'

const mockedData = [
  {
    title: "Episode IV",
    description: "Episode IV........"
  },
  {
    title: "Episode V",
    description: "Episode V........"
  },
  {
    title: "Episode VI",
    description: "Episode VI........"
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
    return (
      <div className="list">
          <Table data={mockedData} selectMovie={this.selectMovie} />
          <Description description={this.state.description} />
      </div>
    );
  }
}

export default ListContainer;