import React from "react";
import { useLocation, useParams } from 'react-router-dom';
import { TodoForm } from "../UI/TodoForm";
import { TodoUse } from "../Routes/TodoUse"
function EditePage () {
    const params = useParams()
    const location = useLocation()

    const {EditTodo, gettodo,loading} = TodoUse()
    const id = Number(params.id)
    const state = location.state
    let todotext;
    
    if(state) {
       todotext = state
    }

    else if(loading) {
        return (<p>Loading</p>)

    } else {
       const todo = gettodo(id)
       todotext = todo.text
  }

  return  (
    <TodoForm
    title={"Edita Tu Todo"}
    DefaultTodoText = {todotext}
    button={"editar"}
    submitteEvent= {(newText) =>{EditTodo(id,newText)}}
    />
) 
   
}

export {EditePage}