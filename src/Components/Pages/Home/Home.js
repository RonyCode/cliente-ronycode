import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  const user = false;
  return (
    <div className={styles.home}>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
        expedita facilis quidem reiciendis sed. Architecto culpa expedita
        placeat similique veniam.
      </p>
      {user && <Link to="/login/dashboard">Meu Login</Link>}
    </div>
  );
};

export default Home;
