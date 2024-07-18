import React from "react"
function useLocalStorage(itemName, value) {

  const intialStates = {
    error: false,
    loading: true,
    item: value,
    sincronziedItems: true
  }

  const actionTypes = {
    success: "SUCCESS",
    sincronize: "SINCRONIZE",
    error: "ERROR",
    unsincronize: "UNSINCRONIZE"

  }

  const reducerObject = (state, payload) => ({
    [actionTypes.success]:{
      ...state,
      item: payload,
      loading: false,
    },
    [actionTypes.sincronize]: {
      ...state,
      sincronziedItems: true
    },
    [actionTypes.error]: {
      ...state,
      error: true
    },
    [actionTypes.unsincronize]: {
      ...state,
      loading: true,
      sincronziedItems: false,
    }


  })

  const reducer = (state, action) => {
   if(reducerObject(state)[action.type]) {
     return reducerObject(state, action.payload)[action.type]
   } else {
     return state
   }
  }

  const [state, dispatch] = React.useReducer(reducer, intialStates)
  const {error,loading, item, sincronziedItems}= state

  // action creators
  
  const onSincronize = () => {dispatch({type: actionTypes.sincronize})}
  const onError = () => {dispatch({type: actionTypes.error})}
  const onUnSincronize = () => {dispatch({type: actionTypes.unsincronize})}
  const onSuccess = (items) => {
    dispatch({type: actionTypes.success, payload: items})}

  // end of actions creators 
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(value));
          parsedItem = value;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        onSuccess(parsedItem)

        if(sincronziedItems === false) {
          onSincronize()
        }
       
      } catch(error) {
       onError(error);
      }
    }, 3000);
  },[sincronziedItems]);
  
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      onSuccess(newItem)
    } catch(error) {
      onError(error);
    }
  };

  const sincronizeItems = () => {
     onUnSincronize()
  }

  return {
    item,
    saveItem,
    loading,
    error,
   sincronizeItems,
   sincronziedItems
  };
}

export { useLocalStorage };
