import React from "react";
class Score extends React.Component {
  state = {
    count: 0,
  };

  addScore = () => {

    this.setState({ count: this.state.count + 1 });
  };

  lowerScore = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
      <p className = "score"> I'm a score </p>
      </div>
    );
  }
}

export default Score;
