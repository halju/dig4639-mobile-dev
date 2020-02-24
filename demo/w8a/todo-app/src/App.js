import React from 'react';
import './App.css';

const todoList = [
  {
    content: 'Task 1', priority: 2, completed: true
  },
  {
    content: 'Task 2', priority: 1, completed: true
  },
  {
    content: 'Task 3', priority: 3, completed: false
  }
]

function TodoItem(props) {
  return <p>{props.content}</p>
}
function App() {
  const todoListFiltered = todoList.filter((value) => value.completed)

  let todoArray = todoListFiltered.map (
    (value) => <TodoItem content={value.content} />
  )
  /*
  const todoArray = [
    <TodoItem content="Item 1"/>,
    <TodoItem content="Item 2"/>,
    <TodoItem content="Item 3"/>
  ] */
  return (
    <div>
      {todoList.filter((v) => v.completed).map (
        (v) => <TodoItem content={v.content} />)}
    </div>
  );
}

export default App;
