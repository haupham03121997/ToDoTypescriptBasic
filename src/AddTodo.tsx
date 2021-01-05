import React, {useState , ChangeEvent, FormEvent } from 'react';

interface AddTodoFormProps {
  addTodo: AddTodo
}

export const AddTodo: React.FC<AddTodoFormProps> = ({addTodo})=>{
  const [newTodo , setNewTodo]  = useState("");
  const handleOnchange = (e: ChangeEvent<HTMLInputElement>) =>{
    setNewTodo(e.target.value);
  }
  const handleSubmit =(e: FormEvent<HTMLButtonElement>)=>{
    e.preventDefault();
      addTodo(newTodo);
  }
  return(
    <form>
      <input type="text" value={newTodo} onChange={handleOnchange}/>
      <button type="submit" onClick={handleSubmit}>Add</button>
    </form>
  )
}