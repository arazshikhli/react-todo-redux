import {useState} from 'react'
import './App.css';
import TodoList from "./Components/TodoList";
import InputField from "./Components/InputField";
import {useDispatch} from 'react-redux'
import {addTodo} from './Store/todoSlice'
function App() {

  const [text,setText]=useState('');
  const dispatch=useDispatch()
  const addTask=()=>{
    dispatch(addTodo({text}))
    setText('')
  }

  return (
    <div className="App">
        <InputField text={text} handleInput={setText} handleSubmit={addTask}/>
        <TodoList/>
    </div>
  );
}

export default App;
