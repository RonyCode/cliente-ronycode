import React from "react";
import { POST_RESET_LOGIN } from "../../../api/api";
import axios from "axios";

const LoginReset = () => {
  const test = document.URL.split("?hash=");
  const [email, setEmail] = React.useState();
  const [pass, setPass] = React.useState();
  const formData = new FormData();
  formData.append("email", email);
  formData.append("pass", pass);
  formData.append("hash", test[1]);

  function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = POST_RESET_LOGIN(formData);

    axios(url, options)
      .then((response) => {
        console.log("Success: ", response);
      })
      .catch((error) => {
        console.log("Error: ", error.response.data);
      });
  }

  return (
    <div className="App">
      <h1> Recuperando sua senha</h1>
      <form onSubmit={handleSubmit}>
        <label>Digite seu login:</label>
        <input
          placeholder="digite seu email"
          type="text"
          name="email"
          value={email || ""}
          onChange={({ target }) => setEmail(target.value)}
        />
        <p></p>
        <label>Digite nova senha:</label>
        <input
          placeholder="digite sua senha"
          type="password"
          name="pass"
          value={pass || ""}
          onChange={({ target }) => setPass(target.value)}
        />
        <p></p>
        <label>Repita nova senha:</label>
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

      {email}
      {<p></p>}
      {pass}
    </div>
  );
};

export default LoginReset;
