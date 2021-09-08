import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { SELECT_STD } from "../../../api/api";
import axios from "axios";
import styles from "./SelectStudent.module.css";
import FormStudent from "../../Input/FormStudent";
import { StudentContext } from "../../StudentStorage";

const SelectStudent = () => {
  const { id } = useParams();
  const [stdData, setStdData] = React.useState("");
  const { stdName } = useContext(StudentContext);
  console.log(stdName);
  React.useEffect(() => {
    const selectStudent = async () => {
      try {
        const { url, options } = SELECT_STD(id);
        const response = await axios(url, options);
        response && setStdData(response.data.data[0]);
        console.log(response.data.data[0]);
      } catch (response) {
        console.log(response.response.data);
      }
    };
    selectStudent();
  }, []);

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
          valueContractNumber={stdData.contractNumber}
          valueDateExpiresContract={stdData.dateExpiresContract}
          valueDatePayment={stdData.datePayment}
          valueRegistrationDate={stdData.registrationDate}
          valueSituation={stdData.situation}
          disabledSelect={true}
        />
      }
    </div>
  );
};
export default SelectStudent;
