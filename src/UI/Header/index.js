import React from "react";

function Header ({children, loading}) {
  return (  
    <>
       {React.Children.toArray(children).map(child => React.cloneElement(child,{loading}))}
    </>
  )
}

export default Header