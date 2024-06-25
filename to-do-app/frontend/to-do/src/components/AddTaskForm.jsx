// AddTaskForm.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddTaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title);
    setTitle('');
  };

  

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

// Prop validation using PropTypes
AddTaskForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default AddTaskForm;
