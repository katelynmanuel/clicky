import React, { Component } from 'react';
import characters from './characters.json'
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Jumbotron from "./components/Jumbotron";
import ImageCard from './components/ImageCard';
import Footer from './components/Footer';
import "./index.css"

class App extends Component {
  state = {
    characters,
    correct: 0,
    bestScore: 0,
    gameOver: false,
    headerMessage: "Click an image to begin!"
  }

  // Function to handle click
  handleClick = id => {
    // Make a copy of the state array to work with
    const charactersCopy = this.state.characters.map( p => {return { ...p } });
    const clickedCharacter = charactersCopy.find(character => character.id === id);

    let correct = this.state.correct;
    let bestScore = this.state.bestScore;
    let gameOver = this.state.gameOver;
    let headerMessage = this.state.headerMessage;

    // If user clicks on image once change character click state, header message, and score.
    if (clickedCharacter.clicked === false) {
      headerMessage = "You guessed correctly!";
      clickedCharacter.clicked = true;
      correct++

      // If user scores higher than best score, change best score.
      if (correct > bestScore) {
        bestScore = correct;
      }

      // If user wins start game over and change header message.
      if (correct >= 12) {
        gameOver = true;
        correct = 0;
        charactersCopy.forEach(character => {
          character.clicked = false;
        });
        headerMessage = "Yay! You Win!";
      }
      // Shuffle array to display random images.
      charactersCopy.sort(function (a, b) { return 0.5 - Math.random() });
    } else {
      console.log("Double Click" + JSON.stringify(clickedCharacter));
      correct = 0;
      headerMessage = "You already guessed that one!";
      gameOver = true;
      charactersCopy.forEach(character => {
        character.clicked = false;
        // Shuffle array to display random images.
        charactersCopy.sort(function (a, b) { return 0.5 - Math.random() });
      });
    }
    this.setState({ characters: charactersCopy, correct, gameOver, bestScore, headerMessage });
  }

  renderHeader() {
    let header = this.state.headerMessage;
    return header;
  }

  render() {
    return (
      <Wrapper>
        <Header bestScore={this.state.bestScore} score={this.state.correct}>
          {this.renderHeader()}
        </Header>
        <Jumbotron />
        <div className="row">
          {this.state.characters.map(character => (
            <ImageCard
              handleClick={this.handleClick}
              data={character}
            />
          ))}
        </div>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
