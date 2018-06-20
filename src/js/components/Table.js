import React from 'react';
import Row from './Row'

function Table (props) {
    var listItems = props.data.map((movie) => <Row key={movie.episode_id} movie={movie} selectMovie={props.selectMovie} />);
    return (
      <div className="list__table">
        {listItems}
      </div>
    );
}

export default Table;