import React from "react";
import { Link } from "react-router-dom";
import { UserStorage } from "../../UserStorage";

function Auth() {
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const { userLogin, data, userLogout, error, login, loading } =
    React.useContext(UserStorage);

  const formData = new FormData();
  formData.append("email", email);
  formData.append("pass", pass);

  function handleSubmit(event) {
    event.preventDefault();
    userLogin(formData);
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
    </div>
  );
}

export default Auth;
