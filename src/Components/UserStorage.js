import React from "react";
import { GET_USER, POST_LOGIN } from "../api/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [id, setId] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [token, setToken] = React.useState(null);
  const [username, setUsername] = React.useState(null);
  const [photo_name, setPhotoName] = React.useState(null);
  const [size, setSize] = React.useState(null);
  const [src, setSrc] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [brand, setBrand] = React.useState("");
  const [link, setLink] = React.useState("");
  const navigate = useNavigate();

  const userLogout = React.useCallback(
    async function () {
      setId(null);
      setEmail(null);
      setUsername(null);
      setPhotoName(null);
      setSize(null);
      setSrc(null);
      setError(null);
      setLogin(false);
      setLoading(false);
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("img_profile");
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
      const { id, email, username, token, photo_name, size, src } =
        await tokenRes.data;
      window.localStorage.setItem("token", token);
      setId(id);
      setEmail(email);
      setToken(token);
      setUsername(username.split(" ", 1));
      const nameTrated = photo_name.split("_");
      nameTrated.shift();
      setPhotoName(nameTrated);
      setSize(size);
      setSrc(src);
      if (!tokenRes) throw new Error("Erro: falha ao se logar");
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  function parseJwt(tokenData) {
    const base64Url = tokenData.split(".")[1];
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
      const tokenLocal = window.localStorage.getItem("token");

      if (tokenLocal) {
        try {
          setLogin(true);
          setError(null);
          setLoading(true);
          const tokenDecode = parseJwt(tokenLocal);
          const formData = new FormData();
          const emailPost = tokenDecode.data[0];
          formData.append("email", emailPost);
          const { url, options } = GET_USER(formData);
          const tokenRes = await axios(url, options);
          const { id, email, username, photo_name, size, src } =
            await tokenRes.data;
          setId(id);
          setEmail(email);
          setToken(tokenLocal);
          setUsername(username.split(" ", 1));
          const nameTrated = photo_name.split("_");
          nameTrated.shift();
          setPhotoName(nameTrated);
          setSrc(src);
          setSize(size);
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
          id,
          email,
          username,
          token,
          photo_name,
          size,
          src,
          userLogout,
          error,
          login,
          loading,
          setBrand,
          brand,
          link,
          setLink,
        }}
      >
        {children}
      </UserContext.Provider>
    </div>
  );
};
