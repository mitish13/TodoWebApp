import React from 'react'
import Todo from './Todo';

const TodoList=({todo,setTodo})=> {
   
    return (
        <div className="list">   
            {
             todo.map((item)=>{
            return(        
            <Todo item={item} key={item.id} todo={todo} setTodo={setTodo}/>)
            })
            }
        </div>
    )
}

export default TodoList;