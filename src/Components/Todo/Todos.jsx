import React, {useState} from "react";
import InputField from "./InputField";
import TodoList from "./TodoList";
import {useDispatch} from "react-redux";
import {addTodo} from "../../Store/todoSlice";
function Todos(){
    const [text,setText]=useState('');
    const dispatch=useDispatch()
    const addTask=()=>{
        dispatch(addTodo({text}))
        setText('')
    }
return( <div>
        <p>Add Todo</p>
        <InputField text={text} handleInput={setText} handleSubmit={addTask}/>
        <TodoList/>
</div>
)
}
export default Todos