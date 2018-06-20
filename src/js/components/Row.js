import React from 'react';

function Row (props) {
    return (
      <div className="list__row" onClick={() => props.selectMovie(props.movie)}>
        <span className="list__row-episode">EPISODE {props.movie.episode_id}</span>
        <span className="list__row-title">{props.movie.title} </span>
        <span className="list__row-year">{props.movie.release_date}</span>
      </div>
    );
}

export default Row;