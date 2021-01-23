import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Option from './components/Option';
import Answer from './components/Answer';
// import History from './components/History';
import Problem from './components/Problem';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {	// state 설정
      option : 9, // or 19
      first: Math.ceil(Math.random() * 9),
      second: Math.ceil(Math.random() * 9),
      answer: 0,
      history: [],
    };
  }

  render() {
    return (
      <div className="App">
        <Option 
        option={this.state.option} 
        onChangeOption={function(opt){
          this.setState({
            option:opt,
            first: Math.ceil(Math.random() * opt),
            second: Math.ceil(Math.random() * opt),
          }
          )}.bind(this)}></Option>
        <Problem option={this.state.option} first={this.state.first} second={this.state.second}></Problem>
        <Answer onSubmit={function(answer){console.log(answer)}}></Answer>
        {/* 
        <History></History> */}

      </div>
    );
  }
}

export default App;