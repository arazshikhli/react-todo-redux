import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addPost} from "../../Store/postSlice";
import PostList from "./PostList";
import InputPost from "./inputPost";
function Posts(){
    const [postText,setPostText]=useState('')
    const [postTitle,setPostTitle]=useState('')
    const dispatch=useDispatch()
    const addPostTask=()=>{

        dispatch(addPost({postText,postTitle}))
        setPostText('')
        setPostTitle('')
    }
    return (
        <div>

              <InputPost postText={postText} handleInput={setPostText} postTitle={postTitle} handleTitleInput={setPostTitle} handleSubmit={addPostTask}/>
            <PostList/>
            </div>

    )
}
export default Posts