import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Main from './Components/Main';

function App() {
  const onDelete = (todo) => {
    console.log("Clicked ", todo);

    setTodos(todos.filter((element) => {
      return (element !== todo);
    }));
  }
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Start web development bro",
      desc: "You've been procastinating for far too long. It's time you get your life together."
    },
    {
      sno: 2,
      title: "Start working out bro",
      desc: "You've been procastinating for far too long. It's time you get your life together."
    },
    {
      sno: 3,
      title: "Start competitive programming bro",
      desc: "You've been procastinating for far too long. It's time you get your life together."
    }
  ]);

  return (
    <>
      <Navbar title="Todo!"/>
      <Main todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;


