import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateTask = ({ tasks, setTasks }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({ title: '', status: '' });

  useEffect(() => {
    const currentTask = tasks.find(task => task.id === parseInt(id));
    if (currentTask) setTask(currentTask);
  }, [id, tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTasks = tasks.map(t => t.id === parseInt(id) ? task : t);
    setTasks(updatedTasks);
    navigate('/tasks');
  };

  return (
    <div className="update-task">
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
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
          <option value="new">New</option>
        </select>
        <button type="submit">Update Task</button>
      </form>
    </div>
  );
};

export default UpdateTask;
