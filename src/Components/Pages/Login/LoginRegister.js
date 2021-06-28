import React from "react";
import { POST_CREATE_LOGIN } from "../../../api/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginRegister = () => {
  const [email, setEmail] = React.useState();
  const [pass, setPass] = React.useState();
  const [name, setName] = React.useState();
  const navigate = useNavigate();

  const formData = new FormData();
  formData.append("email", email);
  formData.append("pass", pass);
  formData.append("name", name);

  function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = POST_CREATE_LOGIN(formData);

    axios(url, options)
      .then((response) => {
        console.log("Success: ", response);
        if (response.ok) {
          alert("Cadastrado com sucesso");
          navigate("/login");
        }
      })
      .catch((error) => {
        console.log("Error: ", error.response.data);
      });
  }

  return (
    <div className="App">
      <h1> Casdastrar</h1>
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
        <label>Email:</label>
        <input
          placeholder="digite seu email"
          type="text"
          name="email"
          value={email || ""}
          onChange={({ target }) => setEmail(target.value)}
        />
        <p></p>
        <label>Senha:</label>
        <input
          placeholder="digite sua senha"
          type="password"
          name="pass"
          value={pass || ""}
          onChange={({ target }) => setPass(target.value)}
        />
        <button>Enviar</button>
      </form>
      {<p></p>}
      {name}
      {<p></p>}
      {email}
      {<p></p>}
      {pass}
    </div>
  );
};

export default LoginRegister;
