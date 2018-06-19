import React, { Component } from 'react';
import Table from '../components/Table'
import Description from '../components/Description'

class ListContainer extends Component {
  render() {
    return (
      <div>
          <Table />
          <Description />
      </div>
    );
  }
}

export default ListContainer;