import React from "react";
const Score = props =>(
  <span>
      <button type="button" className="btn btn-outline-success score">{props.score}</button>
      
      </span>
    );
export default Score;
