import React from 'react'

export default function TodoItem({task, onDelete}) {
  return (
    <>
    <div className='shadow rounded px-5 py-3 mw-100 d-flex justify-content-between my-4 align-items-center'>
        <div className='h-100 align-items-center'>
            <h4>{task.title}</h4>
            <p>{task.desc}</p>
        </div>
        <div>
            <button type="button" className="me-auto btn-close py-4" aria-label="Close" onClick={() => onDelete(task)}></button>
        </div>
    </div>
    </>
  )
}
