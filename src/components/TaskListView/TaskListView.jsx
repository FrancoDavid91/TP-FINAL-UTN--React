import { useState } from 'react';
import TaskForm from '../TaskForm/TaskForm';
import TaskList from '../TaskList/TaskList';
import TaskItem from '../TaskItem/TaskItem';

export const TaskListView = () => {
    const [task, setTask] = useState([]);
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [newTitle, setNewTitle] = useState(''); // Nuevo estado para manejar el valor del input
  
    const createTask = (title) => ({
      id: window.crypto.randomUUID(),
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
      setNewTitle(title); // Establecer el valor del input al título actual
    };
  
    const finishEditingTask = (id) => {
      const updatedTaskList = task.map((taskNew) =>
        taskNew.id === id ? { ...taskNew, title: newTitle } : taskNew
      );
      setTask(updatedTaskList);
      setEditingTaskId(null);
    };
  
    return (
      <div>
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
                <div>
                  <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                  />
                  <button onClick={() => finishEditingTask(task.id)}>Guardar</button>
                </div>
              )}
            </div>
          )}
        />
      </div>
    );
  };
  