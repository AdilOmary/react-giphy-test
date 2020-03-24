import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Gif extends Component {
  render() {
    const { gifID } = this.props;
    const url = `https://media.giphy.com/media/${gifId}/giphy.gif`;
    return (
      <img className="gif" src={url} alt="gif" />
    );
  }
}
