import React, { useState } from "react";
import styles from "./FormStudent.module.css";
import iconSeg from "../../../Assets/seg.png";
import iconTer from "../../../Assets/ter.png";
import iconQua from "../../../Assets/qua.png";
import iconQui from "../../../Assets/qui.png";
import iconSex from "../../../Assets/sex.png";

const Contato = () => {
  const [dayWeek, setDayWeek] = React.useState([]);
  const handleChange = (e) => {
    if (e.target.checked) {
      setDayWeek([...dayWeek, { id: e.target.id, day: e.target.value }]);
    }
  };

  console.log(dayWeek);
  return (
    <div className={styles.add_student}>
      <form className={styles.add_student_container}>
        <div className={styles.add_student_checkbox}>
          <label className={styles.add_student_label}>Dia de Aula:</label>

          <div className={styles.student_checkbox_list}>
            <label>
              <input
                id={1}
                type="checkbox"
                value="seg"
                onChange={handleChange}
              />
              <img
                className={styles.add_checkbox_icon}
                src={iconSeg}
                alt="icone checkbox"
              />
            </label>
            <label>
              <input
                id={2}
                type="checkbox"
                value="ter"
                onChange={handleChange}
              />
              <img
                className={styles.add_checkbox_icon}
                src={iconTer}
                alt="icone checkbox"
              />
            </label>
            <label>
              <input
                id={3}
                type="checkbox"
                value="qua"
                onChange={handleChange}
              />
              <img
                className={styles.add_checkbox_icon}
                src={iconQua}
                alt="icone checkbox"
              />
            </label>
            <label>
              <input
                id={4}
                type="checkbox"
                value="qui"
                onChange={handleChange}
              />
              <img
                className={styles.add_checkbox_icon}
                src={iconQui}
                alt="icone checkbox"
              />
            </label>
            <label>
              <input
                id={5}
                type="checkbox"
                value="sex"
                onChange={handleChange}
              />
              <img
                className={styles.add_checkbox_icon}
                src={iconSex}
                alt="icone checkbox"
              />
            </label>
          </div>
        </div>
        {dayWeek.map((item) => {
          console.log(item.id);
          console.log(item.day);
        })}
      </form>
    </div>
  );
};
export default Contato;
