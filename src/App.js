import React, {Component} from 'react';
import Header from './components/Header';
import Setting from './components/Setting';
import Timer from './components/Timer';
import TimerBin from './components/TimerBin';

class App extends Component {
    constructor(props) {
        super(props);

        this.state ={
            round:4,
            minute:25,
            second:0,
            restMinute:5,
            restSecond:0,
            settingContainer:[4,25,0,5,0],
            completed:0,
            timerBtnStatus: undefined,
            timerWorkingState: undefined
        };
    }

    // set default timer rounds:4; working time: 25:00;
    handleUpdateTimer = (round=4, minute, second, restMinute, restSecond) => {

        if(!round) {
            round=4
        }
        if(!minute) {
            minute=25
        }
        if(!second) {
            second=0
        }
        if(!restMinute){
            restMinute=5
        }
        if(!restSecond) {
            restSecond = 0
        }

        if(second > 59 || second < 0 || minute < 0 || (second == 0 && minute == 0) || round < 0 || restMinute < 0 || restSecond < 0) {
            return 'Please enter valid time';
        }

        this.setState(() => {
            return {
                round:round,
                minute: minute,
                second:second,
                restMinute:restMinute,
                restSecond:restSecond,
                settingContainer:[round, minute, second, restMinute, restSecond]
            }
        });
    };

    handleStartTimer = () => {
        this.intervalHandle = setInterval(this.tick, 1000);
        this.setState({
            timerBtnStatus:'Start',
            timerWorkingState: 'Working'
        });
    };

    handlePauseTimer = () => {
        clearInterval(this.intervalHandle);
        this.setState({timerBtnStatus:'Pause'});
    };

    handleStopTimer = () => {
        clearInterval(this.intervalHandle);
        this.setState({
            minute:25,
            second:0,
            timerBtnStatus:'Stop',
            timeWorkingStatus: undefined
        });
    };

    tick = () => {
        if(this.state.second >= 0) {
            console.log('Second: ' + this.state.second);
            this.setState((prevState)=>{
                return (
                    {second: prevState.second-1}
                )
            })
        }

        if(this.state.second < 0 && this.state.minute > 0) {
            this.setState((prevState)=>{
                return (
                    {minute: prevState.minute-1,
                     second: 59}
                )
            })
        }

        let container = this.state.settingContainer;
        if(this.state.minute <= 0 && this.state.second <= 0 && this.state.round > 0) {
            console.log('container:'+container);

                if(this.state.timerWorkingState ==='Working') {
                    console.log('x');
                    this.resting();
                }else if(this.state.timerWorkingState ==='Resting') {
                    console.log('y')
                    this.working();
                }
        }
    };

    resting = () => {
        console.log('resting...');
        this.setState((prevState) => {
            return {
                time:prevState.settingContainer[3],
                second:prevState.settingContainer[4],
                timerWorkingState: 'Resting',
                round: prevState.round - 1,
                completed: prevState.completed + 1
            }});
    };

    working = () => {
        console.log('working...');
        this.setState((prevState)=>{
            return {
                timerWorkingState: 'Working',
                time: prevState.settingContainer[1],
                second: prevState.settingContainer[2]

            }})
    };

    render() {
        return (
            <div>
                <Header title='Pomodoro Timer'/>
                <Setting
                    updateTimer={this.handleUpdateTimer}
                    settingTitle='Setting'/>
                <TimerBin complete={this.state.completed}/>
                <Timer
                    minute={this.state.minute}
                    second={this.state.second}
                    startTimer={this.handleStartTimer}
                    pauseTimer={this.handlePauseTimer}
                    stopTimer={this.handleStopTimer}
                    status={this.state.timerBtnStatus}
                />
            </div>
        )
    }
}

export default App;