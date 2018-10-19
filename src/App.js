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
            timerIsWorking: undefined
        };
    }

    // set default timer rounds:4; working time: 25:00; resting time: 5:00
    handleUpdateTimer = (round, minute, second, restMinute, restSecond) => {

        // set up default values
        if(!round) {round=4}
        if(!minute) {minute=25}
        if(!second) {second=0}
        if(!restMinute){restMinute=5}
        if(!restSecond) {restSecond = 0}

        // inserted number get from setting is a type of string
        round=parseInt(round); minute=parseInt(minute); second=parseInt(second); restMinute=parseInt(restMinute); restSecond=parseInt(restSecond);

        if((second || minute  || restMinute || restSecond) < 0 || second > 59 || (second === 0 && minute === 0) || round <= 0) {
            return 'Please enter valid time';
        }

        console.log(this.state.settingContainer);

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
        console.log("Timer start...");
        this.intervalHandle = setInterval(this.tick, 1000);
        this.setState({
            timerBtnStatus:'Start',
            timerIsWorking: true
        });
    };

    handlePauseTimer = () => {
        clearInterval(this.intervalHandle);
        this.setState({timerBtnStatus:'Pause'});
    };

    tick = () => {
        let remainingSecond = this.state.second;
        let remainingMinute = this.state.minute;
        let isWorking = this.state.timerIsWorking;

        // second count down bu 1
        if(remainingSecond > 0) {
            console.log('Seconds counting down...');
            this.setState((prevState)=>{
                return (
                    {second: prevState.second-1}
                )})
        }

        // min - 1 when second runs out
        else if(remainingSecond === 0 && remainingMinute > 0) {
            console.log('Minutes counting down by 1');
            this.setState((prevState)=>{
                return ({
                        minute: prevState.minute-1,
                        second: 59
                })});
            console.log(typeof remainingMinute);
        }


        else if(remainingMinute === 0 && remainingSecond === 0) {
            if(this.state.round > 0) {
                isWorking ? this.resting() : this.working();
            } else if (this.state.round === 0) {
                this.timerFinish();
            }
        }

    };

    resting = () => {
        console.log('Resting...');
        this.setState((prevState) => {
            return {
                time:prevState.settingContainer[3],
                second:prevState.settingContainer[4],
                timerIsWorking: false,
                round: prevState.round - 1,
                completed: prevState.completed + 1
            }});
    };

    working = () => {
        console.log('working...');
        this.setState((prevState)=>{
            return {
                timerIsWorking: true,
                time: prevState.settingContainer[1],
                second: prevState.settingContainer[2]

            }})
    };

    timerFinish = () => {
        console.log('Timer finished');
        this.setState((prevState)=>{
            return ({
                round: prevState.settingContainer[0],
                minute: prevState.settingContainer[1],
                second: prevState.settingContainer[2],
                restMinute: prevState.settingContainer[3],
                restSecond: prevState.settingContainer[4],
                timerBtnStatus: 'Stop',
                timerIsWorking: undefined
            })});
        clearInterval(this.intervalHandle);
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
                    stopTimer={this.timerFinish}
                    status={this.state.timerBtnStatus}
                    timerIsWorking={this.state.timerIsWorking}
                />
            </div>
        )
    }
}

export default App;