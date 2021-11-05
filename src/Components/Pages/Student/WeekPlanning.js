import React from "react";
import styles from "./WeekPlanning.module.css";
import { StudentContext } from "../../StudentStorage";

const WeekPlanning = () => {
  const [teste, setTeste] = React.useState();
  const { getAllStudents, dataAllStudent } = React.useContext(StudentContext);
  React.useEffect(() => {
    getAllStudents();
  }, []);

  const handleSelect = (e) => {
    e.preventDefault();
    setTeste(e.target.value);
  };
  console.log(teste);
  return (
    <div className={styles.planning}>
      <div className={styles.container}>
        <h1>Planejamento Aluno </h1>
        <select value={teste} onChange={handleSelect}>
          {dataAllStudent &&
            dataAllStudent.map((item) => (
              <>
                <option key={item.id} defaultValue={true} hidden={true}>
                  Selecione
                </option>
                <option value={item.email}>{item.name}</option>
              </>
            ))}
        </select>
        {dataAllStudent &&
          dataAllStudent.map((item) => (
            <>
              {item.email === teste && (
                <div key={item.id}>
                  <div>{item.name}</div>
                  <div>{item.grade}</div>
                </div>
              )}
            </>
          ))}
      </div>
    </div>
  );
};

export default WeekPlanning;
