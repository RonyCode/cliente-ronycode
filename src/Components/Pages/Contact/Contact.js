import React from "react";
import styles from "./Contact.module.css";
import { StudentContext } from "../../StudentStorage";
import Select from "../../Input/Select";
import SelectNormal from "../../Input/SelectNormal";
import iconSelect from "../../../Assets/clock-time-control-tool-1_icon-icons.com_56823.svg";

const Contato = () => {
  const { getAllStudents, dataAllStudent } = React.useContext(StudentContext);

  React.useEffect(() => {
    getAllStudents();
  }, []);
  const [dayStudent1, setDayStudent1] = React.useState([]);
  const [dayStudent2, setDayStudent2] = React.useState([]);
  const [dayStudent3, setDayStudent3] = React.useState([]);
  const [pay, setPay] = React.useState();
  const [drowmbox, setDrowmbox] = React.useState("");
  const formData = new FormData();
  formData.append("day_student", dayStudent1);
  formData.append("day_student", dayStudent2);
  formData.append("day_student", dayStudent3);

  const hour = [
    "08h:00min",
    "08h:30min",
    "09h:00min",
    "09h:30min",
    "10h:00min",
    "10h:30min",
    "13h:30min",
    "14h:00min",
    "14h:30min",
    "15h:00min",
    "15h:30min",
    "16h:00min",
    "16h:30min",
  ];
  const days = ["seg ", "ter ", "qua ", "qui ", "sex "];

  const handleChange1 = (e) => {
    if (e.target.checked) {
      setDayStudent1(e.target.value);
    }
  };
  const handleChange2 = (e) => {
    if (e.target.checked) {
      // if (e.target.checked < dayStudent3) {
      //   setDayStudent2(e.target.value);
      // }
      setDayStudent2(e.target.value);
    }
  };
  const handleChange3 = (e) => {
    if (e.target.checked) {
      setDayStudent3(e.target.value);
    }
  };

  React.useEffect(() => {
    if (dayStudent2 < dayStudent3) {
      setPay(dayStudent1 + dayStudent2 + dayStudent3);
    } else setPay("");
  }, [dayStudent1, dayStudent2, dayStudent3]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleOnMouse = () => {
    setDrowmbox(styles.drowmbox_expand);
  };
  const handleMouseOver = () => {
    setDrowmbox(styles.drowmbox);
  };
  console.log(pay);
  return (
    <div className={styles.contact}>
      <div>
        <form className={styles.container} onSubmit={handleSubmit}>
          <div
            onMouseOver={handleOnMouse}
            onMouseLeave={handleMouseOver}
            className={drowmbox}
          >
            <div className={styles.div_select}>
              <SelectNormal
                onChange={handleChange1}
                valueAdd={days}
                valueCheck={dayStudent1}
                icon={iconSelect}
              />
            </div>{" "}
            <div className={styles.div_select}>
              <SelectNormal
                onChange={handleChange2}
                valueAdd={hour}
                valueCheck={dayStudent2}
                icon={iconSelect}
              />
            </div>
            <div className={styles.div_select}>
              <SelectNormal
                onChange={handleChange3}
                valueAdd={hour}
                valueCheck={dayStudent2 < dayStudent3 && dayStudent3}
                icon={iconSelect}
              />
            </div>
            <div className={styles.div_select}>{pay}</div>
            <div className={styles.div_select}>
              <button>
                <img src={iconSelect} alt="icone check" width="36" />{" "}
              </button>
            </div>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contato;
