import React, {Component} from 'react';
import VTB from './VisibilityToggleBox';

class Setting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: undefined,
            settingShow: true
        };

        this.updateTimer = this.updateTimer.bind(this);
    }

    hideAndShow = () => {
        let x = document.getElementById("settingForm");
        if (x.style.display === "none") {
            x.style.display = "block";
            this.setState({settingShow:true})
        } else {
            x.style.display = "none";
            this.setState({settingShow:false})
        }
    };

    updateTimer(e) {
        e.preventDefault();

        const round = e.target.round.value.trim();
        const minute = e.target.minute.value.trim();
        const second = e.target.second.value.trim();
        const restMinute = e.target.restMinute.value.trim();
        const restSecond = e.target.restSecond.value.trim();

        this.setState(()=>{
            return {
                error: this.props.updateTimer(round, minute, second,restMinute,restSecond)
            }
        });
    }

    render() {
        let text = 'This is a single page Pomodoro Timer. In settings, you can change it or leave it as default.';

        return (
            <div>
                <VTB text={text}/>
                <h3>{this.props.settingTitle}</h3>
                {this.state.error}
                <form onSubmit={this.updateTimer} id='settingForm'>
                    <input type='number' name='round' placeholder='Round: 4'/>
                    <input type='number' name='minute' placeholder='Working: 25mins'/>
                    <input type='number' name='second' placeholder='Working: 0s'/>
                    <input type='number' name='restMinute' placeholder='Resting: 5mins'/>
                    <input type='number' name='restSecond' placeholder='Resting: 0s'/>
                    <button>Update timer</button>
                </form>
                <button onClick={this.hideAndShow}>{this.state.settingShow? 'Hide Setting' : 'Show Setting'}</button>
            </div>
        )
    }
}

export default Setting;