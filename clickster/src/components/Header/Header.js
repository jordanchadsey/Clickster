import React from "react";
import Score from './Score.js';
import HighScore from './HighScore.js';
import "./Header.css";

const Header = props =>(
    <div className = "header">
    <div class="jumbotron">
    <h1 class="display-3 left title">Clickster</h1>
    <p class="lead">Do you think that you can remember which pics you've clicked? Don't be tricked!</p>
    <span className = "pscore">Current Score:</span><Score score= {props.score}/>    <span className = "pscore">High Score:</span><HighScore highscore= {props.highscore}/>
  </div>
</div>
  );


export default Header;
