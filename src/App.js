import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Main from './Components/Main';

function App() {
  const onDelete = (todo) => {
      setTodos(todos.filter((element) => {
      return (element !== todo);
    }));
  }

  const addTodo = (title, desc) => {
    const newSno = todos[0].sno + 1;
    const newTodo = {
      sno: newSno,
      title: title,
      desc: desc,
    }
    setTodos([newTodo, ...todos])
  }

  const [todos, setTodos] = useState([
    {
      sno: 3,
      title: "Start web development bro",
      desc: "You've been procastinating for far too long. It's time you get your life together."
    },
    {
      sno: 2,
      title: "Start working out bro",
      desc: "You've been procastinating for far too long. It's time you get your life together."
    },
    {
      sno: 1,
      title: "Start competitive programming bro",
      desc: "You've been procastinating for far too long. It's time you get your life together."
    }
  ]);

  return (
    <>
      <Navbar title="GirdharDo!"/>
      <Main todos={todos} onDelete={onDelete} addTodo={addTodo}/>
      <Footer/>
    </>
  );
}

export default App;


