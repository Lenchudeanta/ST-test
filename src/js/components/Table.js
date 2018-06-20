import React from 'react';
import Row from './Row'

const NO_RESULTS = "No found results"

function Table (props) {
    var listItems = props.data.map((movie) => <Row key={movie.episode_id} movie={movie} selectMovie={props.selectMovie} />);
    return (
      <div className="list__table">
        {listItems.length > 0 ? listItems : NO_RESULTS}
      </div>
    );
}

export default Table;