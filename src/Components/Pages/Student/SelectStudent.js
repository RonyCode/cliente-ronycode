import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import styles from "./SelectStudent.module.css";
import FormStudent from "../../Input/FormStudent";
import { StudentContext } from "../../StudentStorage";

const SelectStudent = () => {
  const { id } = useParams();
  const [stdData, setStdData] = React.useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    birthday: "",
    grade: "",
    situation: "",
    contract_number: "",
    date_payment: "",
    registration_date: "",
    date_expires_contract: "",
  });
  const {
    selectStudent,
    stdName,
    stdAddress,
    stdPhone,
    stdEmail,
    stdGrade,
    stdBirthday,
    stdSituation,
    stdContractNumber,
    stdDatePayment,
    stdRegistrationDate,
    stdDateExpiresContract,
  } = useContext(StudentContext);

  React.useEffect(() => {
    selectStudent(id);
    setStdData({
      name: stdName,
      address: stdAddress,
      phone: stdPhone,
      email: stdEmail,
      grade: stdGrade,
      birthday: stdBirthday,
      situation: stdSituation,
      contract_number: stdContractNumber,
      date_payment: stdDatePayment,
      registration_date: stdRegistrationDate,
      date_expires_contract: stdDateExpiresContract,
    });
  }, [
    stdName,
    stdAddress,
    stdPhone,
    stdEmail,
    stdGrade,
    stdBirthday,
    stdSituation,
    stdContractNumber,
    stdDatePayment,
    stdRegistrationDate,
    stdDateExpiresContract,
  ]);

  return (
    <div className={styles.selectStudent}>
      {
        <FormStudent
          valueName={stdData.name}
          valueAddress={stdData.address}
          valueBirthday={stdData.birthday}
          valueEmail={stdData.email}
          valuePhone={stdData.phone}
          valueGrade={stdData.grade}
          valueContractNumber={stdData.contract_number}
          valueDateExpiresContract={stdData.date_expires_contract}
          valueDatePayment={stdData.date_payment}
          valueRegistrationDate={stdData.registration_date}
          valueSituation={stdData.situation}
          disabledSelect={true}
          buttonApears={"none"}
          readSelect={true}
        />
      }
    </div>
  );
};
export default SelectStudent;
