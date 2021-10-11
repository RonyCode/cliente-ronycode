import React from "react";
import styles from "./FinancialStudent.module.css";
import { StudentContext } from "../../StudentStorage";
import { Link } from "react-router-dom";
import iconEdit from "../../../Assets/UserEdit_40958.png";
import iconBoleto from "../../../Assets/pgto.svg";

const FinancialStudent = () => {
  const [clickFake, setClickFake] = React.useState("");
  const { getAllStudents, dataAllStudent } = React.useContext(StudentContext);

  React.useEffect(() => {
    getAllStudents();
    dataAllStudent &&
      dataAllStudent.map(
        (item) => item.situation.substr(0, 3) === "ina" && setClickFake("none")
      );
  }, [dataAllStudent.map]);
  console.log(clickFake);
  return (
    <div className={styles.finan_std}>
      <div className={styles.container}>
        <div className={styles.finan_labels}>
          <label className={styles.finan_iten_label}>Nome:</label>
          <label className={styles.finan_iten_label}>Situaçao Fin.:</label>
          <label className={styles.finan_iten_label}>Data Pgto:</label>
          <div className={styles.finan_iten_links}>
            <label className={styles.finan_iten_link}>Editar</label>
            <label className={styles.finan_iten_link}>Gerar Boleto</label>
          </div>
        </div>

        {dataAllStudent &&
          dataAllStudent.map((item) => (
            <div className={styles.finan_itens}>
              <input
                className={styles.finan_iten}
                type="text"
                value={item.name}
              />
              {item.situation.substr(0, 3) === "ina" ? (
                <div className={styles.finan_iten}>
                  <input
                    type="text"
                    value={item.situation}
                    style={{ color: "red", fontWeight: "bold" }}
                  />
                  <input type="text" value={item.datePayment} />

                  <div className={styles.finan_list_link}>
                    <a
                      key={item.id}
                      href="https://mpago.la/1iHTSqt"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className={styles.icons}
                        src={iconBoleto}
                        alt="icone editar"
                      />
                    </a>
                  </div>
                  <div className={styles.finan_list_link}>
                    <a
                      key={item.id}
                      href="https://mpago.la/29EPzWu"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className={styles.icons}
                        src={iconBoleto}
                        alt="icone editar"
                      />
                    </a>
                  </div>
                  <div className={styles.finan_list_link}>
                    <a
                      key={item.id}
                      href="https://mpago.la/1urnWzc"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className={styles.icons}
                        src={iconBoleto}
                        alt="icone editar"
                      />
                    </a>
                  </div>
                </div>
              ) : (
                <div className={styles.finan_iten}>
                  <input
                    type="text"
                    value={item.situation}
                    style={{ color: "green" }}
                  />
                  <input type="text" value={item.datePayment} />
                  <div className={styles.finan_list_link}>
                    <a
                      key={item.id}
                      href="https://mpago.la/1iHTSqt"
                      target="_blank"
                      rel="noreferrer"
                      style={{ pointerEvents: clickFake }}
                    >
                      <img
                        className={styles.icons}
                        src={iconBoleto}
                        alt="icone editar"
                      />
                    </a>
                  </div>
                  <div className={styles.finan_list_link}>
                    <a
                      key={item.id}
                      href="https://mpago.la/29EPzWu"
                      target="_blank"
                      rel="noreferrer"
                      style={{ pointerEvents: clickFake }}
                    >
                      <img
                        className={styles.icons}
                        src={iconBoleto}
                        alt="icone editar"
                      />
                    </a>
                  </div>
                  <div className={styles.finan_list_link}>
                    <a
                      key={item.id}
                      href="https://mpago.la/1urnWzc"
                      target="_blank"
                      rel="noreferrer"
                      style={{ pointerEvents: clickFake }}
                    >
                      <img
                        className={styles.icons}
                        src={iconBoleto}
                        alt="icone editar"
                      />
                    </a>
                  </div>
                </div>
              )}
              <div className={styles.finan_iten}>
                <Link to={"/login/aluno/editar/id/" + item.id}>
                  <img
                    className={styles.icons}
                    src={iconEdit}
                    alt="icone editar"
                  />
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FinancialStudent;
