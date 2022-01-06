import React, { useContext } from "react";

import FormStudent from "../../Input/FormStudent";
import { StudentContext } from "../../StudentStorage";

const AddStudent = () => {
  const [name, setName] = React.useState();
  const [phone, setPhone] = React.useState();
  const [email, setEmail] = React.useState();
  const [address, setAddress] = React.useState();
  const [birthday, setBirthday] = React.useState();
  const [grade, setGrade] = React.useState();
  const [contractNumber, setContractNumber] = React.useState();
  const [situation, setSituation] = React.useState();
  const [datePayment, setDatePayment] = React.useState();
  const [dayStudent, setDayStudent] = React.useState([]);

  const { addStudent } = useContext(StudentContext);

  const formData = new FormData();
  formData.append("name", name);
  formData.append("phone", phone);
  formData.append("email", email);
  formData.append("address", address);
  formData.append("birthday", birthday);
  formData.append("grade", grade);
  formData.append("contract_number", contractNumber);
  formData.append("day_student", dayStudent);
  formData.append("date_payment", datePayment);
  formData.append("situation", situation);

  function handleSubmit(event) {
    event.preventDefault();
    addStudent(formData);
  }

  const hours = [
    "08h:00min as 09h:00min",
    "09h:00min as 10h:00min",
    "10h:00min as 11h:30min",
    "13h:30min as 15h:00min",
    "15h:00min as 16h:00min",
    "16h:00min as 17h:30min",
  ];
  const days = ["seg ", "ter ", "qua ", "qui ", "sex "];
  const valueAdd = days.map((item) => hours.map((itemH) => item + itemH));

  const handleChange = (e) => {
    if (e.target.checked) {
      setDayStudent((dayStudent) => [...dayStudent, e.target.value]);
    } else {
      // remove from list
      setDayStudent(dayStudent.filter((people) => people !== e.target.value));
    }
  };

  return (
    <div>
      <FormStudent
        valueName={name || ""}
        valueAddress={address || ""}
        valueBirthday={birthday || ""}
        valueEmail={email}
        valuePhone={phone}
        valueGrade={grade}
        valueContractNumber={contractNumber}
        valueDayStudent={dayStudent}
        valueDatePayment={datePayment}
        valueSituation={situation}
        setName={setName}
        setAddress={setAddress}
        setContractNumber={setContractNumber}
        setBirthday={setBirthday}
        setSituation={setSituation}
        setDayStudent={setDayStudent}
        setDatePayment={setDatePayment}
        setEmail={setEmail}
        setGrade={setGrade}
        setPhone={setPhone}
        onSubmit={handleSubmit}
        onChange={handleChange}
        required={true}
        valueAdd={valueAdd}
      />
    </div>
  );
};

export default AddStudent;
