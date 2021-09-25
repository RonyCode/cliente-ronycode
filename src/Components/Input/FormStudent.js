import React from "react";
import { Link } from "react-router-dom";
import styles from "./FormStudent.module.css";
import iconAluno from "../../Assets/user_icon-icons.com_48201.png";
import iconCalendar from "../../Assets/3586371-calendar-date-event-schedule_107943.svg";
import iconPhone from "../../Assets/phone_icon-icons.com_48251.png";
import iconEndereco from "../../Assets/endereco.svg";
import iconEstudo from "../../Assets/book-with-bookmark-educational-tool-outlined-symbol_icon-icons.com_57884.svg";
import iconEmail from "../../Assets/email-outlined-envelope-back-symbol_icon-icons.com_57846.svg";
import iconContrato from "../../Assets/contract_icon-icons.com_64813.png";
import iconSelect from "../../Assets/check.png";
import iconHorario from "../../Assets/clock-time-control-tool-1_icon-icons.com_56823.svg";
import iconSeg from "../../Assets/seg.png";
import iconTer from "../../Assets/ter.png";
import iconQua from "../../Assets/qua.png";
import iconQui from "../../Assets/qui.png";
import iconSex from "../../Assets/sex.png";

const FormStudent = ({
  onSubmit,
  valueName,
  valueEmail,
  valueAddress,
  valuePhone,
  valueGrade,
  valueSituation,
  valueBirthday,
  valueRegistrationDate,
  valueDatePayment,
  valueDateExpiresContract,
  valueContractNumber,
  setName,
  setEmail,
  setAddress,
  setPhone,
  setGrade,
  setSituation,
  setBirthday,
  setRegistrationDate,
  setDatePayment,
  setDateExpiresContract,
  setContractNumber,
  disabledSelect = false,
  buttonApears = "",
  readSelect = false,
  required = false,
}) => {
  const [peopleInfo, setPeopleInfo] = React.useState([]);

  return (
    <div className={styles.add_student}>
      <form className={styles.add_student_container} onSubmit={onSubmit}>
        <div className={styles.add_student_div}>
          <label className={styles.add_student_input_label}>Nome:</label>
          <input
            required={required}
            readOnly={readSelect}
            placeholder="digite seu nome"
            type="text"
            name="name"
            value={valueName || ""}
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
            required={required}
            readOnly={readSelect}
            placeholder="digite seu email"
            type="email"
            name="email"
            value={valueEmail || ""}
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
            required={required}
            readOnly={readSelect}
            placeholder="digite seu endereço"
            type="text"
            name="address"
            value={valueAddress || ""}
            onChange={({ target }) => setAddress(target.value)}
          />
          <img
            className={styles.add_student_icon}
            src={iconEndereco}
            alt="icone endereço"
          />
        </div>
        <div className={styles.add_student_div}>
          <div className={styles.add_student_div_select}>
            <label className={styles.add_student_input_label}>
              Escolaridade:
            </label>{" "}
            <div className={styles.add_student_select_style}>
              <select
                disabled={disabledSelect}
                className={styles.add_student_select}
                value={valueGrade || ""}
                onChange={({ target }) => setGrade(target.value)}
              >
                <option defaultValue={true} hidden={true}>
                  Selecione
                </option>
                <option value="alfabetização">Alfabetização</option>
                <option value="1º ano">1º Ano</option>
                <option value="2º ano">2º Ano</option>
                <option value="3º ano">3º Ano</option>
                <option value="4º ano">4º Ano</option>
                <option value="5º ano">5º Ano</option>
              </select>
              <img
                className={styles.add_student_icon}
                src={iconEstudo}
                alt="icone escolaridade"
              />
            </div>
          </div>
        </div>

        <div className={styles.add_student_div}>
          <label className={styles.add_student_input_label}>Telefone:</label>
          <input
            required={required}
            readOnly={readSelect}
            placeholder="(__) _____-____"
            className={styles.add_student_input}
            type="text"
            value={valuePhone || ""}
            onChange={({ target }) =>
              setPhone(
                target.value
                  .replace(/\D/g, "")
                  .replace(/(\d{2})(\d)/, "($1) $2")
                  .replace(/(\d{5})(\d)/, "$1-$2")
                  .replace(/(-\d{4})\d+?$/, "$1")
              )
            }
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
            required={required}
            readOnly={readSelect}
            placeholder="_____"
            className={styles.add_student_input}
            type="text"
            value={valueContractNumber || ""}
            onChange={({ target }) =>
              setContractNumber(
                target.value.replace(/\D/g, "").replace(/(\d{5})\d+?$/, "$1")
              )
            }
          />
          <img
            className={styles.add_student_icon}
            src={iconContrato}
            alt="icone contrato"
          />
        </div>

        <div className={styles.add_student_div_select}>
          <label>Situação:</label>
          <div className={styles.add_student_select_style}>
            <select
              disabled={disabledSelect}
              className={styles.add_student_select}
              value={valueSituation || ""}
              onChange={({ target }) => setSituation(target.value)}
            >
              <option defaultValue={true} hidden={true}>
                Selecione
              </option>
              <option value="adimplente">Adimplente</option>
              <option value="inadimplemte">Inadimplente</option>
            </select>
            <img
              className={styles.add_student_icon}
              src={iconSelect}
              alt="icone selecionar"
            />
          </div>
        </div>

        {/*<div className={styles.add_student_div}>*/}
        {/*<label className={styles.add_student_label}>Horários:</label>*/}
        {/*<select*/}
        {/*  disabled={disabledSelect}*/}
        {/*  className={styles.add_student_select}*/}
        {/*  value={valueGrade || ""}*/}
        {/*  onChange={({ target }) => setGrade(target.value)}*/}
        {/*>*/}
        {/*  <option defaultValue={true} hidden={true}>*/}
        {/*    Selecione*/}
        {/*  </option>*/}
        {/*  <option disabled={true}>Segunda-Feira</option>*/}
        {/*  <option value="seg 08h:00min as 09h:00min">*/}
        {/*    <span>*/}
        {/*      <img src={iconSeg} alt="" />*/}
        {/*    </span>{" "}*/}
        {/*    Seg 08h:00min as 09h:00min*/}
        {/*  </option>*/}
        {/*  <option value="seg 09h:00min as 10h:00min">*/}
        {/*    Seg 09h:00min as 10h:00min*/}
        {/*  </option>*/}
        {/*  <option value="seg 10h:00min as 11h:30min">*/}
        {/*    Seg 10h:00min as 11h:30min*/}
        {/*  </option>*/}
        {/*  <option value="seg 13h:30min as 15h:00min">*/}
        {/*    Seg 13h:30min as 15h:00min*/}
        {/*  </option>*/}
        {/*  <option value="seg 15h:00min as 16h:00min">*/}
        {/*    Seg 15h:30min as 16h:30min*/}
        {/*  </option>*/}
        {/*  <option value="seg 16h:30min as 17h:30min">*/}
        {/*    Seg 16h:30min as 17h:30min*/}
        {/*  </option>{" "}*/}
        {/*  <option disabled={true}>Terça-Feira</option>*/}
        {/*  <option value="ter 08h:00min as 09h:00min">*/}
        {/*    Ter 08h:00min as 09h:00min*/}
        {/*  </option>*/}
        {/*  <option value="ter 09h:00min as 10h:00min">*/}
        {/*    Ter 09h:00min as 10h:00min*/}
        {/*  </option>*/}
        {/*  <option value="ter 10h:00min as 11h:30min">*/}
        {/*    Ter 10h:00min as 11h:30min*/}
        {/*  </option>*/}
        {/*  <option value="ter 13h:30min as 15h:00min">*/}
        {/*    Ter 13h:30min as 15h:00min*/}
        {/*  </option>*/}
        {/*  <option value="ter 15h:00min as 16h:00min">*/}
        {/*    Ter 15h:30min as 16h:30min*/}
        {/*  </option>*/}
        {/*  <option value="ter 16h:30min as 17h:30min">*/}
        {/*    Ter 16h:30min as 17h:30min*/}
        {/*  </option>{" "}*/}
        {/*  <option disabled={true}>Quarta-Feira</option>*/}
        {/*  <option value="qua 08h:00min as 09h:00min">*/}
        {/*    Qua 08h:00min as 09h:00min*/}
        {/*  </option>*/}
        {/*  <option value="qua 09h:00min as 10h:00min">*/}
        {/*    Qua 09h:00min as 10h:00min*/}
        {/*  </option>*/}
        {/*  <option value="qua 10h:00min as 11h:30min">*/}
        {/*    Qua 10h:00min as 11h:30min*/}
        {/*  </option>*/}
        {/*  <option value="qua 13h:30min as 15h:00min">*/}
        {/*    Qua 13h:30min as 15h:00min*/}
        {/*  </option>*/}
        {/*  <option value="qua 15h:00min as 16h:00min">*/}
        {/*    Qua 15h:30min as 16h:30min*/}
        {/*  </option>*/}
        {/*  <option value="qua 16h:30min as 17h:30min">*/}
        {/*    Qua 16h:30min as 17h:30min*/}
        {/*  </option>{" "}*/}
        {/*  <option disabled={true}>Quinta-Feira</option>*/}
        {/*  <option value="qui 08h:00min as 09h:00min">*/}
        {/*    Qui 08h:00min as 09h:00min*/}
        {/*  </option>*/}
        {/*  <option value="qui 09h:00min as 10h:00min">*/}
        {/*    Qui 09h:00min as 10h:00min*/}
        {/*  </option>*/}
        {/*  <option value="qui 10h:00min as 11h:30min">*/}
        {/*    Qui 10h:00min as 11h:30min*/}
        {/*  </option>*/}
        {/*  <option value="qui 13h:30min as 15h:00min">*/}
        {/*    Qui 13h:30min as 15h:00min*/}
        {/*  </option>*/}
        {/*  <option value="qui 15h:00min as 16h:00min">*/}
        {/*    Qui 15h:30min as 16h:30min*/}
        {/*  </option>*/}
        {/*  <option value="qui 16h:30min as 17h:30min">*/}
        {/*    Qui 16h:30min as 17h:30min*/}
        {/*  </option>{" "}*/}
        {/*  <option disabled={true}>Sexta-Feira</option>*/}
        {/*  <option value="sex 08h:00min as 09h:00min">*/}
        {/*    Sex 08h:00min as 09h:00min*/}
        {/*  </option>*/}
        {/*  <option value="sex 09h:00min as 10h:00min">*/}
        {/*    Sex 09h:00min as 10h:00min*/}
        {/*  </option>*/}
        {/*  <option value="sex 10h:00min as 11h:30min">*/}
        {/*    Sex 10h:00min as 11h:30min*/}
        {/*  </option>*/}
        {/*  <option value="sex 13h:30min as 15h:00min">*/}
        {/*    Sex 13h:30min as 15h:00min*/}
        {/*  </option>*/}
        {/*  <option value="sex 15h:00min as 16h:00min">*/}
        {/*    Sex 15h:30min as 16h:30min*/}
        {/*  </option>*/}
        {/*  <option value="sex 16h:30min as 17h:30min">*/}
        {/*    Sex 16h:30min as 17h:30min*/}
        {/*  </option>{" "}*/}
        {/*</select>*/}
        {/*  <img*/}
        {/*    className={styles.add_student_icon}*/}
        {/*    src={iconHorario}*/}
        {/*    alt="icone horario"*/}
        {/*  />*/}
        {/*</div>*/}

        <div className={styles.add_student_div}>
          <label>Data Pgto.:</label>
          <input
            required={required}
            readOnly={readSelect}
            placeholder="__/__/____"
            className={styles.add_student_input}
            type="text"
            value={valueDatePayment || ""}
            onChange={({ target }) =>
              setDatePayment(
                target.value
                  .replace(/\D/g, "")
                  .replace(/(\d{2})(\d)/, "$1/$2")
                  .replace(/(\d{2})(\d)/, "$1/$2")
                  .replace(/(\d{4})\d+?$/, "$1")
              )
            }
          />
          <img className={styles.add_student_icon} src={iconCalendar} alt="" />
        </div>
        <div className={styles.add_student_div}>
          <label className={styles.add_student_input_label}>Data Nasc.:</label>
          <input
            required={required}
            readOnly={readSelect}
            placeholder="__/__/____"
            align="center"
            className={styles.add_student_input}
            type="text"
            name="birthday"
            value={valueBirthday || ""}
            onChange={({ target }) =>
              setBirthday(
                target.value
                  .replace(/\D/g, "")
                  .replace(/(\d{2})(\d)/, "$1/$2")
                  .replace(/(\d{2})(\d)/, "$1/$2")
                  .replace(/(\d{4})\d+?$/, "$1")
              )
            }
          />
          <img
            className={styles.add_student_icon}
            src={iconCalendar}
            alt="icone aniversario"
          />
        </div>

        <div className={styles.add_student_checkbox}>
          <label className={styles.add_student_label}>Dia de Aula:</label>
          <div className={styles.student_checkbox_list}>
            {" "}
            <label>
              <input
                type="checkbox"
                onChange={(e) => setRegistrationDate(e.target.value)}
                name="seg"
              />
              <img
                className={styles.add_checkbox_icon}
                src={iconSeg}
                alt="icone segunda"
              />
            </label>{" "}
            <label>
              <input
                type="checkbox"
                onChange={(e) => setRegistrationDate(e.target.value)}
                name="ter"
              />
              <img
                className={styles.add_checkbox_icon}
                src={iconTer}
                alt="icone terça"
              />
            </label>{" "}
            <label>
              <input
                type="checkbox"
                onChange={(e) => setRegistrationDate(e.target.value)}
                name="qua"
              />
              <img
                className={styles.add_checkbox_icon}
                src={iconQua}
                alt="icone quarta"
              />
            </label>
            <label>
              <input
                type="checkbox"
                onChange={(e) => setRegistrationDate(e.target.value)}
                name="qui"
              />
              <img
                className={styles.add_checkbox_icon}
                src={iconQui}
                alt="icone quinta"
              />
            </label>
            <label>
              <input
                type="checkbox"
                onChange={(e) => setRegistrationDate(e.target.value)}
                name="sex"
              />
              <img
                className={styles.add_checkbox_icon}
                src={iconSex}
                alt="icone sexta"
              />
            </label>
          </div>
        </div>

        {/*<div className={styles.add_student_div}>*/}
        {/*  <label className={styles.add_student_input_label}>*/}
        {/*    Data da Mat.:*/}
        {/*  </label>*/}
        {/*  <input*/}
        {/*    readOnly={readSelect}*/}
        {/*    placeholder="__/__/____"*/}
        {/*    className={styles.add_student_input}*/}
        {/*    type="text"*/}
        {/*    value={valueRegistrationDate || ""}*/}
        {/*    onChange={({ target }) =>*/}
        {/*      setRegistrationDate(*/}
        {/*        target.value*/}
        {/*          .replace(/\D/g, "")*/}
        {/*          .replace(/(\d{2})(\d)/, "$1/$2")*/}
        {/*          .replace(/(\d{2})(\d)/, "$1/$2")*/}
        {/*          .replace(/(\d{4})\d+?$/, "$1")*/}
        {/*      )*/}
        {/*    }*/}
        {/*  />*/}
        {/*  <img*/}
        {/*    className={styles.add_student_icon}*/}
        {/*    src={iconCalendar}*/}
        {/*    alt="icone data matricula"*/}
        {/*  />*/}
        {/*</div>*/}
        <div className={styles.add_student_div}>
          <Link className={styles.add_student_link} to="/login/aluno/lista">
            Cancelar
          </Link>
        </div>
        <div className={styles.add_student_div}>
          <button style={{ display: buttonApears }}>Enviar</button>
        </div>
      </form>
    </div>
  );
};
export default FormStudent;
