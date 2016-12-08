import React from 'react';

export default class Filter extends React.Component {

    constructor(props) {
        super(props);
    }

    reloadNumbers() {
        this.props.fetchNumbers(this.refs.size.value, this.refs.order.value);
    }

    render() {
        return (
            <div className="row">
                <div className="form-group">
                    <label htmlFor="size">Size of numbers</label>
                    <input type="number" id="size" className="form-control" placeholder="size" min={0} max={200} ref="size" defaultValue={this.props.size} />
                    <small className="form-text text-muted">There are maximum 200 numbers, from -100 to 100.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="order">Order</label>
                    <select className="form-control" id="order" ref="order" defaultValue={this.props.order}>
                        <option>Please select</option>
                        <option value="ASC">ASC</option>
                        <option value="DESC">DESC</option>
                        <option value="RANDOM">RANDOM</option>
                    </select>
                </div>
                <button onClick={this.reloadNumbers.bind(this)} className="btn btn-primary">Submit</button>
                <button onClick={this.props.resetNumbers.bind(this)} className="btn btn-info">Reset</button>
            </div>
        );
    }
};