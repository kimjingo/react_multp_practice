import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Option from './components/Option';
// import Answer from './components/Answer';
// import History from './components/History';
// import Problem from './components/Problem';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {	// state 설정
      option : 9, // or 19
    };
  }

  render() {
    return (
      <div className="App">
        <Option option={this.state.option} onChangeOption={function(opt){this.setState({option:opt})}.bind(this)}></Option>
        {/* <Problem></Problem>
        <Answer></Answer>
        <History></History> */}

      </div>
    );
  }
}

export default App;