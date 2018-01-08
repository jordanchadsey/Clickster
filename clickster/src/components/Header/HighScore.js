import React from "react";
const HighScore = props =>(
  <span>
      <button type="button" className="btn btn-outline-info highscore">{props.highscore}</button>
      </span>
    );
export default HighScore;
