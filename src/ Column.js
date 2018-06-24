import React from "react";

export default class Column extends React.Component {
  render() {
    const size = this.props.size.split(" ").map(size => "col-" + size).join(" ");
    return (
      <div className={size}>
        {this.props.children}
      </div>
    )
  }
}