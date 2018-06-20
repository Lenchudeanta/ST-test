import React from 'react';
import Row from './Row'

function Table (props) {
    var listItems = props.data.map((movie) => <Row movie={movie.fields} selectMovie={props.selectMovie} />);
    return (
      <div className="list__table">
        {listItems}
      </div>
    );
}

export default Table;