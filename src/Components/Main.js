import React from 'react'
import TodoItem from './TodoItem'

export default function Main({todos, onDelete}) {
  return (
    <div className='container-sm mt-5'>
        <h3 className='text-center mb-4'>Welcome, here are your tasks for today.</h3>
        <div className="my-3 p-4">
          <input type="text" className="form-control w-100" id="exampleFormControlInput1" placeholder="Enter a new task"/>
        </div>
        {todos.map((todo) => {
          return (<TodoItem task={todo} key={todo.sno} onDelete={onDelete}/>)
        })}
    </div>
  )
}