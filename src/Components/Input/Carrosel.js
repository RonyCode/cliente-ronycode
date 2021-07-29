import React from "react";
import styles from "./Carrosel.module.css";

const Carrosel = () => {
  return (
    <div className={styles.carrosel}>
      <div className={styles.carrosel_container}>
        <div className={styles.carrosel_principal}>
          <div className={styles.carrosel_principal_div}>
            <a href="#">
              <img
                className={styles.carrosel_principal_img}
                src="https://i.ibb.co/p3MP6Hm/logotipo-papagaiado-terminado.jpg"
                alt="logotipo-papagaiado-terminado"
                border="0"
              />
            </a>
            <a href="#">
              <img
                className={styles.carrosel_principal_img}
                src="https://i.ibb.co/WKwJjrL/rd-21.jpg"
                alt="rd-21"
                border="0"
              />
            </a>
            <a href="">
              <img
                className={styles.carrosel_principal_img}
                src="https://i.ibb.co/6NNqHyv/rd-2.jpg"
                alt="rd-2"
                border="0"
              />
            </a>
          </div>
        </div>
        <div className={styles.carrosel_slides}>
          <div className={styles.carrosel_slide}>
            <a href="#">
              <img
                className={styles.carrosel_slide_img}
                src="https://i.ibb.co/WKwJjrL/rd-21.jpg"
                alt="rd-21"
                border="0"
              />
            </a>
          </div>
          <div className={styles.carrosel_slide}>
            <a href="">
              <img
                className={styles.carrosel_slide_img}
                src="https://i.ibb.co/6NNqHyv/rd-2.jpg"
                alt="rd-2"
                border="0"
              />
            </a>
          </div>
          <div className={styles.carrosel_slide}>
            <a href="">
              <img
                className={styles.carrosel_slide_img}
                src="https://i.ibb.co/GxVmyr1/rd-18.jpg"
                alt="rd-18"
                border="0"
              />
            </a>
          </div>
          <div className={styles.carrosel_slide}>
            <a href="">
              <img
                className={styles.carrosel_slide_img}
                src="https://i.ibb.co/p3MP6Hm/logotipo-papagaiado-terminado.jpg"
                alt="logotipo-papagaiado-terminado"
                border="0"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrosel;
