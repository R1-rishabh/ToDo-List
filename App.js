import './App.css';
import Header from './Mycomponents/Header'; 
import { Todos } from "./Mycomponents/Todos";
import { AddTodo } from './Mycomponents/AddTodo';
import { Footer } from "./Mycomponents/Footer";
import React, { useEffect, useState } from 'react';


function App() {
  let initTodo;
  if(localStorage.getItem("todos") === null){
    initTodo = [];
  }else {
     initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete =(todo)=>{
    console.log("I m on delete of todo",todo)
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
    localStorage.getItem("todos",JSON.stringify(todos));
  }

  const addTodo = (title,desc) =>{
    console.log("I am adding this todo",title,desc)
    let sno;
    if(todos.length == 0){
      sno=0;
    }else {
      sno =todos[todos.length-1].sno + 1;
    }
    
    const myTodo = {
      sno : sno,
      title : title,
      desc : desc,
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  
  }, [todos])
  return (
    <>
     <Header title = "MY TODO LIST" />
     <AddTodo addTodo={addTodo}/>
     <Todos todos={todos} onDelete={onDelete}/>
     <Footer/>
    </>
  );
}

export default App;
