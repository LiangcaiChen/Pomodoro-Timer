import React, {Component} from 'react';

class TimerBin extends Component {
    render() {
        return (
            <h3>Total Pomodoro Timer you have completed: {this.props.complete} </h3>
        )
    }
}

export default TimerBin;