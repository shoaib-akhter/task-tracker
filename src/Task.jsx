// Task.jsx
import React from 'react'

function Task({ task, onDelete, onToggle }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}>
      <p
        onClick={() => onToggle(task.id)}
        style={{
          textDecoration: task.isDone ? 'line-through' : 'none',
          cursor: 'pointer',
          flexGrow: 1 // This allows the text to take up remaining space
        }}
      >
        {task.text}
      </p>
      <button
        onClick={() => onDelete(task.id)}
        style={{ backgroundColor: 'red', color: 'white' }}
      >
        X
      </button>
    </div>
  )
}

export default Task