import React from 'react';
import Row from './Row'

const NO_RESULTS = {
  episode_id: null,
  title: "Not found results",
  release_date: ""
}

function Table (props) {
    var listItems = props.data.map((movie) => <Row key={movie.episode_id} movie={movie} selectMovie={props.selectMovie} />);
    return (
      <div className="list__table">
        {listItems.length > 0 ? listItems : <Row key={0} movie={NO_RESULTS} selectMovie={() => {}} />}
      </div>
    );
}

export default Table;