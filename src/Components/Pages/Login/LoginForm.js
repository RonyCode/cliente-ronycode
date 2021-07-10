import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserStorage";
import styles from "./LoginForm.module.css";
function LoginForm() {
  const [email, setEmail] = React.useState("");
  const [imgReveal, setimgReveal] = React.useState(
    "https://i.ibb.co/BzZZ8wZ/3844443-disable-eye-inactive-see-show-view-watch-110296.png"
  );
  const [pass, setPass] = React.useState("");
  const [revelPass, setRevelPass] = React.useState("password");
  const { userLogin, src } = React.useContext(UserContext);

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
        <div>
          <h2 className={styles.subtittle + " animeRight"}>Espaço Educar</h2>
        </div>
        <div className={styles.columnRight + " animeLeft"}>
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
              <div className={styles.div_input_pass}>
                <input
                  className={styles.input}
                  // placeholder="&#61475;"
                  type={revelPass}
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

            <button className={styles.button}>Entrar</button>
          </form>

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
        </div>
        <Link className={styles.linkSign + " animeLeft"} to="/login/cadastrar">
          Não tem login? Cadastre-se
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;
