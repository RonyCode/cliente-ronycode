import React from "react";
import styles from "./StudentReport.module.css";
import { StudentContext } from "../../StudentStorage";

const StudentReport = () => {
  const [data, setData] = React.useState();
  const { getAllStudents, dataAllStudent } = React.useContext(StudentContext);
  React.useEffect(() => {
    getAllStudents();
  }, []);

  const handleSelect = (e) => {
    e.preventDefault();
    setData(e.target.value);
  };
  return (
    <div className={styles.report}>
      <div className={styles.container}>
        <h1>Relatório Pedagógico do Aluno </h1>
        <div className={styles.report_select}>
          <label htmlFor="select_aluno">Por favor selecione um aluno</label>
          <select name="select_aluno" value={data} onChange={handleSelect}>
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
        </div>
        <div className={styles.report_matriz}>
          {dataAllStudent &&
            dataAllStudent.map((item) => (
              <>
                {item.email === data && (
                  <div key={item.id}>
                    <div>
                      <label htmlFor="">Nome: {item.name}</label>
                    </div>
                    <div>
                      <label htmlFor="">Email: {item.email}</label>
                    </div>
                    <div>
                      <label htmlFor="">Telefone: {item.phone}</label>
                    </div>
                    <div>
                      <label htmlFor="">Escolaridade: {item.grade}</label>
                    </div>
                    <div>
                      <label htmlFor="">Progresso: {item.progress}</label>
                    </div>
                    <div>
                      <label htmlFor="">Data Nascimento: {item.birthday}</label>
                    </div>
                    <div>
                      <label htmlFor="">Telefone: {item.phone}</label>
                    </div>
                  </div>
                )}
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default StudentReport;
