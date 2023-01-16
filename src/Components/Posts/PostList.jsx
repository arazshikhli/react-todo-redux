import React from "react";
import PostItem from "./PostItem";
import {useSelector} from 'react-redux'
const PostList=()=>{
    const posts=useSelector(state=>state.posts.posts)

    return (
        <ul>
            {
               posts.map(post=><PostItem key={post.id} {...post}/> )
            }
        </ul>
    )
}
export default PostList