import React from 'react'
import { useState } from 'react'

export default function AddTodo({addTodo, deleteAll}) {
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");

	const submit = (e) => {
		e.preventDefault();
		if (!title || !desc) {
			alert('Please fill both the title and description fields!');
		} else {
			addTodo(title, desc);
			setTitle("");
			setDesc("");
		}
	}
	
  return (
    <div className="shadow my-3 p-4 rounded">
        <form onSubmit={submit}>
            <input
							type="text"
							value={title}
							className="form-control w-100 mb-2"
							id="title"
							placeholder="Enter a new task heading"
							onChange={(e)=>{setTitle(e.target.value)}}
						/>
            <input
							type="text"
							value={desc}
							className="form-control w-100 mt-3" 
							id="desc"
							placeholder="Enter a new task description"
							onChange={(e)=>{setDesc(e.target.value)}}
						/>
						<div className="col text-center my-4">
            	<button type="button" className="btn btn-primary mx-2" onClick={submit}>
								+ Add new task
							</button>
            	<button type="button" className="btn btn-danger mx-2" onClick={deleteAll}>
								× Clear tasks
							</button>
            </div>
        </form>
    </div>
  )
}
