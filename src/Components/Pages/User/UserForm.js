import React from "react";
import styles from "./UserForm.module.css";
import { UserContext } from "../../UserStorage";

const UserForm = () => {
  const { username } = React.useContext(UserContext);
  return (
    <div className={styles.user_form}>
      <div className={styles.container}>
        <h1>Usuario(a): {username}</h1>
        <h2>grid icones</h2>
        <h2>grid icones</h2>
        <h2>grid icones</h2>
        <h2>grid icones</h2>
        <h2>grid icones</h2>
        <h2>grid icones</h2>
        <h2>grid icones</h2>
        <h2>grid icones</h2>
        <h2>grid icones</h2>
        <h2>grid icones</h2>
        <h2>grid icones</h2>
      </div>
    </div>
  );
};

export default UserForm;
