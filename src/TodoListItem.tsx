import React from 'react';
import './TodoListItem.css';

interface ToDoListItemProps {
  todo: Todo;
  toogleTodo : ToogleTodo
}

export const TodoListItem: React.FC<ToDoListItemProps>= ({todo , toogleTodo})  =>{
  return <li>
    <label className= {todo.isComplete ? "complete" : undefined}>
      <input type="checkbox" checked={todo.isComplete}  onChange={()=>{toogleTodo(todo)}}/>
      {todo.text}
    </label>
  </li>
}