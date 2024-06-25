import React, { useState } from 'react'
import AddTaskForm from './components/AddTaskForm'
import TaskList from './components/TaskList'

const App = () => {
  const [tasks, setTasks] = useState([]);
  const addTask = (newTask) => {
    // Update the tasks state with the new task
    setTasks([...tasks, newTask]);
  };
  return (
    <div>
      <h1>Task Manager</h1>
      <AddTaskForm onAdd={addTask}/>
      <TaskList tasks={tasks}/>

    </div>
  )
}

export default App