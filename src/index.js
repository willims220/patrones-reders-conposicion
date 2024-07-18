import React from 'react';
import ReactDOM from 'react-dom';
import App from './Routes';
import './index.css';

// function App (props) {
//     return (
//         <div>{props.saludo} {props.nombre}</div>
//     )
// }


// function AppWithSaludo  (saludo) {
// // you can put your own logic

// return function wrappedComponentWithSaludo (WrappedComponent) {
//     return function componenteDeVerdad (props) {
//         return (
//         <>
//             <WrappedComponent {...props} saludo={saludo}/>
//         </>
        
//         )
       
//     }
// }
// }

// const SaludoWithHey = AppWithSaludo("Hey")(App)

// const WithSaludo = AppWithSaludo("Hola")(App)

ReactDOM.render(

 <App/>,document.getElementById('root') 


); 
