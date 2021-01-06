import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <div>
          <input type="radio" name="problemtype" id="nine" value='9' checked/>
          <label for="nine">9 x 9</label>
          <input type="radio" name="problemtype" id="nineteen" value='19' />
          <label for="nineteen">19 x 19</label>
        </div>
        <hr></hr>

        <div>9 x 9 = ?</div>
        <input type="number" name="youranswer" autofocus="true" />
        <button>Submit</button>
        <div>Result : </div>
      </form>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
