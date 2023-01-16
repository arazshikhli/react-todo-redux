import React from "react";
import {useDispatch} from 'react-redux'
import {removePost} from "../../Store/postSlice";
import {editPost} from "../../Store/postSlice";

const PostItem=({id,postName,postTitle})=>{
    const dispatch=useDispatch()
    return (
        <li>
            <span>Post name: {postName}</span>
            <span>Post title: {postTitle}</span>
            <span className='close' onClick={()=>dispatch(removePost({id}))}>&times;</span>
            <span className='close' onClick={()=>dispatch(editPost({id}))}>Edit</span>
        </li>
    )
}
export default PostItem