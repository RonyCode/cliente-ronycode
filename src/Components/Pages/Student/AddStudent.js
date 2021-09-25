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
  const [registrationDate, setRegistrationDate] = React.useState();
  const [dateExpiresContract, setDateExpiresContract] = React.useState();
  const { addStudent } = useContext(StudentContext);

  const formData = new FormData();
  formData.append("name", name);
  formData.append("phone", phone);
  formData.append("email", email);
  formData.append("address", address);
  formData.append("birthday", birthday);
  formData.append("grade", grade);
  formData.append("contract_number", contractNumber);
  formData.append("registration_date", registrationDate);
  formData.append("date_expires_contract", dateExpiresContract);
  formData.append("date_payment", datePayment);
  formData.append("situation", situation);

  function handleSubmit(event) {
    event.preventDefault();
    addStudent(formData);
  }

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
        valueDateExpiresContract={dateExpiresContract}
        valueDatePayment={datePayment}
        valueRegistrationDate={registrationDate}
        valueSituation={situation}
        setName={setName}
        setAddress={setAddress}
        setContractNumber={setContractNumber}
        setBirthday={setBirthday}
        setSituation={setSituation}
        setDateExpiresContract={setDateExpiresContract}
        setDatePayment={setDatePayment}
        setEmail={setEmail}
        setGrade={setGrade}
        setPhone={setPhone}
        setRegistrationDate={setRegistrationDate}
        onSubmit={handleSubmit}
        required={true}
      />
    </div>
  );
};

export default AddStudent;
