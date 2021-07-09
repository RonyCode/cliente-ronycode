import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserStorage";
import styles from "./LoginForm.module.css";

function LoginForm() {
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [revelPass, setRevelPass] = React.useState("password");
  const { userLogin } = React.useContext(UserContext);

  const formData = new FormData();
  formData.append("email", email);
  formData.append("pass", pass);

  // const btnrevel = document.addEventListener("input");

  function handleSubmit(event) {
    event.preventDefault();
    formData && userLogin(formData);
  }

  const handleRevelPass = () => {
    revelPass === "password" ? setRevelPass("text") : setRevelPass("password");
  };

  return (
    <div className={styles.loginForm}>
      <h1 className={styles.tittle}> Login </h1>
      <div className={styles.container}>
        <div className={styles.columnLeft + " animeLeft"}></div>
        <div className={styles.columnRight + " animeLeft"}>
          <div className={styles.imgUser}>
            <img
              src="https://i.ibb.co/S7r0zFb/novo-logo-composto.png"
              alt="novo-logo-composto"
              border="0"
            />
          </div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.div_input}>
              <label htmlFor="email" className={styles.label}>
                Email:
              </label>
              <input
                className={styles.input}
                placeholder="&#61447;"
                type="text"
                name="email"
                value={email || ""}
                onChange={({ target }) => setEmail(target.value)}
              />
            </div>

            <div className={styles.div_input}>
              <label htmlFor="pass" className={styles.label}>
                Senha:
              </label>
              <input
                id="inputPass"
                className={styles.input}
                placeholder="&#61475;"
                type={revelPass}
                name="pass"
                value={pass || ""}
                onChange={({ target }) => setPass(target.value)}
              />
              <span className={styles.revelPass} onClick={handleRevelPass}>
                &copy;
              </span>
            </div>

            <button className={styles.button}>Entrar</button>
          </form>
        </div>
        <div>
          <h2 className={styles.subtittle + " animeRight"}>Espaço Educar</h2>
        </div>
        <div className={styles.loginFolder + " animeRight"}>
          <div className={styles.divCheckbox}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="save_login"
              name="save_login"
            />
            <label className={styles.labelCheckbox} htmlFor="save_login">
              relembrar meu login
            </label>
          </div>
          <Link className={styles.linkRecover} to="/login/recuperar">
            Esqueceu sua senha?
          </Link>
        </div>
        <Link className={styles.linkSign} to="/login/cadastrar">
          Não tem login? Cadastre-se
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;
