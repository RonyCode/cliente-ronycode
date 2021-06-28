import React from "react";
import { POST_RECOVER_LOGIN } from "../../../api/api";
import axios from "axios";

const LoginRecover = () => {
  const [email, setEmail] = React.useState(null);
  const formData = new FormData();
  formData.append("email", email);
  const { url, options } = POST_RECOVER_LOGIN(formData);
  const handleSubmit = (event) => {
    event.preventDefault();
    axios(url, options).then((res) => setEmail(res.data.message));
  };

  return (
    <div>
      <h1>Recuperar senha</h1>
      <label htmlFor="email">Email</label>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="digite seu email..."
          type="email"
          name="email"
          value={email || ""}
          onChange={({ target }) => setEmail(target.value)}
        />
        <button>Enviar</button>
      </form>
      {email}
    </div>
  );
};

export default LoginRecover;
