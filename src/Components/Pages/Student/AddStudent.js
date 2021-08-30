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
import iconContrato from "../../../Assets/contract_icon-icons.com_64813.png";
import iconSituacao from "../../../Assets/check.png";

const AddStudent = () => {
  const [name, setName] = React.useState();
  const [phone, setPhone] = React.useState();
  const [email, setEmail] = React.useState();
  const [address, setAddress] = React.useState();
  const [birthday, setBirthday] = React.useState();
  const [grade, setGrade] = React.useState();
  const [contractNumber, setContractNumber] = React.useState();
  const [situation, setSituation] = React.useState();
  const [datePayment, setDatePayment] = React.useState();
  const [registrationDate, setRegistrationDate] = React.useState();
  const [dateExpiresContract, setDateExpiresContract] = React.useState();

  const options = [
    {
      label: "Adimplente",
      value: "adimplente",
    },
    {
      label: "Inadimplente",
      value: "inadimplente",
    },
  ];

  const formData = new FormData();
  formData.append("name", name);
  formData.append("phone", phone);
  formData.append("email", email);
  formData.append("address", address);
  formData.append("birthday", birthday);
  formData.append("grade", grade);
  formData.append("contract_number", contractNumber);
  formData.append("registration_date", registrationDate);
  formData.append("date_expires_contract", dateExpiresContract);
  formData.append("date_payment", datePayment);
  formData.append("situation", situation);

  function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = POST_ADD_STD(formData);

    axios(url, options)
      .then(function (response) {
        alert(response.data.message);
        console.log("Success: ", response.data.message);
      })
      .catch(function (error) {
        console.log("Error: ", error.response.data);
        alert(error.response.data.message);
      });
  }

  return (
    window.localStorage.getItem("token") && (
      <div className={styles.add_student}>
        <form className={styles.add_student_container} onSubmit={handleSubmit}>
          <div className={styles.add_student_div}>
            <label className={styles.add_student_input_label}>Nome:</label>
            <input
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

          <div className={styles.add_student_div}>
            <label className={styles.add_student_input_label}>Email:</label>
            <input
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

          <div className={styles.add_student_div}>
            <label className={styles.add_student_input_label}>Endereço:</label>
            <input
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

          <div className={styles.add_student_div}>
            <label className={styles.add_student_input_label}>
              Escolaridade:
            </label>
            <input
              placeholder="digite sua escolaridade"
              type="text"
              value={grade || ""}
              onChange={({ target }) => setGrade(target.value)}
            />
            <img
              className={styles.add_student_icon}
              src={iconEstudo}
              alt="icone escolaridade"
            />
          </div>

          <div className={styles.add_student_div}>
            <label className={styles.add_student_input_label}>Telefone:</label>
            <input
              className={styles.add_student_input}
              placeholder="(99) 99999-9999"
              type="text"
              value={phone || ""}
              onChange={({ target }) => setPhone(target.value)}
            />
            <img
              className={styles.add_student_icon}
              src={iconPhone}
              alt="icone telefone"
            />
          </div>

          <div className={styles.add_student_div}>
            <label>Contrato Nº:</label>
            <input
              className={styles.add_student_input}
              type="text"
              value={contractNumber || ""}
              onChange={({ target }) => setContractNumber(target.value)}
            />
            <img
              className={styles.add_student_icon}
              src={iconContrato}
              alt="icone contrato"
            />
          </div>

          <div className={styles.add_student_div}>
            <label>Situação:</label>
            <select onChange={({ target }) => setSituation(target.value)}>
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>

            <img
              className={styles.add_student_icon}
              src={iconSituacao}
              alt="icone situaçao"
            />
          </div>

          <div className={styles.add_student_div}>
            <label>Vencimento Cont.:</label>
            <input
              className={styles.add_student_input}
              type="text"
              placeholder="xx/xx/xxxx"
              value={dateExpiresContract || ""}
              onChange={({ target }) => setDateExpiresContract(target.value)}
            />
            <img
              className={styles.add_student_icon}
              src={iconCalendar}
              alt=""
            />
          </div>

          <div className={styles.add_student_div}>
            <label>Data Pgto.:</label>
            <input
              className={styles.add_student_input}
              type="text"
              placeholder="xx/xx/xxxx"
              value={datePayment || ""}
              onChange={({ target }) => setDatePayment(target.value)}
            />
            <img
              className={styles.add_student_icon}
              src={iconCalendar}
              alt=""
            />
          </div>
          <div className={styles.add_student_div}>
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
              className={styles.add_student_icon}
              src={iconCalendar}
              alt="icone aniversario"
            />
          </div>
          <div className={styles.add_student_div}>
            <label className={styles.add_student_input_label}>
              Data da Mat.:
            </label>
            <input
              className={styles.add_student_input}
              placeholder="xx/xx/xxxx"
              type="text"
              value={registrationDate || ""}
              onChange={({ target }) => setRegistrationDate(target.value)}
            />
            <img
              className={styles.add_student_icon}
              src={iconCalendar}
              alt="icone data matricula"
            />
          </div>
          <div className={styles.add_student_div}>
            <button>Enviar</button>
          </div>
          <div className={styles.add_student_div}>
            <Link className={styles.add_student_link} to="/login/usuario">
              Cancelar
            </Link>
          </div>
        </form>
      </div>
    )
  );
};

export default AddStudent;
