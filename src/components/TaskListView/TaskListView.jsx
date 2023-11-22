import { useState, useEffect } from 'react';
import TaskForm from '../TaskForm/TaskForm';
import TaskList from '../TaskList/TaskList';
import TaskItem from '../TaskItem/TaskItem';
import '../../styles/TaskListView.css'

export const TaskListView = () => {
  const [task, setTask] = useState([]); //useState for actual tasks
  const [editingTaskId, setEditingTaskId] = useState(null); //useState for edit task
  const [newTitle, setNewTitle] = useState('');
  
  const generateUniqueID = () => {//generates an unique ID for every task
    return '_' + Math.random().toString(36);
  };
  
  useEffect(() => {//Here we interact to find if data persists within localStorage 
    try {
      const storedTasks = localStorage.getItem('tasks');
      if (storedTasks) {
        setTask(JSON.parse(storedTasks));
      }
    } catch (error) {
      
      console.error('Error accessing local storage:', error);
    }
  }, []);


  useEffect(() => {//With this hook we save data in localStorage
    if(task.length > 0) {localStorage.setItem('tasks', JSON.stringify(task))}
  }, [task]);

//-----------------------------------------------------------------------
//Set of functions for create, modify,check and delete.
  const createTask = (title) => ({
    id: generateUniqueID(),
    title: title,
    completed: false,
  });

  const addTask = (form) => {
    const newTask = createTask(form.title);
    setTask([...task, newTask]);
  };

  const completeTask = (id) => {
    const newTaskList = task.map((taskNew) =>
      taskNew.id === id ? { ...taskNew, completed: !taskNew.completed } : taskNew
    );
    setTask(newTaskList);
  };

  const deleteTask = (id) => {
    const newTask = task.filter((task) => task.id !== id);
    setTask(newTask);
  };

  const startEditingTask = (id, title) => {
    setEditingTaskId(id);
    setNewTitle(title);
  };

  const finishEditingTask = (id) => {
    const updatedTaskList = task.map((taskNew) =>
      taskNew.id === id ? { ...taskNew, title: newTitle } : taskNew
    );
    setTask(updatedTaskList);
    setEditingTaskId(null);
  };
//-----------------------------------------------------------------------
//Definition of View Component 
  return (
    <main>
      <div className='container-view'>
        <TaskForm
          onSubmitted={(form) => {
            addTask(form);
          }}
        />
        <TaskList
          task={task}
          renderTask={(task) => (
            <div key={task.id}>
              <TaskItem
                title={task.title}
                completed={task.completed}
                onComplete={() => completeTask(task.id)}
                onDelete={() => deleteTask(task.id)}
                onEdit={() => startEditingTask(task.id, task.title)}
              />
              {editingTaskId === task.id && (
                <div className='container-edit'>
                  <input
                    className='inputForm inputSave'
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                  />
                  <button className='btn-config' onClick={() => finishEditingTask(task.id)}>💾</button>
                </div>
              )}
            </div>
          )}
        />
      </div>
    </main>

  );
};
