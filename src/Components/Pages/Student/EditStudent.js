import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SELECT_STD, UPDATE_STD } from "../../../api/api";
import axios from "axios";
import FormStudent from "../../Input/FormStudent";
import { StudentContext } from "../../StudentStorage";

const EditStudent = () => {
  const { id } = useParams();
  const [stdData, setStdData] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [birthday, setBirthday] = React.useState("");
  const [grade, setGrade] = React.useState("");
  const [contractNumber, setContractNumber] = React.useState("");
  const [situation, setSituation] = React.useState("");
  const [datePayment, setDatePayment] = React.useState();
  const [registrationDate, setRegistrationDate] = React.useState("");
  const [dateExpiresContract, setDateExpiresContract] = React.useState("");
  const { updateStudent } = React.useContext(StudentContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    const selectStudent = async () => {
      try {
        const { url, options } = SELECT_STD(id);
        const response = await axios(url, options);
        response && setStdData(response.data.data[0]);
        setName(stdData.name);
        setEmail(stdData.email);
        setPhone(stdData.phone);
        setAddress(stdData.address);
        setAddress(stdData.address);
        setPhone(stdData.phone);
        setGrade(stdData.grade);
        setEmail(stdData.email);
        setRegistrationDate(stdData.registrationDate);
        setDateExpiresContract(stdData.dateExpiresContract);
        setSituation(stdData.situation);
        setDatePayment(stdData.datePayment);
        setBirthday(stdData.birthday);
        setContractNumber(stdData.contractNumber);
        console.log(response.data.data[0]);
      } catch (response) {
        console.log(response.error);
      }
    };
    selectStudent();
  }, [
    stdData.name,
    stdData.address,
    stdData.email,
    stdData.phone,
    stdData.email,
    stdData.birthday,
    stdData.situation,
    stdData.grade,
    stdData.dateExpiresContract,
    stdData.datePayment,
    stdData.registrationDate,
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
  formData.append("registration_date", registrationDate);
  formData.append("date_expires_contract", dateExpiresContract);
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
      />
    </div>
  );
};
export default EditStudent;
