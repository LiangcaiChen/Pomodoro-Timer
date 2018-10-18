import React, {Component} from 'react';

class VTB extends Component {
    hideIt = () => {
        let x = document.getElementById("myDiv");
        x.style.display = 'none';
    };

    render() {
        return (
            <div id='myDiv'>
                <p>{this.props.text}</p>

                <button onClick={this.hideIt}>Don't show it again</button>
            </div>
        )
    }
}

export default VTB;