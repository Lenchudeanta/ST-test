import React from 'react';

const NO_MOVIE = "No movie selected";

function Description (props) {
    return (
      <div className="list__table list__table--description">
          <div className="list__table-desctitle">{props.title}</div>
          <div className={props.description === NO_MOVIE ? "list__table-desctitle" : "list__table-desc"}>{props.description}</div>
          <div className="list__table-descdirector">{props.director}</div>
      </div>
    );
}

export default Description;