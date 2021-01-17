import React, { useState } from "react";
export function CreateMeal(){
    const [title, setTitle] = useState('')
    function onSubmit(){
        (async() => { 
            fetch('http://localhost:5000/api/meals',{
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title: title
                })
            })
        })()
    }
    return(
        <>
       
        <div className= "meal">
            <label>
                add meal:
        <input type= "text" value={title} onChange = {(e) => setTitle(e.target.value)} ></input>
        </label><br></br>
        
        <button type="submit" onClick = {onSubmit} style = {{marginLeft: 100}}>submit</button>
        </div>
       
        </>
    )
}