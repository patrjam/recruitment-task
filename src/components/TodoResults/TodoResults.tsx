import './TodoResults.scss';

export const TodoResults = () => {
  const calculateChecked = () => {
    // Fix an ability to calculate completed tasks
    return 0;
  };

  return (
    <div className="TodoResults">
      Done: {calculateChecked()}
    </div>
  );
};
