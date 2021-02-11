import React,{useState} from 'react';
import Form from './Components/Form';
import './App.css';
import Header from './Components/Header';
import TodoList from './Components/TodoList';
const App=()=>{
    const[inputText,setInputText]=useState("");
    const[todo,setTodo]=useState([]);
    const[empty,setEmpty]=useState(false);


    
    return(
        <div className="container">
            <Header header="JUST DO IT"/>
            <div className="body">
                
            <Form empty={empty} setInputText={setInputText} todo={todo} setTodo={setTodo} inputText={inputText} setEmpty={setEmpty}/>
            
            <TodoList todo={todo} setTodo={setTodo} />
            </div>
        </div>
    )
}

export default App;