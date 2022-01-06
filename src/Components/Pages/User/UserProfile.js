import React, { useContext } from "react";
import { UserContext } from "../../UserStorage";
import styles from "./UserProfile.module.css";
import Input from "../../Input/Input";

const UserProfile = () => {
  const [img, setImg] = React.useState("");
  const { src, id, photo_name, username, email, userImgProfile } =
    useContext(UserContext);
  const formData = new FormData();
  formData.append("photo", img);
  formData.append("id", id);

  React.useEffect(() => {}, [src]);

  const handleSubmit = (e) => {
    e.preventDefault();
    userImgProfile(formData);
  };
  const handleFile = (e) => {
    setImg(e.target.files[0]);
  };

  return (
    <div className={styles.user_profile}>
      <div className={styles.container}>
        <h1> PERFIL</h1>
        <form onSubmit={handleSubmit} className={styles.input_photo}>
          {img ? (
            <img
              className={styles.img_form}
              src={URL.createObjectURL(img)}
              alt={photo_name}
            />
          ) : (
            <img className={styles.img_form} src={src} alt={photo_name} />
          )}
          <label className={styles.label} htmlFor="photo">
            Selecione sua foto
          </label>
          <input
            id="photo"
            type="file"
            name="photo"
            className={styles.input}
            onChange={handleFile}
          />
          <button className={styles.button}>Enviar</button>
        </form>
        <div className={styles.forms}>
          <Input
            readOnly={true}
            className={styles.input}
            label="Nome:"
            name="name"
            value={username}
            type="text"
          />
          <Input
            readOnly={true}
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
