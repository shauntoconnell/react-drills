import React, {Component} from 'react';

export default class Image extends Component {
  constructor() {
    super();

    this.state = {

    }
  }

  render() {
    const {imageUrl} = this.props;

    return (
      <div>
        <img src={imageUrl} alt=''/>
      </div>
    )
  }
}