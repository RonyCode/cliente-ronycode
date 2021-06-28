import React from "react";
import { PHOTO_USER } from "../../../api/api";
import axios from "axios";
import { useParams } from "react-router-dom";

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

const UserProfile = () => {
  const { id } = useParams();

  // const user = window.localStorage.getItem("token");
  // const imp = parseJwt(user);

  const [img, setImg] = React.useState("");
  const [imgSrc, setImgSrc] = React.useState("");
  const formData = new FormData();
  // let photo = document.querySelector(".photo");
  // const test = photo.value;
  // let teste = "";
  // if (photo) {
  //   teste = photo.getAttribute("name");
  //   console.log(teste);
  // }

  formData.append("photo", img);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { url, options } = PHOTO_USER(formData);
      const response = await axios(url, options);
      console.log(response.data);
      setImgSrc(response.data);
    } catch (response) {
      console.log(response);
    }
  };
  const handleFile = (e) => {
    setImg(e.target.files[0]);
  };

  return (
    <div className="App">
      <h1> PERFIL</h1>

      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input
          placeholder="digite seu nome"
          type="file"
          name="photo"
          className="photo"
          onChange={(e) => handleFile(e)}
        />

        <img src={imgSrc.data} alt="" />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default UserProfile;
