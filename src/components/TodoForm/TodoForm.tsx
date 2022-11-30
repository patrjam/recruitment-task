import React from "react";
import { useContext, useState } from "react";
import { todosContext } from "../../TodosContext";

import "./TodoForm.scss";

export const TodoForm = () => {
  const { todos, setTodos } = useContext(todosContext);
  const [task, setTask] = useState("");

  const handleAddTodo = () => {
    const allIds = todos.map((todoItem) => todoItem.id);
    const highestId = Math.max(...allIds);
    const updatedTodos = [
      ...todos,
      { id: highestId + 1, label: task, checked: false },
    ];
    setTodos(updatedTodos);
    setTask("");
    console.log(updatedTodos);
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <div className="TodoForm">
      <input
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button type="button" onClick={handleAddTodo}>
        Add task
      </button>
    </div>
  );
};
