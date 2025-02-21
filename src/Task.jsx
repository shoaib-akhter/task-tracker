import React from "react";

// 'task' will be passed as a prop, for example: { id: 1, text: 'Wash dishes', isDone: false }
function Task({ task }) {
    return (
        <div>
            <p>{task.text}</p>
        </div>
    )
}

export default Task;