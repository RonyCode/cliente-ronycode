import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { SELECT_STD, UPDATE_STD } from "../../../api/api";
import axios from "axios";
import styles from "./SelectStudent.module.css";
import iconCalendar from "../../../Assets/3586371-calendar-date-event-schedule_107943.svg";
import iconPhone from "../../../Assets/phone_icon-icons.com_48251.png";
import iconAluno from "../../../Assets/user_icon-icons.com_48201.png";
import iconEndereco from "../../../Assets/endereco.svg";
import iconEstudo from "../../../Assets/book-with-bookmark-educational-tool-outlined-symbol_icon-icons.com_57884.svg";
import iconEmail from "../../../Assets/email-outlined-envelope-back-symbol_icon-icons.com_57846.svg";
import iconContrato from "../../../Assets/contract_icon-icons.com_64813.png";
import iconSituacao from "../../../Assets/check.png";

const SelectStudent = () => {
  const { id } = useParams();
  const [stdData, setStdData] = React.useState("");

  React.useEffect(() => {
    const selectStudent = async () => {
      try {
        const { url, options } = SELECT_STD(id);
        const response = await axios(url, options);
        response && setStdData(response.data.data[0]);
        console.log(response.data.data[0]);
      } catch (response) {
        console.log(response.response.data);
      }
    };
    selectStudent();
  }, []);

  console.log(stdData);
  return (
    <div className={styles.selectStudent}>
      <div className={styles.selectStudent_container}>
        <form className={styles.selectStudent_items}>
          <div className={styles.selectStudent_item}>
            <label htmlFor="name">Nome:</label>
            <input
              readOnly={true}
              type="text"
              name="name"
              value={stdData.name || ""}
            />
            <img
              className={styles.selectStudent_placeholder}
              src={iconAluno}
              alt="icone Aluno"
            />
          </div>

          <div className={styles.selectStudent_item}>
            <label>Endereço:</label>
            <input
              readOnly={true}
              type="text"
              name="address"
              value={stdData.address || ""}
            />
            <img
              className={styles.selectStudent_placeholder}
              src={iconEndereco}
              alt="icone endereço"
            />
          </div>

          <div className={styles.selectStudent_item}>
            <label>Email:</label>
            <input
              readOnly={true}
              type="email"
              name="email"
              value={stdData.email || ""}
            />
            <img
              className={styles.selectStudent_placeholder}
              src={iconEmail}
              alt="icone email"
            />
          </div>

          <div className={styles.selectStudent_item}>
            <label>Escolaridade:</label>
            <input
              readOnly={true}
              type="text"
              name="grade"
              value={stdData.grade || ""}
            />
            <img
              className={styles.selectStudent_placeholder}
              src={iconEstudo}
              alt="icone escolaridade"
            />
          </div>
          <div className={styles.selectStudent_item}>
            <label>Contrato:</label>
            <input
              readOnly={true}
              type="text"
              name="grade"
              value={stdData.contractNumber || ""}
            />
            <img
              className={styles.selectStudent_placeholder}
              src={iconContrato}
              alt="icone contrato"
            />
          </div>

          <div className={styles.selectStudent_item}>
            <label>Situação:</label>
            <input
              readOnly={true}
              type="text"
              name="birthday"
              value={stdData.situation || ""}
            />
            <img
              className={styles.selectStudent_placeholder}
              src={iconSituacao}
              alt="icone situaçao"
            />
          </div>

          <div className={styles.selectStudent_item}>
            <label>Vencimento Cont.:</label>
            <input
              readOnly={true}
              type="text"
              name="birthday"
              value={stdData.dateExpiresContract || ""}
            />
            <img
              className={styles.selectStudent_placeholder}
              src={iconCalendar}
              alt=""
            />
          </div>

          <div className={styles.selectStudent_item}>
            <label>Data Nasc.:</label>
            <input
              readOnly={true}
              type="text"
              name="birthday"
              value={stdData.birthday || ""}
            />
            <img
              className={styles.selectStudent_placeholder}
              src={iconCalendar}
              alt=""
            />
          </div>

          <div className={styles.selectStudent_item}>
            <label>Data Mat.:</label>
            <input
              readOnly={true}
              type="text"
              name="registratioDate"
              value={stdData.registrationDate || ""}
            />
            <img
              className={styles.selectStudent_placeholder}
              src={iconCalendar}
              alt=""
            />
          </div>
          <div className={styles.selectStudent_item}>
            <label>Telefone:</label>
            <input
              readOnly={true}
              type="text"
              name="phone"
              value={stdData.phone || ""}
            />
            <img
              className={styles.selectStudent_placeholder}
              src={iconPhone}
              alt=""
            />
          </div>

          <div className={styles.selectStudent_item}>
            <label>Data Pgto:</label>
            <input
              readOnly={true}
              type="text"
              name="expirationDate"
              value={stdData.datePayment || ""}
            />
            <img
              className={styles.selectStudent_placeholder}
              src={iconCalendar}
              alt=""
            />
          </div>

          <div className={styles.selectStudent_buttons}>
            <Link
              to="/login/aluno/lista"
              className={styles.selectStudent_button}
            >
              Voltar
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SelectStudent;
