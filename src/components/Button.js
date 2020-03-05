import React, { Component } from "react";

export default class Button extends Component {

  render() {

    const {
      label,
      handleClick
    } = this.props;

    return (
      <div className='button' onClick={handleClick}>
        {label}
      </div>
    )
  }
}