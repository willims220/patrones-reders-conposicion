import React from 'react';
import {useLocalStorage} from "./useLocalStorage";


function TodoUse() {
  const {
    item: todos,
    saveItem: saveTodos,
    sincronizeItems: sincronizeTodos,
    loading,
    error,
    sincronziedItems,
  } = useLocalStorage('TODOS_V2', []);

  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const addTodo = (text) => {
    
    const id = NewIDTodo(todos)
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
      id
    });
    saveTodos(newTodos);
  };

  const gettodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    return todos[todoIndex]
  }

  const completeTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.text === id);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const EditTodo = (id, NewText) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].text = NewText;
    saveTodos(newTodos);
  };

  const NewIDTodo = (todoList) => {
    if (todoList.length === 0) {
      return 1;
    }

    const listIDS = todoList.map(todo => todo.id)
    let MaxNumber = Math.max(...listIDS)
    return MaxNumber + 1;
  }
  
  return (
     {
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      addTodo,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      sincronizeTodos,
      sincronziedItems,
      EditTodo,
      gettodo
    }
   
  );
}

export  {TodoUse}
