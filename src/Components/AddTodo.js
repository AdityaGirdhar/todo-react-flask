import React from 'react'
import { useState } from 'react'

export default function AddTodo() {
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");

	const submit = () => {

	}
	
  return (
    <div className="my-3 p-2">
        <form onSubmit={submit}>
            <input type="text" className="form-control w-100 mb-2" id="title" placeholder="Enter a new task heading"/>
            <input type="text" className="form-control w-100 mt-3" id="desc" placeholder="Enter a new task description"/>
						<div className="col text-center my-4">
            	<button type="button" className="btn btn-primary mx-2" onClick={submit}>+ Add new task</button>
            	<button type="button" className="btn btn-danger mx-2">× Clear tasks</button>
            </div>
        </form>
    </div>
  )
}