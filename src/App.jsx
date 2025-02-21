import { useState } from 'react'
import './App.css'
import Header from './Header'
import Task from './Task'

function App() {
  // Define our tasks in state
  const [tasks, setTasks] = useState([
    {id: 1, text: 'Wash Clothes', isDone: false},
    {id: 2, text: 'Do Homework', isDone: false},
    {id: 3, text: 'Cook Dinner', isDone: false},
  ])

  return (
      <div>
        <Header />
        {/* Map over tasks to render a <Task> for each */}
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
  )
}

export default App
