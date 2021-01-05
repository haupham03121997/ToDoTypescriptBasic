 type Todo = {
  text : string, 
  isComplete: boolean,
}
type ToogleTodo = (selectedToto : Todo)=> void;
type AddTodo  = (newTodo : string ) => void;