import React from "react";
import { withStorageListener } from "./withStorageListener";
import './style.css'

function ChangeStorage ({show, toggleShow}) {
  if(show) {
    return (
     <div className="ChangeAlert-bg">
       <div className="ChangeAlert-container">
          <p> There were some changes made in your TODOS in another window</p>
          <p> Do you want to sincronize the changes ?</p>
          <button className="TodoForm-buttom TodoForm-buttom--add" onClick={() => {
        toggleShow()
       }}>Yes</button>
       </div>
          
    </div>
    )
  } else {
    return null;
  }
}

const ChangeStorageWithStorageListener = withStorageListener(ChangeStorage)

export {ChangeStorageWithStorageListener}