import React from "react";
import { GET_USER, POST_LOGIN } from "../api/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
      setLogin(true);
      const { url, options } = POST_LOGIN(body);
      const tokenRes = await axios(url, options);
      const { username, data } = await tokenRes.data;
      window.localStorage.setItem("token", data);
      username.split(" ", 1);
      setData(username.split(" ", 1));
      navigate("/login/dashboard");
      if (!tokenRes) throw new Error("Erro: falha ao se logar");
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  function parseJwt(token) {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  }

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          setLogin(true);
          setError(null);
          setLoading(true);

          const tokenDecode = parseJwt(token);
          const formData = new FormData();
          const email = tokenDecode.data[0];

          formData.append("email", email);
          const { url, options } = GET_USER(formData);
          const tokenRes = await axios(url, options);
          const { username } = await tokenRes.data;
          setData(username.split(" ", 1));
          navigate("/login/dashboard");
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
  }, [userLogout]);

  return (
    <div>
      <UserContext.Provider
        value={{
          userLogin,
          data,
          userLogout,
          error,
          login,
          loading,
        }}
      >
        {children}
      </UserContext.Provider>
    </div>
  );
};
