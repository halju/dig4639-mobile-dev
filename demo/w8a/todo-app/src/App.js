import React from 'react'
import todoList from './todoList.json';
import './App.css';

//add input form
//filter list
//have items remove themselves

function TodoItem(props) {
  return <p className='card' onClick ={() => props.removeTask(props.id)}>{props.content}</p>
}
class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList,
      hideCompletedItems:false,
    }
    this.currentId = 4;
  }
  addTask(e) {
    console.log(this.refs.taskContent)
    let todoList = this.state.todoList
    todoList.push(
      { "id": this.currentId, "completed": true, "priority": 1, "content": this.refs.taskContent.value}
    )
    this.currentId++
    this.setState({todoList})
  }
  removeTask(id) {
    console.log(id)
    let todoList = this.state.todoList
    todoList = todoList.filter((v) => v.id !== id)
    this.setState({todoList})
  }
  render() {
    return (
      <>
      <input type="text" ref="taskContent" />
      <input type="button" value="Add task" onClick={(e) => this.addTask(e)} />
      <input ref="hideCompletedItemsCheckbox" type="checkbox" id="hideCompletedItems" 
      name="hideCompletedItems" value="hideCompletedItems" 
      onChange={(e) => this.setState({hideCompletedItems: e.target.checked})} />
      <label htmlFor="hideCompletedItems"> I have a bike</label>
      { ((this.state.hideCompletedItems) ? this.state.todoList
        .filter((v) => !v.completed) : this.state.todoList )
        .map ((v) => <TodoItem id={v.id} removeTask={(id) => this.removeTask(id)}
          key={v.id}
          priority={v.priority} 
          content={v.content} 
          completed={v.completed} />) }
      </>
    );
  }
}
function App() {
  return (
    <TodoList />
  );
}

export default App;
