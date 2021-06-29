import React from "react";
import { POST_LOGIN } from "../api/api";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  const userLogout = React.useCallback(
    async function () {
      setData(null);
      setError(null);
      setLogin(false);
      setLoading(false);
      window.localStorage.removeItem("token");
      navigate("/login");
    },
    [navigate]
  );

  async function userLogin(body) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = POST_LOGIN(body);
      const tokenRes = await axios(url, options);
      console.log(tokenRes);
      if (!tokenRes.ok) throw new Error("Erro: falha ao se logar");
      const { token } = await tokenRes.json();
      window.localStorage.setItem("token", token);
      navigate("/login/dashboard");
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(
    ({ username, password }) => {
      async function autoLogin() {
        const token = window.localStorage.getItem("token");
        if (token) {
          try {
            setError(null);
            setLoading(true);
            const teste = userLogin({ username, password });
            console.log(teste);
          } catch (err) {
            await userLogout();
          } finally {
            setLoading(false);
          }
        } else {
          setLogin(false);
        }
      }
      autoLogin();
    },
    [userLogout]
  );

  return (
    <div>
      <UserContext.Provider
        value={{ userLogin, data, userLogout, error, login, loading }}
      >
        {children}
      </UserContext.Provider>
    </div>
  );
};
