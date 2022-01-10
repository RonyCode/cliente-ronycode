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
          valueProgress={stdData.progress || ""}
          valueContractNumber={stdData.contractNumber || ""}
          valueDayStudent={stdData.dayStudent || ""}
          valueDatePayment={stdData.datePayment || ""}
          valueSituation={stdData.situation || ""}
          valueResponsible={stdData.responsible || ""}
          valueResponsiblePhone={stdData.responsiblePhone || ""}
          disabledSelect={true}
          buttonApears={"none"}
          readSelect={true}
          valueCheck={stdData.dayStudent || ""}
        />
      }
    </div>
  );
};
export default SelectStudent;
