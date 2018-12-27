import React, { Component } from "react";
import { Button } from "reactstrap";

class likeCounter extends Component {
  handleLikeCounter(event) {
    this.props.likeCounter;
  }

  render() {
    return (
      <div>
        <Button onClick={event => this.handleOnClick(event)}>LIKE</Button>
      </div>
    );
  }
}

export default likeCounter;
