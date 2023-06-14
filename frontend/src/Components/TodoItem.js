import React from 'react'

export default function TodoItem({task, onDelete}) {
  return (
    <>
    <div className='px-5 py-1 mw-100 d-flex justify-content-between my-4'>
        <div className='h-100'>
            <h4>{task.title}</h4>
            <p>{task.desc}</p>
            <p>{task.date}</p>
        </div>
        <div>
            <a className="me-auto btn btn-outline-light my-2 py-2 mx-1" aria-label="Close">✏️</a>
            <button onClick={() => onDelete(task.sno)} className="me-auto btn btn-outline-light my-2 py-2 mx-1" aria-label="Close">✅</button>
        </div>
    </div>
        <hr style={{'width': '90%', 'margin': 'auto'}}/>
    </>
  )
}
