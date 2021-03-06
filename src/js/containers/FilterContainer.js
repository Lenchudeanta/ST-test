import React, { Component } from 'react';
import SortButton from '../components/SortButton'
import SearchBar from '../components/SearchBar'

class FilterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPanelHidden: true
    };
    this.showPanel = this.showPanel.bind(this);
  }

  showPanel = () => {
    this.setState((prevState) => ({
      isPanelHidden: !prevState.isPanelHidden
    }));
  };

  render() {
    return (
      <div className="filter__container">
          <SortButton
            isPanelHidden={this.state.isPanelHidden}
            managePanel={this.showPanel}
            sortBy={this.props.sortBy}
            sortMode={this.props.sortMode}
          />
          <SearchBar filterMovies={this.props.filterMovies} />
      </div>
    );
  }
}

export default FilterContainer;