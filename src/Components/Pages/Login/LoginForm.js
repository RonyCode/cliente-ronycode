import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserStorage";
import styles from "./LoginForm.module.css";

function LoginForm() {
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const { userLogin } = React.useContext(UserContext);

  const formData = new FormData();
  formData.append("email", email);
  formData.append("pass", pass);
  function handleSubmit(event) {
    event.preventDefault();
    formData && userLogin(formData);
  }

  return (
    <div className={styles.loginForm + " animeLeft"}>
      <div className={styles.columnLeft}>
        <img src="../../../Assets/pngwing.com.png" alt="" />
      </div>
      <div className={styles.columnRight}>
        <h1> Login </h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input
            className={styles.input}
            placeholder="digite seu email"
            type="text"
            name="email"
            value={email || ""}
            onChange={({ target }) => setEmail(target.value)}
          />
          <label htmlFor="pass" className={styles.label}>
            Senha:
          </label>
          <input
            className={styles.input}
            placeholder="digite sua senha"
            type="password"
            name="pass"
            value={pass || ""}
            onChange={({ target }) => setPass(target.value)}
          />
          <button className={styles.button}>Entrar</button>
        </form>
      </div>
      <div className={styles.loginFolder}>
        <Link className={styles.linkRecover} to="/login/recuperar">
          Esqueceu sua senha?
        </Link>
        <Link className={styles.link} to="/login/cadastrar">
          Não tem login? Cadastre-se
        </Link>
      </div>
      {<p></p>}
    </div>
  );
}

export default LoginForm;
