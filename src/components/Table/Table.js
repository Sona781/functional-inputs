import { render } from '@testing-library/react';
import React from 'react';
import s from './Table.module.scss';
import TableRow from './TableRow/TableRow';

const Table = (props) => {
    return (
        <table className={s.table}>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Email</th>
        </tr>
        {/* mapping new tablerow everytime state student is updating */}
        {props.students.map((item, index) => {
        return (<TableRow
            firstname={item.firstname}
            lastname={item.lastname}
            email={item.email}
            removeRow={props.removeRow}
            key={item.id}
            index={index}
          />)
        })}
      </table>
    )
}

export default Table;