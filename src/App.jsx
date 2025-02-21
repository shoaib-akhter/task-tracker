// App.jsx
import { useState } from 'react'
import './App.css'
import Header from './Header'
import Task from './Task'
import AddTask from './AddTask'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Wash dishes', isDone: false },
    { id: 2, text: 'Study React', isDone: false },
    { id: 3, text: 'Buy groceries', isDone: true },
  ])

  const addTask = (newTask) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const taskToAdd = { id, ...newTask }
    setTasks([...tasks, taskToAdd])
  }

  // Delete a task
  const deleteTask = (id) => {
    // Filter out the task that matches the id
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div>
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={deleteTask}
        />
      ))}
    </div>
  )
}

export default App