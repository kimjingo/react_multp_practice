import React, { Component } from 'react';

class Problem extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.option);
    this.state = {	// state 설정
      // first: Math.ceil(Math.random() * this.props.option),
      // second: Math.ceil(Math.random() * this.props.option),
    };
  }
  render() {
    console.log('Problem render');

    return (
      <div>{this.props.first} X {this.props.second} = ?</div>
    )
  }
}

export default Problem;