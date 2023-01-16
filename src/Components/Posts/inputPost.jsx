import React from "react";
const InputPost=({postText,handleInput,handleTitleInput,postTitle,handleSubmit})=>{
    return (
        <label>
            <input placeholder='Write Post name' className='add-input' value={postText} onChange={(e)=>handleInput(e.target.value)}/>
            <input placeholder='Write Post title' className='add-input' value={postTitle} onChange={(e)=>handleTitleInput(e.target.value)}/>
            <button onClick={handleSubmit} className='add-btn'> add Post</button>
        </label>
    )
}
export default InputPost