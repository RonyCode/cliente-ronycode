import React from "react";
import styles from "./FormSelectDays.module.css";
import SelectNormal from "../Input/SelectNormal";
import iconSelect from "../../Assets/select_icon_151113.svg";
import iconHora from "../../Assets/clock-time-control-tool-1_icon-icons.com_56823.svg";
import SelectWeekDay from "../Input/SelectWeekDay";
import { generateUniqueID } from "web-vitals/dist/modules/lib/generateUniqueID";

const FormSelectDays = ({
  onChangeDay,
  onChangeHourInput,
  onChangeHourOutput,
  valueSelectDays,
  valueSelectHour,
  valueCheckSelectDay,
  valueCheckSelectHourInput,
  valueCheckSelectHourOutput,
  saveData,
  editData,
  onClick,
  showSelected,
}) => {
  const [drowmbox, setDrowmbox] = React.useState(styles.drowmbox);

  const [dayStudent, setDayStudent] = React.useState(valueCheckSelectDay);
  const [hourInput, setHourInput] = React.useState(valueCheckSelectHourInput);
  const [hourOutput, setHourOutput] = React.useState(
    valueCheckSelectHourOutput
  );

  React.useEffect(() => {
    valueCheckSelectDay && setDayStudent(valueCheckSelectDay);
    valueCheckSelectHourInput && setHourInput(valueCheckSelectHourInput);
    valueCheckSelectHourOutput && setHourOutput(valueCheckSelectHourOutput);
  }, [
    dayStudent,
    hourInput,
    hourOutput,
    valueCheckSelectDay,
    valueCheckSelectHourInput,
    valueCheckSelectHourOutput,
  ]);
  const handleMouseLeave = (e) => {
    setDrowmbox(styles.drowmbox);
  };
  const handleMouseOver = (e) => {
    setDrowmbox(styles.drowmbox_expand);
  };

  return (
    <div className={styles.form_select}>
      <div className={styles.container}>
        <label
          onMouseLeave={handleMouseLeave}
          onMouseOver={handleMouseOver}
          className={styles.label_select}
        >
          Selecione
          <input id={styles.checkbox_toggle} type="checkbox" />
          <div className={drowmbox}>
            <div className={styles.div_selects}>
              <div className={styles.div_select}>
                <SelectWeekDay
                  onChangeDay={onChangeDay}
                  valueArrDays={valueSelectDays}
                  valueCheck={dayStudent}
                />
              </div>{" "}
              <div className={styles.div_select}>
                <SelectNormal
                  onChange={onChangeHourInput}
                  valueAdd={valueSelectHour}
                  valueCheck={hourInput}
                  icon={iconHora}
                />
              </div>
              <div className={styles.div_select}>
                <SelectNormal
                  onChange={onChangeHourOutput}
                  valueAdd={valueSelectHour}
                  valueCheck={
                    valueCheckSelectHourInput < valueCheckSelectHourOutput &&
                    hourOutput
                  }
                  icon={iconHora}
                />
              </div>
              <div className={styles.div_select}>
                <button
                  type="button"
                  onClick={onClick}
                  className={styles.button_check}
                >
                  <img src={iconSelect} alt="icone check" width="36" />{" "}
                </button>
              </div>{" "}
            </div>

            <div className={showSelected}>
              <label className={styles.label_show}>Dia selecionado:</label>

              <label className={styles.label_show_subtitle}>Dia:</label>

              <div className={styles.item_hour}>
                {saveData &&
                  saveData.map((item) => (
                    <li className={styles.teste_cor} key={generateUniqueID()}>
                      {item.day}
                    </li>
                  ))}

                {editData &&
                  editData.split(",").map((item) => (
                    <div
                      className={editData && styles.item_selected}
                      key={generateUniqueID()}
                    >
                      <li>{item.split(" ", 1)}</li>
                    </div>
                  ))}
              </div>

              <label className={styles.label_show_subtitle}>
                Horário Entrada:
              </label>

              <div className={styles.item_hour}>
                {saveData &&
                  saveData.map((item) => (
                    <li className={styles.teste_cor} key={generateUniqueID()}>
                      {item.hour_input}
                    </li>
                  ))}
                {editData &&
                  editData.split(",").map((item) => (
                    <div
                      className={editData && styles.item_selected}
                      key={generateUniqueID()}
                    >
                      <li>{item.substr(4, 10)}</li>
                    </div>
                  ))}
              </div>

              <label className={styles.label_show_subtitle}>
                Horário saída:
              </label>

              <div className={styles.item_hour}>
                {saveData &&
                  saveData.map((item) => (
                    <li className={styles.teste_cor} key={generateUniqueID()}>
                      {" "}
                      {item.hour_output}
                    </li>
                  ))}
                {editData &&
                  editData.split(",").map((item) => (
                    <div
                      className={editData && styles.item_selected}
                      key={generateUniqueID()}
                    >
                      <li>{item.substr(13)}</li>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};
export default FormSelectDays;
