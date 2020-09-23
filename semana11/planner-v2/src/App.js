import React from 'react';
import './App.css';
import NewTaskContainer from './components/NewTaskContainer'
import TaskListContainer from './components/TaskListsContainer'

function App() {
  return (
    <div className="App">
        <NewTaskContainer/>
        <TaskListContainer/>
    </div>
  );
}

export default App;
