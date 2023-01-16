import {useState} from 'react'
import './App.css';
import TodoList from "./Components/Todo/TodoList";
import InputField from "./Components/Todo/InputField";
import {useDispatch} from 'react-redux'
import {addTodo} from './Store/todoSlice'
import{addPost} from "./Store/postSlice";
import InputPost from "./Components/Posts/inputPost";
import PostList from "./Components/Posts/PostList";
import {Routes,Route,Link } from 'react-router-dom'
import Posts from "./Components/Posts/posts";
import Todos from "./Components/Todo/Todos";

function App() {

  return (
    <div className="App">
      <Link to='posts'>Posts</Link>
      <Link to='todos'>Todos</Link>
      <Routes>
        <Route path='posts' element={<Posts/>}/>
        <Route path='todos' element={<Todos/>}/>
      </Routes>

    </div>
  );
}

export default App;
