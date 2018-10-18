import React, {Component} from 'react';
import Header from './components/Header';
import Setting from './components/Setting';
import Timer from './components/Timer';
import TimerBin from './components/TimerBin';

class App extends Component {
    constructor(props) {
        super(props);

        this.state ={
            minute:25,
            second:'00',
            completed:0
        };
    }

    // set default timer 25:00
    handleUpdateTimer = (minute, second) => {
        if(!minute) {
            minute = 25
        }

        if (!second) {
            second = '00'
        }

        this.setState(() => {
            return {minute: minute, second:second}
        });
    };

    handleStartTimer = () => {
        this.intervalHandle = setInterval(this.tick, 1000);
    };

    handlePauseTimer = () => {
        clearInterval(this.intervalHandle);
    };

    tick = () => {

        if(this.state.second >= '00') {
            console.log(this.state.minute);
            this.setState((prevState)=>{
                return (
                    {second: prevState.second-1}
                )
            })
        }

        if(this.state.second < '00' && this.state.minute > 0) {
            this.setState((prevState)=>{
                return (
                    {minute: prevState.minute-1,
                     second: '59'}
                )
            })
        }

        if(this.state.minute <= 0 && this.state.second < '00') {
            console.log('finished');
            clearInterval(this.intervalHandle);
            this.setState((prevState) => {
                return (
                    {completed: prevState.completed+1,
                     second: 0}
                )
            })
        }
    };

    render() {
        return (
            <div>
                <Header title='Pomodoro Timer'/>
                <Setting updateTimer={this.handleUpdateTimer} defaultMinute={this.state.minute} defaultSecond={this.state.second}/>
                <TimerBin complete={this.state.completed}/>
                <Timer
                    minute={this.state.minute}
                    second={this.state.second}
                    startTimer={this.handleStartTimer}
                    pauseTimer={this.handlePauseTimer}
                    timeStarted={this.state.timerStarted}
                />
            </div>
        )
    }
}

export default App;