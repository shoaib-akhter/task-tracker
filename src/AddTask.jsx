import React, { useState } from "react";

function AddTask({ onAdd }) {
    /* 
    We'll store the input text in local state.
    When the form is submitted, we'll call onAdd with the new task data.
    */
   const [text, setText] = useState('')

   const onSubmit = (e) => {
    e.preventDefault()
    // Validate input
    if (!text) {
        alert('Please add a task!')
        return
    }

    // onAdd call back from parent
    onAdd({ text, isDone: false })

    // Clear the input
    setText('')
   }

   return (
    <form onSubmit={onSubmit}>
        <div>
            <label htmlFor="taskText">Task: </label>
            <input
                id="taskText"
            type="text"
            placeholder="Add new task..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            />
        </div>
        <input type="submit" value="Save Task" />
    </form>
   )
}

export default AddTask;