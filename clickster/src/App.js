import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import Score from './components/Header/Score.js';
import Images from './components/Images';
import images from "./images.json";

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

class App extends Component {
  state = {

    images: images,
    shuffle: false

  };

  selectedCard = id => {

    const selectedImage = this.state.images.filter(item => item.id === id);
    console.log(selectedImage);
    if (selectedImage[0].selected === true){
      // decrement Score
shuffle(this.state.images);
      alert('You already chose that one!');
      this.setState({shuffle: true});
    }
    else{
    selectedImage[0].selected = true;
    shuffle(this.state.images);
    this.setState({shuffle: true});}


  }

  render() {

    return (
      <div className = "container">
      <Header>
        <Score/>
      </Header>
      <Wrapper>

        {this.state.images.map(images=> (

        <Images

          id={images.id}
          key={images.id}
          name={images.name}
          image={images.image}
          selectedCard= {this.selectedCard}
          selected = {images.selected}


        />
      ))}


      </Wrapper>
    </div>

    );
  }
}

export default App;
