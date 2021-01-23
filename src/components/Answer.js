import React, { Component } from 'react';

class Answer extends Component {
  render() {
    console.log('Answer render');

    return (
        <form onSubmit={function(e){
          // debugger;
          e.preventDefault();
          console.log(e.target.yoursanswer.value);
          this.props.onSubmit( e.target.yoursanswer.value );
          debugger;
        }.bind(this)}>
          <input type="number" name="youranswer" value="0" autoFocus={true} />
          <button>Submit</button>
        </form>

    )
  }
}

export default Answer;