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
      ptype : 0, // 0:multipliaction, 1:division
      difficulty : 9, // or 19
      first: Math.ceil(Math.random() * 9),
      second: Math.ceil(Math.random() * 9),
      result:'',
      value: '',
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
    this.input.focus();
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
      // input;

    return (
      <div className="App">
        <div>
            <input type="radio" name="problemtype" id="multi" value='9' checked={this.props.ptype===9}  />
            <label htmlFor="multi">Multiplication</label>&nbsp;&nbsp;&nbsp;
            <input type="radio" name="problemtype" id="divi" value='19' checked={this.props.ptype===19} onChange={function(e){
                // e.preventDefault();
                this.props.onChangeOption(19);
            }.bind(this)}/>
            <label htmlFor="divi">Division</label>
        </div>
        <div>
            <input type="radio" name="difficulty" id="nine" value='9' checked={this.state.difficulty===9} onChange={function(e){
                // e.preventDefault();
                this.state.onChangeOption(9);
            }.bind(this)}/>
            <label htmlFor="nine">9 x 9</label>&nbsp;&nbsp;&nbsp;
            <input type="radio" name="difficulty" id="nineteen" value='19' checked={this.state.difficulty===19} onChange={function(e){
                // e.preventDefault();
              this.props.onChangeOption(19);
              }.bind(this)}/>
            <label htmlFor="nineteen">19 x 19</label>
        </div>
        <div>
          {this.state.first} X {this.state.second} = ?
        </div>
        <form onSubmit={this.onSubmit}>
          <input ref={(c)=>{this.input =c;}} style={{width:"100px"}} type="number" autoFocus onFocus={this.handleFocus} value={this.state.value} onChange={this.onChange}></input>
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