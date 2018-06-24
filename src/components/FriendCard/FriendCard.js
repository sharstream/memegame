import React from "react";
import "./FriendCard.css";

export default class FriendCard extends React.Component {
  render() {
    return (
      <div
        className="card"
        value={this.props.id}
        onClick={() => this.props.handleClick(this.props.id)}
      >
        <div className="img-container">
          <img alt={this.props.name} src={this.props.image} />
        </div>
      </div>
    )
  }
}