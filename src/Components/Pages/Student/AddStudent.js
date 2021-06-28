import React from "react";
import axios from "axios";
import { POST_ADD_STD } from "../../../api/api";

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
    <div className="App">
      <h1> Add Student</h1>
      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input
          placeholder="digite seu nome"
          type="text"
          name="name"
          value={name || ""}
          onChange={({ target }) => setName(target.value)}
        />
        <p></p>
        <label>Telefone:</label>
        <input
          placeholder="digite seu nome"
          type="text"
          name="phone"
          value={phone || ""}
          onChange={({ target }) => setPhone(target.value)}
        />
        <p></p>
        <label>Email:</label>
        <input
          placeholder="digite seu nome"
          type="email"
          name="email"
          value={email || ""}
          onChange={({ target }) => setEmail(target.value)}
        />
        <p></p>
        <label>Endereço:</label>
        <input
          placeholder="digite seu nome"
          type="text"
          name="address"
          value={address || ""}
          onChange={({ target }) => setAddress(target.value)}
        />
        <p></p>
        <label>Data Nascimento:</label>
        <input
          placeholder="digite seu nome"
          type="text"
          name="birthday"
          value={birthday || ""}
          onChange={({ target }) => setBirthday(target.value)}
        />
        <p></p>
        <label>Boletim escolar:</label>
        <input
          placeholder="digite seu nome"
          type="text"
          name="report"
          value={report || ""}
          onChange={({ target }) => setReport(target.value)}
        />
        <p></p>
        <label>Escolaridade:</label>
        <input
          placeholder="digite sua senha"
          type="text"
          name="grade"
          value={grade || ""}
          onChange={({ target }) => setGrade(target.value)}
        />
        <p></p>
        <label>Data de Mátricula:</label>
        <input
          placeholder="digite sua senha"
          type="text"
          name="registrationDate"
          value={registrationDate || ""}
          onChange={({ target }) => setRegistrationDate(target.value)}
        />
        <p></p>
        <label>Data de término do curso:</label>
        <input
          placeholder="digite sua senha"
          type="text"
          name="expirationDate"
          value={expirationDate || ""}
          onChange={({ target }) => setExpirationDate(target.value)}
        />{" "}
        <p></p>
        <label>Resultado Final:</label>
        <input
          placeholder="digite sua senha"
          type="text"
          name="result"
          value={result || ""}
          onChange={({ target }) => setResult(target.value)}
        />
        <button>Enviar</button>
      </form>
      {<p></p>}
    </div>
  );
};

export default AddStudent;
