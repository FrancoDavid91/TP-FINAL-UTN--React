import React from 'react'
import './TaskItem.css'

const TaskItem = ({id,title, completed, onComplete=()=>{}, onDelete=()=>{}, onEdit=()=>{}}) => {

    const handleDelete = () => {
        onDelete(id)
    }
    const handleCompleted = () => {
        onComplete(id)
    }
    const handleEdit = (id, updatedTitle) => {
        onEdit(id, updatedTitle);
        // Puedes realizar otras acciones después de editar la tarea, si es necesario
      };

    return (
        <div>
            <p style={{ textDecoration: completed ? 'line-through' : 'none' }}>
                <span>{title} </span>
                {/* <span>{completed ?
                    "Completada" :
                    "Pendiente"}</span> */}
            </p>

            <button
                onClick={handleCompleted}
            >✅</button>
            <button
                onClick={handleDelete}
            >❌</button>
            <button
                onClick={handleEdit}
            >✏️</button>

        </div>
    )
}

export default TaskItem