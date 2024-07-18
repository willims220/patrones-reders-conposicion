import React from 'react';
import './TodoForm.css';
import { useNavigate } from 'react-router-dom';

function TodoForm({title, button, submitteEvent, DefaultTodoText}) {
  const [newTodoValue, setNewTodoValue] = React.useState(DefaultTodoText || "");
  const navigate =  useNavigate()
  
  
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
   navigate("/")
  };
  const onSubmit = (event) => {
    event.preventDefault();
    submitteEvent(newTodoValue)
    navigate("/")
    
  };

  return (
    <form onSubmit={onSubmit}>
      <label>{title}</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar la cebolla para el almuerzo"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
          >
          Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
         {button}
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
