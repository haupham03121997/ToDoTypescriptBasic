import React from 'react';
import {TodoListItem} from "./TodoListItem";

interface ToDoListProps {
  todos : Array<Todo>;
  toogleTodo : ToogleTodo
}
export const TodoList:React.FC<ToDoListProps> = ({todos , toogleTodo})=>{
    return(
      <ul>
        {todos.map(todo=>{
          return <TodoListItem todo={todo} toogleTodo={toogleTodo} />
        })}
       
      </ul>

    )
}