import React, {Component} from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);

        this.state= {
            started: false
        };
    }

    startTimer = () => {
        this.props.startTimer();
        this.setState({started:true})
    };

    pauseTimer = () => {
        this.props.pauseTimer();
        this.setState({started:false})
    };

    render() {
        return (
            <div>
                <h3>Current timer: </h3>
                {this.props.minute}:{this.props.second}
                <button disabled={this.state.started} onClick={this.startTimer}>Start</button>
                <button disabled={!this.state.started} onClick={this.pauseTimer}>Pause</button>

                {/*<button onClick={this.startTimer}>{this.state.started?'1':'2'}</button>*/}
            </div>
        )
    }
}

export default Timer;