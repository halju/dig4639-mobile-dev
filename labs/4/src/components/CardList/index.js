import React from 'react';
import './index.css';
import cards from './data.json'

function TodoItem(props) {
  return <div className='card'>
    <h3>{props.title}</h3>
    <p>{props.content}</p>
    <button type="button" className="close" onClick ={() => props.removeTask(props.id)}>x</button></div>
}
class CardList extends React.Component {
  constructor(props) {
    super(props)
    this.state = cards
  }
  removeTask(id) {
    let cards = this.state.cards
    cards = cards.filter((v) => v.id !== id)
    this.setState({cards})
  }
  render() {
    return (
      <>
      { this.state.cards
        .map ((v) => <TodoItem id={v.id} removeTask={(id) => this.removeTask(id)}
          key={v.id}
          priority={v.priority} 
          content={v.content} 
          completed={v.completed}
          title={v.title} />) }
        </>
    );
  }
}

export default CardList;
  