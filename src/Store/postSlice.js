import {createSlice} from '@reduxjs/toolkit';
const postSlice=createSlice({
    name:'post',
    initialState:{posts:[]},
    reducers:{
        addPost(state,action){
            console.log('State: ',state)
            console.log('Action: ',action)
            state.posts.push({
                id:new Date().toISOString(),
                text:action.payload.postText,
                title:action.payload.postTitle
            })
        },
        removePost(state,action){
            console.log(action)
            state.posts=state.posts.filter(post=>post.id!==action.payload.id)
        },
        editPost(state,action){}
    }
})
export const{addPost,removePost,editPost}=postSlice.actions
export default postSlice.reducer