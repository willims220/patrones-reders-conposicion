import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './Home';
import { EditePage } from './Edit';
import { NewTodoPage } from './new';




function App() {

  


  return (
    <HashRouter>
      <Routes>
         <Route path="/" element={<HomePage/>}/>
         <Route path="/edit/:id" element={<EditePage/>}/>
         <Route path="/new" element={<NewTodoPage/>}/>
         <></>
      </Routes>
    </HashRouter>
  );
}

export default App;

   