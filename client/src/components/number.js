import React from 'react';
import NumberType from './numberType';

export default class Number extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-6">
                    <h2>{ this.props.data.number }</h2>
                </div>
                <div className="col-sm-6">
                    { this.props.data.types.map( (type, key) => <NumberType key={ key } data={ type } /> ) }
                </div>
                <div className="col-sm-12"><hr /></div>
            </div>
        );
    }
};