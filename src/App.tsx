import React from 'react';
import { TodoList } from './TodoList';
import {AddTodo} from './AddTodo';
function App() {

  const initialTodo: Array<Todo> = [
    { text: "Ngủ ", isComplete: true },
    { text: "ăn", isComplete: true },
    { text: "code ", isComplete: false }
  ];
  const [todos ,setIstodos] = React.useState(initialTodo);
  const toogleTodo:ToogleTodo =(selectedTodo) =>{
    const newTodo  = todos.map((todo )=>{
      if(todo === selectedTodo){
        return {
          ...todo,
          isComplete : !todo.isComplete
        }
      }
      return todo;
    })
    setIstodos(newTodo);
  }
  const addTodo: AddTodo = newTodo=>{
      setIstodos([...todos , {text :newTodo , isComplete : false}])
  }

  return (
    <div className="App">
        <TodoList todos={todos} toogleTodo={toogleTodo} />
        <AddTodo addTodo={addTodo} />
    </div>
  );
}

export default App;
