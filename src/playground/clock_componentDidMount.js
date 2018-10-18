import React, {Component} from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);

        this.state ={
            date: new Date()
        };
    }

    componentWillMount() {

    }

    componentDidMount() {
        setInterval( () => this.tick(), 1000 )
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.date.toLocaleTimeString()}</h2>

            </div>
        )
    }
}

export default Clock;