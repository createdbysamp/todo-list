import React from "react";
import trash from '../assets/trash.svg'

function TodoCard({ task, onToggle, onDelete }) {
  return (
    <div className="card mb-3 container">
      <div className="card-body">
        <p
          className={`card-text ${
            task.completed ? "text-decoration-line-through text-muted" : ""
          }`}
          onClick={() => onToggle(task.id)}
          style={{ cursor: "pointer" }}
        >
          {task.text}
        </p>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id={`task#${task.id}`}
            checked={task.completed}
            onChange={() => onToggle(task.id)}
          />
          <label className="form-check-label" htmlFor={`task#{task.id}`}>
            Mark as Complete
          </label>
        </div>
        <button
          className="btn btn-danger btn-sm mt-2"
          onClick={() => onDelete(task.id)}
        >
        <img src={trash} alt="Trash Icon" />
        </button>
      </div>
    </div>
  );
}

export default TodoCard;
