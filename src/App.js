import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Main from './Components/Main';

function App() {
  let tempTodo;

  if (localStorage.getItem("todos"))
    tempTodo = JSON.parse(localStorage.getItem("todos"));
  else
    tempTodo = [];

  const addTodo = (title, desc) => {
    let newSno;
    if (todos.length === 0)
      newSno = 1 
    else
      newSno = todos[0].sno + 1;
    
    const newTodo = {
      sno: newSno,
      title: title,
      desc: desc,
    }
    setTodos([newTodo, ...todos]);
  }

  const onDelete = (todo) => {
    setTodos(todos.filter((element) => {
      return (element !== todo);
    }));
  }

  const deleteAll = () => setTodos([]);

  const [todos, setTodos] = useState(tempTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <>
      <Navbar title="GirdharDo!"/>
      <Main todos={todos} onDelete={onDelete} addTodo={addTodo} deleteAll={deleteAll}/>
      <Footer/>
    </>
  );
}

export default App;


