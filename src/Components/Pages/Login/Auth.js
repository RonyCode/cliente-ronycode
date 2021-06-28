import React from "react";
import axios from "axios";
import { POST_LOGIN } from "../../../api/api";
import { Link, useNavigate } from "react-router-dom";
import MayContext from "../../MyContext";
import MyContext from "../../MyContext";

function Auth() {
  const [pass, setPass] = React.useState();
  const { email, setEmail, id, setId } = React.useContext(MyContext);

  const formData = new FormData();
  const navigate = useNavigate();
  const data = React.useContext(MayContext);
  formData.append("email", email);
  formData.append("pass", pass);

  function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = POST_LOGIN(formData);

    axios(url, options)
      .then((response) => {
        console.log("Success: ", response);
        window.localStorage.setItem("token", response.data.data);
        console.log(response.data);
        setEmail(response.data.username);
        setId(response.data.id);
        console.log(response.data.id);
        if (response) navigate("/login/dashboard");
      })
      .catch((error) => {
        console.log("Error: ", error.response.data);
      });
  }
  console.log(data);
  return (
    <div className="App">
      <h1> login </h1>
      <form onSubmit={handleSubmit}>
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
      <Link to="/login/cadastrar">Não tem login? Cadastre-se</Link>
      {<p></p>}

      {email}
      {<p></p>}
      {pass}
    </div>
  );
}

export default Auth;
