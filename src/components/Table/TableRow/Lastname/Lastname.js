import React, { useState } from 'react';

const Lastname = (props) => {
    const [tableLastnameValue, setTableLastnameValue] = useState(props.lastname)

    let tableLastnameChange = (event) => {
        setTableLastnameValue(event.target.value)
    }

    return (
        <td>
        {!props.editMode ? (
          tableLastnameValue
        ) : (
          <input
            onChange={tableLastnameChange}
            value={tableLastnameValue}
          />
        )}
      </td>
    )
}

export default Lastname;