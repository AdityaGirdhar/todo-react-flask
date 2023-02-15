import React from 'react'

export default function TodoItem({task, onDelete}) {
  return (
    <>
    <div className='mw-100 d-flex justify-content-between'>
        <div>
            <h4>{task.title}</h4>
            <p>{task.desc}</p>
        </div>
        <div>
            <button type="button" className="me-auto btn-close p-4" aria-label="Close" onClick={() => onDelete(task)}></button>
        </div>
    </div>
    <hr className="hr"/>
    </>
  )
}
