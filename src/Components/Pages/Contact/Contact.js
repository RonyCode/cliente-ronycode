import React from "react";
import styles from "./Contact.module.css";
import { StudentContext } from "../../StudentStorage";

const Contato = () => {
  const { getAllStudents, dataAllStudent } = React.useContext(StudentContext);

  React.useEffect(() => {
    getAllStudents();
  }, []);

  let test2 = dataAllStudent && dataAllStudent.map((item) => item.dayStudent);
  console.log(test2);
  return (
    <div className={styles.contact}>
      <div className={styles.add_student_div}>
        <div className={styles.add_student_checkbox}>
          {test2 && test2.sort().map((item) => <li>{item}</li>)}
        </div>
      </div>
    </div>
  );
};
export default Contato;
