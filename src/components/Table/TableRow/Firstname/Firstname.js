import React, { useState } from 'react';

const Firstname = (props) => {
    const [tableFirstnameValue, setTableFirstnameValue] = useState(props.firstname);

    let tableFirstnameChange = (event) => {
        setTableFirstnameValue(event.target.value);
    }

    return (
        <td>
        {!props.editMode ? (
          tableFirstnameValue
        ) : (
          <input
            onChange={tableFirstnameChange}
            value={tableFirstnameValue}
            autoFocus={true}
          />
        )}
      </td>
    )
}

export default Firstname;