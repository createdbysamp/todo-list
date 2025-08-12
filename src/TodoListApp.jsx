import { useState } from "react";
import TodoForm from "./component/TodoForm";
import TodoCard from "./component/TodoCard";

function TodoListApp() {
  const [todos, setTodos] = useState([]);
  const [taskId, setTaskId] = useState(0);
  const [hideCompleted, setHideCompleted] = useState(false);

  // determine which list to display based on state
  const displayedTasks = hideCompleted ? todos.filter((task) => task.completed === false) : todos

  // add a task function
  const addTask = (newTask) => {
    const taskWithId = {
      ...newTask,
      id: taskId,
    };
    setTodos((prev) => [...prev, taskWithId]);
    setTaskId((prev) => prev + 1);
  };

  // checkbox toggleTask
  const toggleTask = (id) => {
    console.log("Togggggling task:", id);
    setTodos((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // deleteTask function
  const deleteTask = (id) => {
    console.log("Deletinggg task:", id);
    setTodos((prev) => prev.filter((task) => task.id !== id));
  };

  // html return
  return (
    <>
      <h1 className="display-4">My Tasks</h1>

      <button
        onClick={() => setHideCompleted(!hideCompleted)}
        className="btn btn-primary m-2 mb-0"
      >
        {hideCompleted ? "Show All" : "Hide Completed"}
      </button>
      <TodoForm onAddTask={addTask} />
      {todos.length === 0 ? (
        <p className="m-3 container">No tasks yet, add one above!</p>
      ) : (
        displayedTasks.map((task) => (
          <TodoCard
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))
      )}
    </>
  );
}

export default TodoListApp;
