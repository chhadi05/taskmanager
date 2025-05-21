import React from 'react';

const HomePage = ({ tasks }) => {
  const pendingTasks = tasks.filter(task => task.status === 'pending').length;
  const inProgressTasks = tasks.filter(task => task.status === 'in-progress').length;
  const completedTasks = tasks.filter(task => task.status === 'completed').length;

  return (
    <div className="home-page">
      <h2>Dashboard</h2>
      <div className="status-cards">
        <div className="card">
          <h3>Pending Tasks</h3>
          <p>{pendingTasks} tasks</p>
        </div>
        <div className="card">
          <h3>In-Progress Tasks</h3>
          <p>{inProgressTasks} tasks</p>
        </div>
        <div className="card">
          <h3>Completed Tasks</h3>
          <p>{completedTasks} tasks</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;