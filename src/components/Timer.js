import React, {Component} from 'react';

class Timer extends Component {

    condition = (status) => {
        if(status === undefined || status === 'Start' || status === 'Stop') {
            return 'Start'
        } else if (status === 'Pause') {
            return 'Resume'
        }
    };

    render() {
        return (
            <div>
                <h3>Current timer: </h3>
                {this.props.minute}:{this.props.second}
                <button
                    disabled={this.props.status === 'Start'}
                    onClick={this.props.startTimer}
                >{this.condition(this.props.status)}</button>
                <button
                    disabled={this.props.status !== 'Start'}
                    onClick={this.props.pauseTimer}
                >Pause</button>
                <button
                    // hide btn when status = undefined / stop
                    disabled={ this.props.status ==='Stop' || this.props.status === undefined}
                    onClick={this.props.stopTimer}
                >Stop</button>

                {/*<button onClick={this.props.startTimer}>{this.props.started?'11111111111111111':'222222222222222222222'}</button>*/}
            </div>
        )
    }
}

export default Timer;