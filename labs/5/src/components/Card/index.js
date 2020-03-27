import React from 'react';
import './index.css';

class Card extends React.Component {
  render() {
    return (
    <div className='card'>
      <h2>{this.props.title}</h2>
      {this.props.children}
    </div>)
  }
}

export default Card