import React from 'react';

function Description (props) {
    return (
      <div className="list__table">
          <div>{props.title}</div>
          {props.description}
          <div>{props.director}</div>
      </div>
    );
}

export default Description;