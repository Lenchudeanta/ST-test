import React from 'react';

function SortButton (props) {
  return (
    <div className="filter__sort-button">
      <button onClick={props.managePanel}>Sort by</button>
      <ul className={props.isPanelHidden ? "filter__sort-panel--hidden" : "filter__sort-panel"}>
        <li onClick={() => props.sortMode("episode")}>Episode</li>
        <li onClick={() => props.sortMode("year")}>Year</li>
      </ul>
    </div>
  );
}

export default SortButton;