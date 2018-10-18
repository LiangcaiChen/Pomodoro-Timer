import React, {Component} from 'react';

class Setting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: undefined
        };

        this.updateTimer = this.updateTimer.bind(this);
    }

    updateTimer(e) {
        e.preventDefault();

        const minute = e.target.minute.value.trim();
        const second = e.target.second.value.trim();

        this.setState(()=>{
            return {
                error: this.props.updateTimer(minute, second)
            }
        });
    }

    render() {
        return (
            <div>
                <h3>You can change your timer setting below.</h3>
                {this.state.error}
                <form onSubmit={this.updateTimer} >
                    <input type='number' name='minute' defaultValue={this.props.defaultMinute}/>
                    <input type='number' name='second' defaultValue={this.props.defaultSecond}/>
                    <button>Update timer</button>
                </form>
            </div>
        )
    }
}

export default Setting;