import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateTask = ({ setTasks }) => {
  const [task, setTask] = useState({ title: '', status: 'pending' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { id: Date.now(), ...task };
    setTasks(prevTasks => [...prevTasks, newTask]);
    navigate('/tasks');
  };

  return (
    <div className="create-task">
      <h2>Create New Task</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Task Title" 
          value={task.title} 
          onChange={(e) => setTask({ ...task, title: e.target.value })} 
        />
        <select 
          value={task.status} 
          onChange={(e) => setTask({ ...task, status: e.target.value })}
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In-Progress</option>
          <option value="completed">Completed</option>
        </select>
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
};

export default CreateTask;
