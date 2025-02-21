// Task.jsx
import React from 'react'

function Task({ task, onDelete }) {
  return (
    <div>
      <p>
        {task.text}{' '}
        <button
          onClick={() => onDelete(task.id)}
          style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white' }}
        >
          X
        </button>
      </p>
    </div>
  )
}

export default Task