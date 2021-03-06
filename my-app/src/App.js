import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Hero from "./components/Hero";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import images from "./images.json";
//import update from "immutability-helper";
import logo from './logo.svg';
import './App.css';

class App extends Component {

  // Set the initial state
  state = {
    images,
    message: "Click an image to start Playing!",
    score: 0,
    topScore: 0
  };

  // An image was clicked...
  imageClick = imagesID => {
    let imagesArr = this.state.images;
    console.log("Clicked");

    for (let i = 0; i < imagesArr.length; i++) {
      console.log("imagesID " + imagesID);

      if (imagesID === imagesArr[i].id) {
        
        if (imagesArr[i].clicked === false) {
          console.log("Clicked new image");
          this.setState({
            //images: update(this.state.images, { [i]: { clicked: { $set: true } } }),
            message: "Dragonball Z Game",
            score: this.state.score + 1
          });
        } else {
          console.log("Clicked same image");
          this.setState({
            images,
            message: "Keep trying?",
            score: 0,
            topScore: (this.state.score > this.state.topScore) ? this.state.score : this.state.topScore
          });
        }
      }
    }
  };

  // Used to shuffle the images around
  randomizer = arr => {
    console.log("Randomizer");
    for (let i = arr.length - 1; i > 0; i--) {
      const temp = arr[i];
      const j = Math.floor(Math.random() * (i + 1));
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  };

  render() {
    
    let imageCards = this.state.images.map(image => (
      <ImageCard
        key={image.id}
        id={image.id}
        image={image.image}
        imageClick={this.imageClick}
      />
    ));

    return (
      <Wrapper>
        <Navbar
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Hero backgroundImage="https://images.alphacoders.com/605/thumb-350-605799.jpg">
          <h1>Clicky Game!</h1>
          <h2>Click on an image to earn points, but don't click on any more than once!</h2>
        </Hero>
        { this.randomizer(imageCards) }
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
