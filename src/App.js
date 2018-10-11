import React, { Component } from 'react';
import characters from './characters.json'
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Jumbotron from "./components/Jumbotron";
import ImageCard from './components/ImageCard';
import Footer from './components/Footer';

import "./index.css"

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Jumbotron />
        <div className="row">
          <ImageCard></ImageCard>
        </div>
        <Footer />
      </Wrapper>
    );
  }
}

// render() {
//   return (
//     <Wrapper>
//       <NavBar bestScore={this.state.bestScore} currentScore={this.state.correctGuesses}>
//         {this.renderHeader()}
//       </NavBar>
//       <Jumbotron></Jumbotron>
//       <div className="row">
//         {this.state.puppies.map(puppy => (
//           <ImageCard
//             click={this.handlePuppyClick}
//             id={puppy.id}
//             image={puppy.image}
//             name="Puppy"
//             key={puppy.id}
//           />
//         ))}
//       </div>
//       <Footer></Footer>
//     </Wrapper>
//   );
// }

export default App;
