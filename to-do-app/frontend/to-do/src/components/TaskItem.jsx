import React from 'react'

export default function TaskItem({task, onDelete, onUpdate}) {
    const handleDelete = () =>{
        onDelete(task.id);
    };

    const handleUpdate = () => {
        onUpdate(task.id, {complete: !task.complete});
    };

  return (
    <div>
        <input type="checkbox" checked={task.complete} onChange ={handleUpdate} />
        <span style={{textDecoration: task.complete ? 'line-through' : 'none'}}>
            {task.title}
        </span>
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}
