import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Option from './components/Option';
// import Answer from './components/Answer';
// import History from './components/History';
// import Problem from './components/Problem';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {	// state 설정
      option : 9, // or 19
      first: Math.ceil(Math.random() * 9),
      second: Math.ceil(Math.random() * 9),
      value: '',
      result:'',
      history: [],
    };
  }

  handleFocus = (e) => e.target.select();
  onSubmit = (e)=>{
    e.preventDefault();
    var new_history = Array.from(this.state.history);
    var val = this.state.value;
    var result = '';
    if(parseInt(this.state.value) === this.state.first * this.state.second){
        result='Correct!';
    } else {
        result='Wrong!';
    }
    console.log( this.state.first, this.state.second, val, result, new Date() );
    new_history.unshift( [this.state.first, this.state.second, val, result, new Date()] );
    if(result === 'Correct!'){
      this.setState({
        first: Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.random() * 9),
        value: "",
        result:result,
        history: new_history,
      });
    }else{
      this.setState({
        value: "",
        result:result,
        history:new_history,
      });
    }
  };

  onChange = (e) => this.setState({value:e.target.value});

  render() {
    var  listory = [];
    var data = this.state.history;
    var i = 0;
    var clr = '';
    while(i<data.length){
      if(data[i][3] === 'Correct!') {
        clr = 'blue';
      }else{ 
        clr = 'red';
      }

      listory.push(
      <li key={i} style={{color:clr}}>
        {data[i][0]} X {data[i][1]} = {data[i][2]} => {data[i][3]}
      </li>
      );
      i=i+1;
    }
      //      {data[i][2]} :  

    return (
      <div className="App">
        <div>
          {this.state.first} X {this.state.second}
        </div>
        <form onSubmit={this.onSubmit}>
          <input style={{width:"100px"}} type="number" autoFocus onFocus={this.handleFocus} value={this.state.value} onChange={this.onChange}></input>
          <button>Submit</button>
        </form>
        <div>
          {this.state.result}
        </div>
        <div>
          {listory}
        </div>
      </div>
    );
  }
}

export default App;