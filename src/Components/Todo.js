import React from 'react';

const Todo=({item,todo,setTodo})=>{
   
    const deleteHandler=()=>{
        setTodo(todo.filter(elem=>elem.id!==item.id));  
     }
    
     const doneHandler=()=>{
         setTodo(todo.map(elem=>{
             if(elem.id===item.id){
                return(
                    {
                        ...elem,completed:!elem.completed
                    }
                )
             }
             return {...elem}
         }))
     }
    
     return(    
        <div className="show-Todo">
            <p onClick={doneHandler} className={item.completed?'strike':''}> 
                 
                {item.text}
               
            </p>
           
            <button onClick={deleteHandler} >
                X
            </button>
        </div>
    )
}
export default Todo;