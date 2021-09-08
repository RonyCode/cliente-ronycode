import React, { useContext } from "react";
import { PHOTO_USER } from "../../../api/api";
import axios from "axios";
import { UserContext } from "../../UserStorage";
import styles from "./UserProfile.module.css";
import Input from "../../Input/Input";

const UserProfile = () => {
  const [img, setImg] = React.useState("");
  const { src, id, photo_name, username, email } = useContext(UserContext);
  const formData = new FormData();
  formData.append("photo", img);
  formData.append("id", id);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { url, options } = PHOTO_USER(formData);
      const response = await axios(url, options);
      console.log(response.data);
      if (response) window.location.reload();
    } catch (response) {
      console.log(response.error);
    }
  };
  const handleFile = (e) => {
    setImg(e.target.files[0]);
  };

  return (
    <div className={styles.user_profile}>
      <div className={styles.container}>
        <h1> PERFIL</h1>
        <form onSubmit={handleSubmit} className={styles.input_photo}>
          <img className={styles.img_form} src={src} alt={photo_name} />
          <label className={styles.label} htmlFor="photo">
            Selecione sua foto
          </label>
          <input
            id="photo"
            type="file"
            name="photo"
            className={styles.input}
            onChange={(e) => handleFile(e)}
          />
          <button className={styles.button}>Enviar</button>
        </form>
        <div className={styles.forms}>
          <Input
            className={styles.input}
            label="Nome:"
            name="name"
            value={username}
            type="text"
          />
          <Input
            className={styles.input}
            label="Email:"
            name="email"
            value={email}
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
