import React from "react";
import {useDispatch} from 'react-redux'
import {removeTodo}from'./../Store/todoSlice'
import {toggleTodoComplete} from "./../Store/todoSlice";

const TodoItem=({id,text,completed})=>{
const dispatch=useDispatch()
    return (
        <li><div>
            <input checked={completed}
                   type='checkbox' className='checkbox'
                   onChange={()=>dispatch(toggleTodoComplete({id}))}/>
            <span>{text}</span>
        </div>

    <span className='close' onClick={()=>dispatch(removeTodo({id}))}>&times;</span>
        </li>
    )
}
export default TodoItem