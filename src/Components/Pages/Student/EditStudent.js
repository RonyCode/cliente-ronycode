import React from "react";
import { useParams } from "react-router-dom";

import FormStudent from "../../Input/FormStudent";
import { StudentContext } from "../../StudentStorage";

const EditStudent = () => {
  const { id } = useParams();
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [birthday, setBirthday] = React.useState("");
  const [grade, setGrade] = React.useState("");
  const [contractNumber, setContractNumber] = React.useState("");
  const [situation, setSituation] = React.useState("");
  const [datePayment, setDatePayment] = React.useState();
  const [dayStudent, setDayStudent] = React.useState("");
  const { updateStudent, selectStudent, stdData } =
    React.useContext(StudentContext);

  React.useEffect(() => {
    selectStudent(id);
    setName(stdData.name);
    setEmail(stdData.email);
    setPhone(stdData.phone);
    setAddress(stdData.address);
    setPhone(stdData.phone);
    setGrade(stdData.grade);
    setBirthday(stdData.birthday);
    setDayStudent(stdData.dayStudent);
    setSituation(stdData.situation);
    setDatePayment(stdData.datePayment);
    setContractNumber(stdData.contractNumber);
  }, [
    stdData.name,
    stdData.phone,
    stdData.email,
    stdData.address,
    stdData.grade,
    stdData.birthday,
    stdData.situation,
    stdData.dayStudent,
    stdData.datePayment,
    stdData.contractNumber,
  ]);

  const formData = new FormData();
  formData.append("id", id);
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
    updateStudent(formData);
  }

  return (
    <div>
      <FormStudent
        id={id}
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
        selectPatern={true}
      />
    </div>
  );
};
export default EditStudent;
