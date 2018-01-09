import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Score from './components/Header';
import HighScore from './components/Header';
import Wrapper from './components/Wrapper';
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
    shuffle: false,
    score: 0,
    message: "",
    highscore: 0

  };

  addScore = () => {

    this.setState({ score: this.state.score + 1 });
  };



  gameRestart = () => {
    this.setState({ score: 0});
    const selectedImg = this.state.images.filter(item => item.selected === true);
    const imageFix = selectedImg.map(item => item.selected = false);
    shuffle(this.state.images);
    this.setState({shuffle: true});


  }
  selectedCard = id => {

    const selectedImage = this.state.images.filter(item => item.id === id);
    console.log(selectedImage);
    if (selectedImage[0].selected === true){

        this.setState({message: "You lose, let's play again!"});

      if (this.state.score > this.state.highscore){
        this.setState({highscore:this.state.score});
        }
        this.gameRestart();


    if (this.state.score > 11){
        this.setState({message: "You win, let's play again!"});
        this.setState({highscore: this.state.score});
        this.gameRestart();


      }
    }
    else{
    this.setState({message: ""});
    this.addScore();
    selectedImage[0].selected = true;
    shuffle(this.state.images);
    this.setState({shuffle: true});}


  }


  render() {

    return (
      <div>
      <Header
        score = {this.state.score}
        highscore = {this.state.highscore}/>
      <div className = "container">
        <h2> {this.state.message} </h2>
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
  </div>

    );
  }
};

export default App;
