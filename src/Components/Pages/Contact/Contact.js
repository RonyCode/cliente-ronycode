import React from "react";
import styles from "./Contact.module.css";
import { StudentContext } from "../../StudentStorage";
import SelectNormal from "../../Input/SelectNormal";
import iconSelect from "../../../Assets/clock-time-control-tool-1_icon-icons.com_56823.svg";
import iconSeg from "../../../Assets/seg.png";
import iconTer from "../../../Assets/ter.png";
import iconQua from "../../../Assets/qua.png";
import iconQui from "../../../Assets/qui.png";
import iconSex from "../../../Assets/sex.png";

const Contato = () => {
  const { getAllStudents } = React.useContext(StudentContext);

  React.useEffect(() => {
    getAllStudents();
  }, []);
  const [dayStudent, setDayStudent] = React.useState([]);
  const [hourInput, setHourInput] = React.useState([]);
  const [hourOutput, setHourOutput] = React.useState([]);
  const [pay, setPay] = React.useState({
    day: "",
    hour_input: "",
    hour_output: "",
  });
  const [drowmbox, setDrowmbox] = React.useState(styles.drowmbox);
  const [saveData, setSaveData] = React.useState([]);
  const [iconChange, setIconChange] = React.useState(null);
  const formData = new FormData();

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
      setDayStudent(e.target.value);
    }
  };
  const handleChange2 = (e) => {
    if (e.target.checked) {
      setHourInput(e.target.value);
    }
  };
  const handleChange3 = (e) => {
    if (e.target.checked) {
      setHourOutput(e.target.value);
    }
  };

  React.useEffect(() => {
    if (hourInput < hourOutput) {
      setPay({
        day: dayStudent,
        hour_input: hourInput + " as ",
        hour_output: hourOutput,
      });
    } else setPay("");
    days[0].includes("seg") && setIconChange(iconSeg);
    days[1].includes("ter") && setIconChange(iconTer);
    days[2].includes("qua") && setIconChange(iconQua);
    days[3].includes("qui") && setIconChange(iconQui);
    days[4].includes("sex") && setIconChange(iconSex);
  }, [dayStudent, hourInput, hourOutput, iconChange, days]);

  const handleClick = () => {
    if (pay) {
      setSaveData((saveData) => [...saveData, pay]);
      setDayStudent("");
      setHourInput("");
      setHourOutput("");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleOnMouse = (e) => {
    if (e.target.checked) {
      setDrowmbox(styles.drowmbox_expand);
    } else {
      setDrowmbox(styles.drowmbox);
    }
  };

  console.log(saveData);
  console.log(days[0].includes("seg"));
  return (
    <div className={styles.contact}>
      <div>
        <form className={styles.container} onSubmit={handleSubmit}>
          <div className={styles.label_div}>
            <label className={styles.label_select} onChange={handleOnMouse}>
              Selecione
              <input id={styles.checkbox_toggle} type="checkbox" />
            </label>
          </div>

          <div className={drowmbox}>
            <div className={styles.div_select}>
              <SelectNormal
                onChange={handleChange1}
                valueAdd={days}
                valueCheck={dayStudent}
                icon={iconChange}
              />
            </div>{" "}
            <div className={styles.div_select}>
              <SelectNormal
                onChange={handleChange2}
                valueAdd={hour}
                valueCheck={hourInput}
                icon={iconSelect}
              />
            </div>
            <div className={styles.div_select}>
              <SelectNormal
                onChange={handleChange3}
                valueAdd={hour}
                valueCheck={hourInput < hourOutput && hourOutput}
                icon={iconSelect}
              />
            </div>
            <div className={styles.div_select}>
              <button onClick={handleClick} className={styles.button_check}>
                <img src={iconSelect} alt="icone check" width="36" />{" "}
              </button>
            </div>{" "}
            <label>
              Dia:
              {saveData.map((item) => (
                <div>{item.day.includes("seg") && item.day}</div>
              ))}
            </label>
            <label>
              Horário Entrada:
              {saveData.map((item) => (
                <li>{item.hour_input}</li>
              ))}
            </label>
            <label>
              Horário saída:
              {saveData.map((item) => (
                <li> {item.hour_output}</li>
              ))}
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contato;
