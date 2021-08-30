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
        console.log(response);
      }
    };
    selectStudent();
  }, []);

  return (
    <div className={styles.selectStudent}>
      <div className={styles.selectStudent_container}>
        <form className={styles.selectStudent_items}>
          <div className={styles.selectStudent_item}>
            <label htmlFor="name">Nome:</label>
            <input
              className={styles.selectStudent_item}
              type="text"
              name="name"
              required={true}
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
              type="text"
              name="address"
              required={true}
              value={stdData.address}
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
              type="email"
              name="email"
              required={true}
              value={stdData.email}
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
              type="text"
              name="grade"
              required={true}
              value={stdData.grade}
            />
            <img
              className={styles.selectStudent_placeholder}
              src={iconEstudo}
              alt="icone escolaridade"
            />
          </div>
          <div className={styles.selectStudent_item_dates}>
            <div className={styles.selectStudent_item_date}>
              <label>Data Nasc.:</label>
              <input
                type="text"
                name="birthday"
                required={true}
                value={stdData.birthday}
              />
              <img
                className={styles.selectStudent_placeholder}
                src={iconCalendar}
                alt=""
              />
            </div>
            <div className={styles.selectStudent_item_date}>
              <label>Data Mat.:</label>
              <input
                type="text"
                name="registratioDate"
                required={true}
                value={stdData.registrationDate}
              />
              <img
                className={styles.selectStudent_placeholder}
                src={iconCalendar}
                alt=""
              />
            </div>
            <div className={styles.selectStudent_item_date}>
              <label>Telefone:</label>
              <input
                type="text"
                name="phone"
                required={true}
                value={stdData.phone}
              />
              <img
                className={styles.selectStudent_placeholder}
                src={iconPhone}
                alt=""
              />
            </div>
            <div className={styles.selectStudent_item_date}>
              <label>Vencimento:</label>
              <input
                type="text"
                name="expirationDate"
                required={true}
                value={stdData.expirationDate}
              />
              <img
                className={styles.selectStudent_placeholder}
                src={iconCalendar}
                alt=""
              />
            </div>
          </div>
          <div className={styles.selectStudent_buttons}>
            <Link
              to="/login/aluno/lista"
              className={styles.selectStudent_button_cancelar}
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
