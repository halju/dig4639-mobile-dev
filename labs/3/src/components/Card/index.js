import React from 'react';
import './index.css';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
  return <div className="card">{this.props.content}</div>;
  }
}

export default Card;