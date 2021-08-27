import React from "react";
import axios from "axios";
import { POST_ADD_STD } from "../../../api/api";
import styles from "./AddStudent.module.css";
import { Link } from "react-router-dom";
import iconAluno from "../../../Assets/user_icon-icons.com_48201.png";
import iconCalendar from "../../../Assets/3586371-calendar-date-event-schedule_107943.svg";
import iconPhone from "../../../Assets/phone_icon-icons.com_48251.png";
import iconEndereco from "../../../Assets/endereco.svg";
import iconEstudo from "../../../Assets/book-with-bookmark-educational-tool-outlined-symbol_icon-icons.com_57884.svg";
import iconEmail from "../../../Assets/email-outlined-envelope-back-symbol_icon-icons.com_57846.svg";

const AddStudent = () => {
  const [name, setName] = React.useState();
  const [phone, setPhone] = React.useState();
  const [email, setEmail] = React.useState();
  const [address, setAddress] = React.useState();
  const [birthday, setBirthday] = React.useState();
  const [report, setReport] = React.useState();
  const [grade, setGrade] = React.useState();
  const [registrationDate, setRegistrationDate] = React.useState();
  const [expirationDate, setExpirationDate] = React.useState();
  const [result, setResult] = React.useState();

  const formData = new FormData();
  formData.append("name", name);
  formData.append("phone", phone);
  formData.append("email", email);
  formData.append("address", address);
  formData.append("birthday", birthday);
  formData.append("report", report);
  formData.append("grade", grade);
  formData.append("registration_date", registrationDate);
  formData.append("expiration_date", expirationDate);
  formData.append("result", result);

  function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = POST_ADD_STD(formData);

    axios(url, options)
      .then(function (response) {
        console.log("Success: ", response.data);
      })
      .catch(function (error) {
        console.log("Error: ", error.response.data);
      });
  }

  return (
    window.localStorage.getItem("token") && (
      <div className={styles.add_student}>
        <form className={styles.add_student_container} onSubmit={handleSubmit}>
          <div className={styles.add_student_input_div}>
            <label className={styles.add_student_input_label}>Nome:</label>
            <input
              className={styles.add_student_input}
              placeholder="digite seu nome"
              type="text"
              name="name"
              value={name || ""}
              onChange={({ target }) => setName(target.value)}
            />
            <img
              className={styles.add_student_icon}
              src={iconAluno}
              alt="icone aluno"
            />
          </div>
          <div className={styles.add_student_input_div}>
            <label className={styles.add_student_input_label}>Email:</label>
            <input
              className={styles.add_student_input}
              placeholder="digite seu email"
              type="email"
              name="email"
              value={email || ""}
              onChange={({ target }) => setEmail(target.value)}
            />
            <img
              className={styles.add_student_icon}
              src={iconEmail}
              alt="icone email"
            />
          </div>
          <div className={styles.add_student_input_div}>
            <label className={styles.add_student_input_label}>Endereço:</label>
            <input
              className={styles.add_student_input}
              placeholder="digite seu endereço"
              type="text"
              name="address"
              value={address || ""}
              onChange={({ target }) => setAddress(target.value)}
            />
            <img
              className={styles.add_student_icon}
              src={iconEndereco}
              alt="icone endereço"
            />
          </div>
          <div className={styles.add_student_input_div}>
            <label className={styles.add_student_input_label}>
              Escolaridade:
            </label>
            <input
              className={styles.add_student_input}
              placeholder="digite sua escolaridade"
              type="text"
              name="grade"
              value={grade || ""}
              onChange={({ target }) => setGrade(target.value)}
            />
            <img
              className={styles.add_student_icon}
              src={iconEstudo}
              alt="icone escolaridade"
            />
          </div>
          <div className={styles.add_student_input_date}>
            <div>
              <label className={styles.add_student_input_label}>
                Telefone:
              </label>
              <input
                className={styles.add_student_input}
                placeholder="(99) 99999-9999"
                type="text"
                name="phone"
                value={phone || ""}
                onChange={({ target }) => setPhone(target.value)}
              />
              <img
                className={styles.add_student_icon_date}
                src={iconPhone}
                alt="icone telefone"
              />
            </div>
            <div>
              <label className={styles.add_student_input_label}>
                Data Nasc.:
              </label>
              <input
                align="center"
                className={styles.add_student_input}
                placeholder="xx/xx/xxxx"
                type="text"
                name="birthday"
                value={birthday || ""}
                onChange={({ target }) => setBirthday(target.value)}
              />
              <img
                className={styles.add_student_icon_date}
                src={iconCalendar}
                alt="icone aniversario"
              />
            </div>
            <div>
              <label className={styles.add_student_input_label}>
                Data da Mat.:
              </label>
              <input
                className={styles.add_student_input}
                placeholder="xx/xx/xxxx"
                type="text"
                name="registrationDate"
                value={registrationDate || ""}
                onChange={({ target }) => setRegistrationDate(target.value)}
              />
              <img
                className={styles.add_student_icon_date}
                src={iconCalendar}
                alt="icone data matricula"
              />
            </div>

            <div>
              <label className={styles.add_student_input_label}>
                Vencimento:
              </label>
              <input
                className={styles.add_student_input}
                placeholder="xx/xx/xxxx"
                type="text"
                name="expirationDate"
                value={expirationDate || ""}
                onChange={({ target }) => setExpirationDate(target.value)}
              />
              <img
                className={styles.add_student_icon_date}
                src={iconCalendar}
                alt="icone data vencimento"
              />
            </div>
          </div>
          <div className={styles.add_student_buttons}>
            <button className={styles.add_student_button}>Enviar</button>
            <Link
              to="/login/usuario"
              className={styles.add_student_button_cancel}
            >
              Cancelar
            </Link>
          </div>
        </form>
      </div>
    )
  );
};

export default AddStudent;
