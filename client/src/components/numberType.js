import React from 'react';

export default class NumberType extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let className = 'alert alert-';
        switch(this.props.data.value) {
            case 'prime number': className += 'info'; break;
            case 'perfect square': className += 'warning'; break;
            case 'even number':
            case 'odd number': className += 'danger'; break;
            case 'positive number':
            case 'negative number':
            default: className += 'success';
        }
        return (
            <div className={ className }>
                { this.props.data.value }
            </div>
        );
    }
};