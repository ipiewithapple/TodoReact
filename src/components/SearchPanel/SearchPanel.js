import React, {Component} from 'react';

import './SearchPanel.css';

export default class SearchPanel extends Component {

    state = {
        term: ''
    };

    onSearchChange = (evt) => {
      const term = evt.target.value;
      this.setState({term});
      this.props.onSearchChange(term);
    }

    render() {
        return (
            <input
                type="text"
                placeholder="Search"
                className="search-panel w-50 mr-2 form-control"
                value={this.state.term}
                onChange={this.onSearchChange}></input>
        );
    };
};
