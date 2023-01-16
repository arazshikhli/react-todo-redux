import React from "react";
const InputField=({text,handleInput,handleSubmit})=>{
    return (
        <label>
            <input placeholder='Write Todo' className='add-input' value={text} onChange={(e)=>handleInput(e.target.value)}/>
            <button onClick={handleSubmit} className='add-btn'> add Todo</button>
        </label>
    )
}
export default InputField