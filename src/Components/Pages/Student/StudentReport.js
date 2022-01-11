import React from "react";
import styles from "./StudentReport.module.css";
import { StudentContext } from "../../StudentStorage";

const StudentReport = () => {
  const [teste, setTeste] = React.useState();
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
                  <div key={item.id} className={styles.report_page}>
                    <div className={styles.report_cell}>
                      <label htmlFor="">Nome: {item.name}</label>
                    </div>
                    <div className={styles.report_cell}>
                      <label htmlFor="">Email: {item.email}</label>
                    </div>
                    <div className={styles.report_cell}>
                      <label htmlFor="">Endereço: {item.address}</label>
                    </div>
                    <div className={styles.report_cell}>
                      <label htmlFor="">Telefone: {item.phone}</label>
                    </div>
                    <div className={styles.report_cell}>
                      <label htmlFor="">Responsavel: {item.responsible}</label>
                    </div>
                    <div className={styles.report_cell}>
                      <label htmlFor="">
                        Tel. Responsavel: {item.responsiblePhone}
                      </label>
                    </div>
                    <div className={styles.report_cell}>
                      <label htmlFor="">Data Nascimento: {item.birthday}</label>
                    </div>
                    <div className={styles.report_cell}>
                      <label htmlFor="">Escolaridade: {item.grade}</label>
                    </div>
                    <div className={styles.report_cell}>
                      <label htmlFor="">Progresso: {item.progress}</label>
                    </div>
                    <div className={styles.report_cell}>
                      <label htmlFor="">
                        Numero do Contrato: {item.contractNumber}
                      </label>
                    </div>
                    <div className={styles.report_cell}>
                      <label htmlFor="">
                        Data Pagamento: {item.datePayment}
                      </label>
                    </div>
                    <div className={styles.report_cell}>
                      <label htmlFor="">Mensalidade: {item.situation}</label>
                    </div>

                    <div className={styles.report_cell}>
                      <label htmlFor="">Relatório: </label>
                      <div>{item.report}</div>
                    </div>
                    <div className={styles.report_cell}>
                      <form>
                        <label htmlFor="">Atualizar Relatório:</label>
                        <textarea name="reportText" id="" cols="60" rows="10" />
                      </form>
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
