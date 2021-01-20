import React from 'react';
import Err from './Err';


const Form=({setInputText,inputText,todo,setTodo,setEmpty,empty})=>{


    const inputHandler=(e)=>{
        setInputText(e.target.value);
    }
    const addHandler=(e)=>{
        
        
        e.preventDefault();
        if((e.keyCode===13 || e._reactName==="onClick") && inputText!==""){
        setTodo([
            ...todo,
            {text:inputText,id:Math.random(),completed:false}
        ])
        

        setInputText("");
        setEmpty(false);
        
        }
        else if(inputText===""){
            return(
                setEmpty(true)
            )
        }
    }    
    
   


    return(
        <div>
        <div className="form">
            
            <input type="text" placeholder="Add new task" className="form-input" value={inputText} onChange={inputHandler} onKeyUp={addHandler}/>

            <button className="form-button" onClick={addHandler} onKeyUp={addHandler}>+</button>
            

        </div>
        <div className="error-div">
            {empty?<Err/>:null}
        </div>
        </div>
    )
}
export default Form;