import React, { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import axios from "axios";

export default function TaskList({ onDelete, onUpdate }) {
  const [tasksData, setTasksData] = useState([]); // Change the state variable name to avoid conflict
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch tasks when component mounts
    axios
      .get("/api/tasks")
      .then((response) => {
        setTasksData(response.data);
        setLoading(false); // Set loading to false once tasks are fetched
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
        setError(error.message); // Set error message
        setLoading(false); // Set loading to false in case of error
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display loading indicator while tasks are being fetched
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message if there's an error
  }

  if (!tasksData || tasksData.length === 0) {
    return <div>No tasks available</div>;
  }

  return (
    <div>
      <h2>Tasks</h2>
      {tasksData.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}
