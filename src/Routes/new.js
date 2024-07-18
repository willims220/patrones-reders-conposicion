import React from "react";
import { TodoForm } from "../UI/TodoForm";
import { TodoUse } from "./TodoUse";
function NewTodoPage () {

    const { addTodo } = TodoUse()

    return  (
        <TodoForm
        title={"Crea Tu Nuevo Todo"}
        button={"Add"}
        submitteEvent={(text) => {addTodo(text)}}
        />
    )
}

export {NewTodoPage}