// import logo from './logo.svg';
import './App.css';
import React from 'react';


class Gugudan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {	// state 설정
      first: Math.ceil(Math.random() * 9),
      second: Math.ceil(Math.random() * 9),
      // ptype: 9,
      value: '',
      result: '',
      history: [],
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
      });
    }else{
      this.setState({
        result: 'Wrong',
        value: '',
      });
    }
  };

  onChange = (e) => {
    console.log(e.target.value);
    this.setState({value: e.target.value});

  };

  // setPType = (e) => {
  //   console.log(e.target.value);
  //   this.setState({ptype: e.target.value});

  // };

  render() {
    // const moves = history.map((step, move) => {
    //   const desc = move[0] + " X " + move[1] + " = " + move[2];
    //   return (
    //     <li key={step}>
    //       {desc}
    //     </li>
    //   );
    // });

    return (
      <div className="App">
        {/* <div>
          <input type="radio" name="problemtype" id="nine" value='9' checked onClick={this.setPTpye}/>
          <label for="nine">9 x 9</label>&nbsp;&nbsp;&nbsp;
          <input type="radio" name="problemtype" id="nineteen" value='19' onClick={this.setPTpye}/>
          <label for="nineteen">19 x 19</label>
        </div>
        <hr></hr> */}
        <div>{this.state.first} X {this.state.second} = ?</div>
        <form onSubmit={this.onSubmit}>
          <input type="number" name="youranswer" value={this.state.value} autofocus="true" onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <div>Result : {this.state.result}</div>
        {/* <ol> {moves} </ol> */}
      </div>
    );
  }
}

export default Gugudan;
