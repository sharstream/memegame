import React from "react";

export default class Row extends React.Component {
  render() {
    return (
      <div className={`row${this.props.fluid ? "-fluid" : ""}`}>
        {this.props.children}
      </div>
    )
  }
}