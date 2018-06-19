import React from 'react';

function Row (props) {
    return (
      <div className="list__row" onClick={() => props.selectMovie(props.movie.description)}>{props.movie.title}</div>
    );
}

export default Row;