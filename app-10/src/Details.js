import React, {Component} from 'react';
import axios from 'axios';

class Details extends Component {
  constructor() {
    super();

    this.state = {
      item: {}
    }
  }

  componentDidMount() {
    const {id} = this.props.match.params
    axios.get(`https://practiceapi.devmountain.com/products/${id}`).then(response => {
      this.setState({item: response.data});
    })
  }

  render() {
    const {item} = this.state;

    return (
      <div>
        <h1>Details</h1>
        <h2>{item.title}</h2>
        <img width='200' src={item.image} alt='' />
        <h4>{`Price: $${item.price}.00`}</h4>
      </div>
    )
  }
}

export default Details;