import './Checkbox.scss';

const Checkbox = ({onClick, checked, onDelete, label, onKeyUp}) => (
  <div className="Checkbox">
    <div
      tabIndex={0}
      role="checkbox"
      aria-checked
      className="Checkbox__content"
      onClick={onClick}
      onKeyUp={onKeyUp}
    >
      <input tabIndex={-1} type="checkbox" checked={checked} onChange={onClick} />
      <span className={checked ? 'Checkbox__checked' : ''}>{label}</span>
    </div>
    <button type="button" className="Checkbox__delete" onClick={onDelete}>
      x
    </button>
  </div>
);

export default Checkbox;
