import React from "react";
import "../../styles/TaskItem.css";
//Handlers for the buttons of existing task
const TaskItem = ({
    id,
    title,
    completed,
    onComplete = () => {},
    onDelete = () => {},
    onEdit = () => {},
}) => {
    const handleDelete = () => {
        onDelete(id);
    };
    const handleCompleted = () => {
        onComplete(id);
    };
    const handleEdit = (id, updatedTitle) => {
        onEdit(id, updatedTitle);
    };
    //Rendering the task
    return (
        <div className="container-TaskItem">
        <p style={{ textDecoration: completed ? "line-through" : "none" }}>
            <span>{title} </span>
        </p>

        <button className="btn-config" onClick={handleCompleted}>
            ✅
        </button>
        <button className="btn-config" onClick={handleDelete}>
            ❌
        </button>
        <button className="btn-config" onClick={handleEdit}>
            ✏️
        </button>
        </div>
    );
};

export default TaskItem;
