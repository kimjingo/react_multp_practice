import React, { Component } from 'react';

class Option extends Component {
  render() {
    console.log('Option render');

    return (
        <div>
            <input type="radio" name="problemtype" id="nine" value='9' checked={this.props.option===9} onChange={function(e){
                // e.preventDefault();
                this.props.onChangeOption(9);
            }.bind(this)}/>
            <label htmlFor="nine">9 x 9</label>&nbsp;&nbsp;&nbsp;
            <input type="radio" name="problemtype" id="nineteen" value='19' checked={this.props.option===19} onChange={function(e){
                // e.preventDefault();
                this.props.onChangeOption(19);
            }.bind(this)}/>
            <label htmlFor="nineteen">19 x 19</label>
        </div>

    )
  }
}

export default Option;