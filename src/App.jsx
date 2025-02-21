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

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle task's done state
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    )
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
          onToggle={toggleTask}
        />
      ))}
    </div>
  )
}

export default App
