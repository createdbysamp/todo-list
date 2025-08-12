import React from "react";
import { useState } from "react";

// actual function
function TodoForm({ onAddTask }) {
  // blank task
  const blankTask = {
    text: "",
    completed: false,
  };

  //useStates
  const [task, setTask] = useState(blankTask);
  const [errors, setErrors] = useState({ text: "" });

  //handleChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  //validation
  const validateFields = (name, value) => {
    let message = "";

    switch (name) {
      case "text":
        if (value.trim().length === 0) {
          message = "description is required";
        } else if (value.trim().length < 2) {
          message = "description must be longer";
        }
        break;
      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: message }));
    return message === "";
  };

  //handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    const { text } = task;
    const isTextValid = validateFields("text", text);

    if (isTextValid) {
      onAddTask(task);
      setTask(blankTask);
      setErrors({ text: "" });
    }
  };

  return (
    <div className="card-body m-3">
      <form id="todo-form" onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={task.text}
            name="text"
            id="todo-input"
            placeholder="Add a new task..."
            aria-label="New task"
            aria-describedby="add-button"
            onChange={handleChange}
          />
          <button className="btn btn-primary" type="submit" id="add-button">
            Add Task
          </button>
        </div>
        {errors.text && (
          <div className="text-danger small"> {errors.text} </div>
        )}
      </form>
    </div>
  );
}

export default TodoForm;
