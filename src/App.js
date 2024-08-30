import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: "",
      score: null,
      submittedWords: [],
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `http://localhost:3001/api/scrabble-score?word=${this.state.word}`
    );
    const data = await response.json();
    this.setState({ score: data.score });

    const submittedWord = {
      word: this.state.word,
      score: data.score,
    };
    this.setState((prevState) => ({
      submittedWords: [...prevState.submittedWords, submittedWord],
    }));
  };

  handleChange = (event) => {
    this.setState({ word: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <main>
          <form onSubmit={this.handleSubmit}>
            <label>
              Enter your Scrabble word:
              <input
                type="text"
                value={this.state.word}
                onChange={this.handleChange}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
          {this.state.score && <p>Score: {this.state.score}</p>}
          <ul>
            {this.state.submittedWords.map((word, index) => (
              <li key={index}>
                Word: {word.word}, Score: {word.score}
              </li>
            ))}
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
