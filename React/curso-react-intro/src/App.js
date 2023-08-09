import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const TodoDefaultList = [
  {text:"task 1", completed:true},
  {text:"task 2", completed:false},
  {text:"task 3", completed:false},
  {text:"task 4", completed:false},
]

function App() {
  return (
    <React.Fragment>

      <TodoCounter total={TodoDefaultList.length} completed={(TodoDefaultList.filter(x=> x.completed === true)).length} />
      <TodoSearch />

      <TodoList>
        {TodoDefaultList.map(todo =>( <TodoItem text={todo.text} complete={todo.completed} />)) }
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>

  )
}



export default App;
