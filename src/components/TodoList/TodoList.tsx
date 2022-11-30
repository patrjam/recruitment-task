import React from "react";
import { useContext } from "react";
import { todosContext } from "../../TodosContext";
import Checkbox from "../Checkbox/Checkbox";
import "./TodoList.scss";

export type TodoList = {
  id: number;
  label: string;
  checked: boolean;
};

export const TodoList = () => {
  const { todos, setTodos } = useContext(todosContext);

  const handleDelete = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleCheck = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    return setTodos(updatedTodos);
  };

  const handleKeyUp = (e, id) => {
    if (e.keyCode === 13) {
      toggleCheck(id);
    }
  };

  return (
    <div className="TodoList">
      <span className="TodoList__title">Things to do:</span>
      {todos.length ? (
        <div className="TodoList__content">
          {todos.map((todoItem) => (
            <Checkbox
              key={todoItem.id}
              label={todoItem.label}
              checked={todoItem.checked}
              onClick={() => toggleCheck(todoItem.id)}
              onKeyUp={(e) => handleKeyUp(e, todoItem.id)}
              onDelete={() => handleDelete(todoItem.id)}
            />
          ))}
        </div>
      ) : (
        <div className="TodoList__noTodos">
          Looks like you&apos;re absolutely free today!
        </div>
      )}
    </div>
  );
};
