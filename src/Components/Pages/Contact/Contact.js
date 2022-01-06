import React from "react";
import styles from "./Contact.module.css";
import { StudentContext } from "../../StudentStorage";

const Contato = () => {
  const [days, setDays] = React.useState([]);
  const { getAllDayStudents, dataDayAllStudent } =
    React.useContext(StudentContext);

  React.useEffect(() => {
    getAllDayStudents();
  }, []);
  return (
    <div className={styles.contact}>
      {dataDayAllStudent &&
        dataDayAllStudent.map(
          (item) => item.mon && item.mon.split(",").map((a, b) => <li>{a}</li>)
        )}
    </div>
  );
};
export default Contato;
