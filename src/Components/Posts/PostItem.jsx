import React from "react";
import {useDispatch} from 'react-redux'
import {removePost} from "../../Store/postSlice";
import {editPost} from "../../Store/postSlice";

const PostItem=({id,postName,postTitle})=>{
    console.log('PostName: ',postName)
    const dispatch=useDispatch()
    return (
        <li><div>
            <span>{postName}</span>
            <span>{postTitle}</span>
        </div>
            <span className='close' onClick={()=>dispatch(removePost({id}))}>&times;</span>
            <span className='close' onClick={()=>dispatch(editPost({id}))}>Edit</span>
        </li>
    )
}
export default PostItem