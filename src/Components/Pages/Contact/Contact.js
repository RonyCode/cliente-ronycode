import React, { useState } from "react";
import styles from "./Contact.module.css";

import Select from "../../Input/Select";

const Contato = () => {
  const [dayWeek, setDayWeek] = React.useState([]);

  const handleChange = (e) => {
    if (e.target.checked) {
      setDayWeek((dayWeek) => [...dayWeek, e.target.value]);
    } else {
      // remove from list
      setDayWeek(dayWeek.filter((people) => people !== e.target.value));
    }
  };

  console.log(dayWeek);

  return (
    <div className={styles.contact}>
      <form className={styles.add_student_container}>
        <div className={styles.add_student_div}>
          <div className={styles.add_student_checkbox}>
            <label className={styles.add_student_label}>Dia de Aula:</label>
            <label>
              <Select onChange={handleChange} />
            </label>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        {dayWeek.map((item) => item)}
      </form>
    </div>
  );
};
export default Contato;
