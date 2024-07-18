import React from 'react';
import './CreateTodoButton.css';
import { useNavigate } from 'react-router-dom';

function CreateTodoButton(props) {
  const navigate = useNavigate()

  return (
    <button
      className="CreateTodoButton"
      onClick={() => {navigate("/new")}}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
