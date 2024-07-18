import React from 'react';
import './TodoList.css'

function TodoList(props) {
  const render = props.render || props.children
  return (
    <section>
    
    {props.error && props.OnError()}
    {props.loading && props.OnLoading()}
    {(!props.loading && props.totalTodos === 0) && props.OnEmpty()}
    {(!!props.totalTodos && !props.loading && !props.searchedTodos.length) && props.OnEmptySearchTodos(props.searchText)}
  
    {/* {props.searchedTodos.map(todo => props.render(todo))} */}

      <ul>
        {props.sincronziedItems && props.searchedTodos.map(todo => render(todo))}
      </ul>
    </section>
  );
}

export { TodoList };
