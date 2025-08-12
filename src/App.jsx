import { useState } from "react";
import TodoForm from "./component/TodoForm";
import TodoCard from "./component/TodoCard";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <TodoForm />
      <div>
        <TodoCard />
      </div>
    </>
  );
}

export default App;
