import React from "react";
import './../../index.css'
const InputPost=({postText,handleInput,handleTitleInput,postTitle,handleSubmit})=>{

    return (
        <label>
            <input placeholder='Write Post name' className='post-name_input' value={postText} onChange={(e)=>handleInput(e.target.value)}/>
            <input placeholder='Write Post title' className='post-title_input' value={postTitle} onChange={(e)=>handleTitleInput(e.target.value)}/>
            <button onClick={handleSubmit} className='add-btn'> add Post</button>
        </label>
    )
}
export default InputPost