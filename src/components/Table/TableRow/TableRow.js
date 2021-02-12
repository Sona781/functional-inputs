import React, { useState } from "react";
import s from "./../Table.module.scss";
import Email from "./Email/Email";
import Firstname from "./Firstname/Firstname";
import Lastname from "./Lastname/Lastname";

const TableRow = (props) => {
    const [editMode, setEditMode] = useState(false);

    let activateEditMode = (event) => {
        setEditMode(true);
    }

    let deactivateEditMode = (event) => {
        setEditMode(false);
    }

    let removeRowFromTable = () => {
        props.removeRow(props.index);
    }

    return (
        <tr>
        <Firstname
          firstname={props.firstname}
          editMode={editMode}
        />
        <Lastname
          lastname={props.lastname}
          editMode={editMode}
        />
        <Email email={props.email} editMode={editMode} />
        <button onClick={removeRowFromTable} className={s.removeBtn}>
          Remove
        </button>
        {/* if edit mode is false */}
        {!editMode ? (
          <button
            className={(s.editButton, s.removeBtn)}
            onClick={activateEditMode}
          >
            Edit
          </button>
        ) : (
          ""
        )}

        {/* if edit mode is true */}
        {editMode ? (
          <button
            className={s.removeBtn}
            onClick={deactivateEditMode}
          >
            Save
          </button>
        ) : (
          ""
        )}
      </tr>
    )
}

export default TableRow;