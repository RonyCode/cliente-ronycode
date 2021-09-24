import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import styles from "./SelectStudent.module.css";
import FormStudent from "../../Input/FormStudent";
import { StudentContext } from "../../StudentStorage";

const SelectStudent = () => {
  const { id } = useParams();
  const { selectStudent, stdData } = useContext(StudentContext);

  React.useEffect(() => {
    selectStudent(id);
  }, []);

  return (
    <div className={styles.selectStudent}>
      {
        <FormStudent
          valueName={stdData.name || ""}
          valueAddress={stdData.address || ""}
          valueBirthday={stdData.birthday || ""}
          valueEmail={stdData.email || ""}
          valuePhone={stdData.phone || ""}
          valueGrade={stdData.grade || ""}
          valueContractNumber={stdData.contractNumber || ""}
          valueDateExpiresContract={stdData.dateExpiresContract || ""}
          valueDatePayment={stdData.datePayment || ""}
          valueRegistrationDate={stdData.registrationDate || ""}
          valueSituation={stdData.situation || ""}
          disabledSelect={true}
          buttonApears={"none"}
          readSelect={true}
        />
      }
    </div>
  );
};
export default SelectStudent;
