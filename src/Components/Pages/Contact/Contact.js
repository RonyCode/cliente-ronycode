import React from "react";
import styles from "./Contact.module.css";
import { StudentContext } from "../../StudentStorage";

const Contato = () => {
  const { getAllStudents, dataAllStudent } = React.useContext(StudentContext);

  React.useEffect(() => {
    getAllStudents();
  }, []);

  return <div className={styles.contact}></div>;
};
export default Contato;
