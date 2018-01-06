import React from "react";
import Score from './Score.js';
import "./Header.css";

class Header extends React.Component{
  state = {
    cool: true
  };

  render() {

  return (
    <div className = "header">
    <div class="jumbotron">
    <h1 class="display-3 left">Clickster</h1>
    <p class="lead">Do you think that you can remember which pics you've clicked? Don't be tricked!</p>
    <p className = "right"><bold> Let's play! </bold></p>
    <Score/>

  </div>
</div>
  );
}
}

export default Header;
