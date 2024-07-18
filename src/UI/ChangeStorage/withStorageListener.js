import React from "react";

function withStorageListener(WrappedComponet) {
 
  return function WrappedComponetWithStorageListener (props) {
    const [changeStorage, setChangeStorage] = React.useState(false)
    
    
    window.addEventListener("storage", (change) => {
      if(change.key === "TODOS_V1") {
        setChangeStorage(true)
      }

    })

    const toggleShow= () => {
        props.sincronize()
        setChangeStorage(false)
      }

    return (
        <WrappedComponet
        show={changeStorage}
        toggleShow={toggleShow}
         
        />


    )
  }
    
  
}

export {withStorageListener}