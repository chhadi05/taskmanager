import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import TaskList from './components/TaskList';
import CreateTask from './components/CreateTask';
import UpdateTask from './components/UpdateTask';


function App() {
  const [tasks, setTasks] = useState([]);

  // Simulate fetching tasks from an API
  useEffect(() => {
    // Mock API
    setTasks([
      { id: 1, title: 'Task 1', status: 'pending' },
      { id: 2, title: 'Task 2', status: 'in-progress' },
      { id: 3, title: 'Task 3', status: 'completed' },
    ]);
  }, []);

  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>Task Manager</h1>
          <nav>
            <Link to="/">Dashboard</Link>
            <Link to="/tasks">Task List</Link>
            <Link to="/tasks/new">Create Task</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<HomePage tasks={tasks} />} />
          <Route path="/tasks" element={<TaskList tasks={tasks} />} />
          <Route path="/tasks/new" element={<CreateTask setTasks={setTasks} />} />
          <Route path="/tasks/:id/edit" element={<UpdateTask tasks={tasks} setTasks={setTasks} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
