import { useState } from "react";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Table from "./components/Table/Table";

function App() {
  const [firstnameValue, setFirstnameValue] = useState("");
  const [secondnameValue, setSecondnameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [students, setStudents] = useState([]);

  // onChangw event functions for every input

  let onFirstnameChange = (event) => {
    setFirstnameValue(event.target.value);
  }

  let onLastnameChange = (event) => {
    setSecondnameValue(event.target.value);
  }

  let onEmailChange = (event) => {
    setEmailValue(event.target.value);
  }

  // add new object in state student array

  let deleteValuesInInputs = () => {
    setFirstnameValue("");
    setSecondnameValue("");
    setEmailValue("");
  }

  let addRow = (rowFirstname, rowLastname, rowEmail) => {
    let newRow = {
      firstname: rowFirstname,
      lastname: rowLastname,
      email: rowEmail,
    }

    let add = students.concat(newRow);
    setStudents(add);

    deleteValuesInInputs();
  }

  // remove row

  let removeRow = (index) => {
    setStudents(students.filter((item) => {
      return students.indexOf(item) !== index;
    }))
  }

  return (
    <div>
      <Header />
      <Form 
        firstnameValue={firstnameValue}
        secondnameValue={secondnameValue}
        emailValue={emailValue}
        onFirstnameChange={onFirstnameChange}
        onLastnameChange={onLastnameChange}
        onEmailChange={onEmailChange}
        addRow={addRow}
      />
      <Table
         students={students}
         removeRow={removeRow}
      />
      <div></div>
    </div>
  )
}

export default App;
