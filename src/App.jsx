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

  // Add a new task to the state
  const addTask = (newTask) => {
    // Create a random id
    const id = Math.floor(Math.random() * 10000) + 1
    // Combine id with newTask
    const taskToAdd = { id, ...newTask }
    // Update the state
    setTasks([...tasks, taskToAdd])
  }

  return (
    <div>
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  )
}

export default App