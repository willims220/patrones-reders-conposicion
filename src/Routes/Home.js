import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TodoCounter } from '../UI/TodoCounter';
import { TodoSearch } from '../UI/TodoSearch';
import { TodoList } from '../UI/TodoList';
import { TodoItem } from '../UI/TodoItem';
import { TodosError } from '../UI/TodosError';
import { TodosLoading } from '../UI/TodosLoading';
import { EmptyTodos } from '../UI/EmptyTodos';
import { CreateTodoButton } from '../UI/ChangeStorage/CreateTodoButton';
// import { Modal } from '../UI/Modal';
import Header from "../UI/Header";
import {TodoUse} from "./TodoUse";
import { ChangeStorageWithStorageListener } from '../UI/ChangeStorage/indext';



function HomePage() {
  
  const navigate = useNavigate()

  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    // openModal,
    totalTodos, 
    completedTodos,
    searchValue, 
    setSearchValue,
    // setOpenModal, 
    sincronizeTodos,
    sincronziedItems
  } = TodoUse()


  return (
    <React.Fragment>

      <Header loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos}/>
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
        
      </Header>

    <TodoList
      error={error}
      loading={loading}
      searchedTodos={searchedTodos}
      totalTodos={totalTodos}
      searchText={searchValue}
      sincronziedItems={sincronziedItems}

      //props function
      OnError={() => <TodosError/>}
      OnLoading={() => <TodosLoading/>}
      OnEmpty={() => <EmptyTodos/>}
      OnEmptySearchTodos = {(searchText) => <p>No hubieron resultados con ese busqueda {searchText} </p>}

      // render={ todo =>   <TodoItem
      //   key={todo.text}
      //   text={todo.text}
      //   completed={todo.completed}
      //   onComplete={() => completeTodo(todo.text)}
      //   onDelete={() => deleteTodo(todo.text)}
      // /> }
     >
  
  
    {/* This is a render function  */}
  {
    todo => <TodoItem
    key={todo.id}
    text={todo.text}
    completed={todo.completed}
    onComplete={() => completeTodo(todo.id)}
    onDelete={() => deleteTodo(todo.id)}
    OnEdit={() => {navigate(`/edit/` + todo.id, {state: todo.text})}}
    />
  }

</TodoList> 

      

      {/* {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal}  />
        </Modal>
      )} */}

      <ChangeStorageWithStorageListener sincronize={sincronizeTodos}/>
       
      <CreateTodoButton
        // setOpenModal={setOpenModal} openModal={openModal}
      />
    </React.Fragment>
  );
}

export { HomePage } ;

   