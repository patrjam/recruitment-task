import { useContext, useState } from 'react';
import { todosContext } from '../../TodosContext';

import './TodoForm.scss';

export const TodoForm = () => {
  const { todos, setTodos } = useContext(todosContext);
  const [task, setTask] = useState('');

  const handleAddTodo = () => {
    // Fin an ability to add new task
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
