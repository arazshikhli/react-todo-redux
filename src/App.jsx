import {useState} from 'react'
import './App.css';
import TodoList from "./Components/TodoList";
import InputField from "./Components/InputField";
import {useDispatch} from 'react-redux'
import {addTodo} from './Store/todoSlice'
import{addPost} from "./Store/postSlice";
import InputPost from "./Components/Posts/inputPost";
import PostList from "./Components/Posts/PostList";

function App() {
  const [postText,setPostText]=useState('')
    const [postTitle,setPostTitle]=useState('')
  const [text,setText]=useState('');
  const dispatch=useDispatch()
  const addPostTask=()=>{
      // console.log(postText)
      // console.log(postTitle)
    dispatch(addPost({postText,postTitle}))
    setPostText('')
      setPostTitle('')
  }
  const addTask=()=>{
    dispatch(addTodo({text}))
    setText('')
  }

  return (
    <div className="App">
        <InputField text={text} handleInput={setText} handleSubmit={addTask}/>
        <TodoList/>
      <div>
        <InputPost postText={postText} handleInput={setPostText} postTitle={postTitle} handleTitleInput={setPostTitle} handleSubmit={addPostTask}/>
      <PostList/>
      </div>
    </div>
  );
}

export default App;
