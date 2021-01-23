import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Option from './components/Option';
import Answer from './components/Answer';
import History from './components/History';
import Problem from './components/Problem';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {	// state 설정
      option : 9, // or 19
      first: Math.ceil(Math.random() * 9),
      second: Math.ceil(Math.random() * 9),
      // ptype: 9,
      value: '',
      result: '',
      history: [],
      resultStyle: '',
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    // const history = this.state.history;
    // history.append([this.first, this.second, this.state.value]);
    // this.setState( { history : history } ) ;

    if(parseInt(this.state.value) === this.state.first * this.state.second) {

      this.setState({
        result: 'Correct',
        first: Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.random() * 9),
        value: '',
        resultStyle: 'blue',
      });
    }else{
      this.setState({
        result: 'Wrong',
        value: '',
        resultStyle: 'red',
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Option option={this.state.option} onChangeOption={function(opt){this.setState({option:opt})}.bind(this)}></Option>
        <Problem></Problem>
        <Answer updateAnwer={function(e){console.log(e)}.bind(this)}></Answer>
        <History></History>

      </div>
    );
  }
}

export default App;