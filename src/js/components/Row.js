import React from 'react';

function Row (props) {
    return (
      <div className="list__row" onClick={() => props.selectMovie(props.movie)}>
        <span>EPISODE {props.movie.episode_id} - </span>
        <span>{props.movie.title} - </span>
        <span>{props.movie.release_date}</span>
      </div>
    );
}

export default Row;