import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserStorage";
import styles from "./LoginForm.module.css";
function LoginForm() {
  const [email, setEmail] = React.useState("");
  const [imgReveal, setimgReveal] = React.useState(
    "https://i.ibb.co/BzZZ8wZ/3844443-disable-eye-inactive-see-show-view-watch-110296.png"
  );
  const [pass, setPass] = React.useState("");
  const [revelPass, setRevelPass] = React.useState("password");
  const { userLogin, error, loading } = React.useContext(UserContext);

  const formData = new FormData();
  formData.append("email", email);
  formData.append("pass", pass);

  function handleSubmit(event) {
    event.preventDefault();
    formData && userLogin(formData);
  }

  const handleRevelPass = () => {
    if (revelPass === "password") {
      setRevelPass("text");
      setimgReveal(
        "https://i.ibb.co/X5SYD3x/3844441-eye-see-show-view-watch-110305.png"
      );
    } else {
      setRevelPass("password");
      setimgReveal(
        "https://i.ibb.co/BzZZ8wZ/3844443-disable-eye-inactive-see-show-view-watch-110296.png"
      );
    }
  };

  return (
    <div className={styles.loginForm}>
      <h1 className={styles.tittle}> Login </h1>
      <div className={styles.container}>
        <div className={styles.columnLeft + " animeRight"}></div>

        <div className={styles.columnRight + " animeLeft"}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.div_input}>
              <label htmlFor="email" className={styles.label}>
                Email:
              </label>
              <input
                className={styles.input}
                placeholder="&#61447;"
                type="email"
                name="email"
                value={email || ""}
                onChange={({ target }) => setEmail(target.value)}
              />
            </div>
            <div className={styles.div_input}>
              <label htmlFor="pass" className={styles.label}>
                Senha:
              </label>
              <div className={styles.div_input_pass}>
                <input
                  className={styles.input}
                  type={revelPass}
                  required
                  name="pass"
                  value={pass || ""}
                  onChange={({ target }) => setPass(target.value)}
                />
                <img
                  onClick={handleRevelPass}
                  className={styles.img_icon_reveal}
                  src={imgReveal}
                  alt="eye-button"
                  border="0"
                />
              </div>
            </div>
            {loading === true ? (
              <button disabled className={styles.button}>
                Entrando...
              </button>
            ) : (
              <button className={styles.button}>Entrar</button>
            )}
          </form>
          {error && "Senha ou email inválidos tente novamente"}

          <div className={styles.loginFolder}>
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
    </div>
  );
}

export default LoginForm;
