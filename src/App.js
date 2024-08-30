import React, { Component } from "react";
import "./App.css";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      word: "",
      score: null
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`http://localhost:3001/api/scrabble-score?word=${this.state.word}`);
    const data = await response.json();
    this.setState({ score: data.score });
  }

  handleChange = (event) => {
    this.setState({ word: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <main>
          <form onSubmit={this.handleSubmit}>
            <label>
              Enter your Scrabble word:
              <input type="text" value={this.state.word} onChange={this.handleChange} />
              <button type="submit">Submit</button>
            </label>
          </form>
          {this.state.score && <p>Score: {this.state.score}</p>}
        </main>
      </div>
    );
  }
}

export default App;
