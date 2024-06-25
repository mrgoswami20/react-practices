import React from 'react'

export default function UpdateTaskForm({task, onUpdate}) {
    const [title, setTitle] = useState(task.title);
    const [complete, setCompleted] = useState(task.complete);

    const handleSubmit = (e) =>{
        e.preventDefault();
        onUpdate({...task, title, complete});
    };

  return (
    <form onSubmit={handleSubmit}>
        <input type="text"
        value={title}
        onChange={e => setTitle(e.target.value)} 
        />
        <input type="checkbox"
        checked={complete} 
        onChange={e => setCompleted(e.target.check)}
        />
        <button type='submit'>Update</button>
    </form>
  )
}
