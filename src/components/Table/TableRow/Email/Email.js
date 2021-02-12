import React, { useState } from 'react';

const Email = (props) => {
    const [tableEmailValue, setTableEmailValue] = useState(props.email);

    let tableEmailChange  = (event) => {
        setTableEmailValue(event.target.value);
    }

    return (
        <td>
        {!props.editMode ? (
          tableEmailValue
        ) : (
          <input 
          onChange={tableEmailChange}
          value={tableEmailValue} 
          />
        )}
      </td> 
    )
}

export default Email;