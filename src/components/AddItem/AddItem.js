import React, {Component} from 'react';

import './AddItem.css';

export default class AddItem extends Component {

    state = {
        label: ''
    };

    onLabelChange = (evt) => {
        this.setState({label: evt.target.value});
    };

    onSubmit = (evt) => {
        evt.preventDefault();
        this.props.onAdd(this.state.label);
        this.setState({
            label: ''
        });
    };

    render() {
        return (
            <form className="add-item mt-3" onSubmit={this.onSubmit}>
                <input
                    type="text"
                    className="add-input form-control"
                    onChange={this.onLabelChange}
                    placeholder="What needs to be done?"
                    value={this.state.label}></input>
                <button type="submit" className="btn btn-dark">Add Todo</button>
            </form>
        );
    }
};
