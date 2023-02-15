import React from 'react'
import AddTodo from './AddTodo'
import TodoItem from './TodoItem'

export default function Main({todos, onDelete}) {
  return (
    <div className='container-sm mt-5 p-4 pb-4'>
        <h3 className='text-center mb-4'>Welcome, here are your tasks for today.</h3>
        <AddTodo/>
        {todos.length === 0 ? <center>Nothing to see here.</center> :
        todos.map((todo) => {
          return (<TodoItem task={todo} key={todo.sno} onDelete={onDelete}/>)
        })
        }
        <div className='mh-100'>
            <center className='min-vh-50'>You can do it.</center>
        </div>
    </div>
  )
}