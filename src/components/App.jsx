import React, { useState } from "react";

const ColorBox = ({color})=>{
    return(
    <div className="color-box" style={{backgroundColor:color}}>
        ColorBox
    </div>
    )
}
const App = () => {
    const[color,setColor]=useState("")
    const handleChange=(e)=>{
        setColor(e.target.value)
    }
    return(
        <div className="parent-box">
            <div>
                <label> Write a Color Code :- </label>
                <input onChange={handleChange} value={color} name="color" placeholder="Write a Color Code" autoComplete="off"/>
            </div>
            <div className="child-box">
                <label>Color Display Box :- </label>
                <ColorBox color={color}/>
            </div>
        </div>
    )
}
export default App
