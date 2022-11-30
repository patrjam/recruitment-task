import React, { useContext } from "react";
import "./TodoResults.scss";
import { todosContext } from "../../TodosContext";

export const TodoResults = () => {
  const { todos, setTodos } = useContext(todosContext);

  const calculateChecked = () => {
    let checkedCount = 0;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].checked) {
        checkedCount++;
      }
    }
    return checkedCount;
  };

  return <div className="TodoResults">Done: {calculateChecked()}</div>;
};
