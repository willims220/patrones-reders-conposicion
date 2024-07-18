import React from 'react';
import { TodoIcon } from './';

function EditComponent({ OnEdit,  }) {
  
  return (
    <TodoIcon
      type="edit"
      onClick={OnEdit}
      color={"white"}

    />
  );
}

export { EditComponent };

