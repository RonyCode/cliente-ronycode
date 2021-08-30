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
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [birthday, setBirthday] = React.useState("");
  const [grade, setGrade] = React.useState("");
  const [registrationDate, setRegistrationDate] = React.useState("");
  const [expirationDate, setExpirationDate] = React.useState("");
  const navigate = useNavigate();

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

  console.log(id);
  const formData = new FormData();
  formData.append("id", id);
  formData.append("name", name);
  formData.append("phone", phone);
  formData.append("email", email);
  formData.append("address", address);
  formData.append("birthday", birthday);
  formData.append("grade", grade);
  formData.append("registration_date", registrationDate);
  formData.append("expiration_date", expirationDate);

  function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = UPDATE_STD(formData);

    axios(url, options)
      .then(function (response) {
        alert("Aluno Atualizado com sucesso!");
        navigate("/login/aluno/lista");
        console.log("Success: ", response.data);
      })
      .catch(function (error) {
        console.log("Error: ", error.response.data);
        alert(error.response.data.message);
      });
  }

  console.log(id);
  return (
    <div className={styles.selectStudent}>
      <div className={styles.selectStudent_container}>
        <form className={styles.selectStudent_items} onSubmit={handleSubmit}>
          <div className={styles.selectStudent_item}>
            <label htmlFor="name">Nome:</label>
            <input
              className={styles.selectStudent_item}
              type="text"
              name="name"
              required={true}
              placeholder={stdData.name}
              value={name || ""}
              onChange={({ target }) => setName(target.value)}
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
              placeholder={stdData.address}
              value={address || ""}
              onChange={({ target }) => setAddress(target.value)}
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
              placeholder={stdData.email}
              value={email || ""}
              onChange={({ target }) => setEmail(target.value)}
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
              placeholder={stdData.grade}
              value={grade || ""}
              onChange={({ target }) => setGrade(target.value)}
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
                placeholder={stdData.birthday}
                value={birthday || ""}
                onChange={({ target }) => setBirthday(target.value)}
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
                placeholder={stdData.registrationDate}
                value={registrationDate || ""}
                onChange={({ target }) => setRegistrationDate(target.value)}
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
                placeholder={stdData.phone}
                value={phone || ""}
                onChange={({ target }) => setPhone(target.value)}
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
                placeholder={stdData.expirationDate}
                value={expirationDate || ""}
                onChange={({ target }) => setExpirationDate(target.value)}
              />
              <img
                className={styles.selectStudent_placeholder}
                src={iconCalendar}
                alt=""
              />
            </div>
          </div>
          <div className={styles.selectStudent_buttons}>
            <button className={styles.selectStudent_button}>Salvar</button>
            <Link
              to="/login/aluno/lista"
              className={styles.selectStudent_button_cancelar}
            >
              Cancelar
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SelectStudent;
