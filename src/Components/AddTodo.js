import React from 'react'

export default function AddTodo() {
  return (
    <div className="my-3 p-2">
        <div className="container ">
        <div className="row my-1 p-2">
            <div className="col">
            <input type="text" className="form-control w-100" id="exampleFormControlInput1" placeholder="Enter a new task heading"/>
            </div>
        </div>
        <div className="row my-1 p-2">
            <div className="col">
            <input type="text" className="form-control w-100" id="exampleFormControlInput1" placeholder="Enter a new task description"/>
            </div>
        </div>
        <div className="row p-2">
            <div className="col text-center">
            <button type="button" className="btn btn-primary">+ Add new task</button>
            </div>
            <div className="col text-center">
            <button type="button" className="btn btn-danger">× Clear tasks</button>
            </div>
        </div>
        </div>
    </div>
  )
}
