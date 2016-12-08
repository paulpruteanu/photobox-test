import React from 'react';
import Number from './number';
import Filter from './filter';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { numbers: [], loading: true };
    }

    fetchNumbers(size, order) {
        fetch(`${this.props.endpointUrl}?query=${encodeURIComponent(`
                {
                    numbers(
                        size: ${size},
                        order: "${order}"
                    ) {
                        number,
                        types { value }
                    }
                }
            `)}`
        )
            .then(numbers => numbers.json())
            .then(numbers => {
                this.setState({ numbers: numbers.data.numbers, loading: false })
            })
            .catch(console.error);
    }

    componentDidMount() {
        this.resetNumbers();
    }

    renderLoader() {
        return (
            <i className="fa fa-spinner fa-spin" />
        );
    }

    resetNumbers() {
        this.fetchNumbers(this.props.size, this.props.order);
        if (this.refs.size) {
            this.refs.size.value = this.props.size;
        }
        if (this.refs.order) {
            this.refs.order.value = this.props.order;
        }
    }

    renderContent() {
        return (
            <div className="container">
                <h1>Initial Photobox numbers view {this.props.size} elements ordered by {this.props.order}</h1>
                <Filter
                    size={ this.props.size }
                    order={ this.props.order }
                    fetchNumbers={ this.fetchNumbers.bind(this) }
                    resetNumbers={ this.resetNumbers.bind(this) }
                />
                { this.state.numbers.map(number => <Number data={number} key={number.number} />) }
            </div>
        );
    }

    render() {
        return this.state.loading ? this.renderLoader() : this.renderContent();
    }
}