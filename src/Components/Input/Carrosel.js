import React from "react";
import styles from "./Carrosel.module.css";
import imgSlide1 from "../../Assets/logo1.png";
import imgSlide2 from "../../Assets/login-3938432-cut (1).jpg";
import imgSlide3 from "../../Assets/login.webp";
import imgSlide4 from "../../Assets/facebook_macos_bigsur_icon_190191.png";

const Carrosel = () => {
  return (
    <div className={styles.carrosel}>
      <div className={styles.carrosel_container}>
        <div className={styles.carrosel_principal}>
          <div className={styles.carrosel_principal_div}>
            {/*<input*/}
            {/*  className={styles.principal_input}*/}
            {/*  type="radio"*/}
            {/*  name="slide__radio"*/}
            {/*  id="slide1"*/}
            {/*  checked*/}
            {/*/>*/}

            {/*<div className={styles.carrosel_principal_img}>*/}
            {/*  <div className={styles.carrosel_principal_hover}>clique aqui</div>*/}
            {/*</div>*/}

            <img
              className={styles.carrosel_principal_img}
              src={imgSlide1}
              alt=""
            />
            <img
              className={styles.carrosel_principal_img}
              src={imgSlide2}
              alt=""
            />
            <img
              className={styles.carrosel_principal_img}
              src={imgSlide3}
              alt=""
            />
            <img
              className={styles.carrosel_principal_img}
              src={imgSlide4}
              alt=""
            />
          </div>
        </div>
        <div className={styles.carrosel_slides}>
          <div className={styles.carrosel_slide}>
            <input type="radio" id="foto1" name={styles.grupo} checked />
            <label htmlFor="foto1">
              <img
                className={styles.carrosel_slide_img}
                src="https://i.ibb.co/WKwJjrL/rd-21.jpg"
                alt="rd-21"
                border="0"
              />
            </label>
          </div>

          <div className={styles.carrosel_slide}>
            <input type="radio" id="foto2" name={styles.grupo} />
            <label htmlFor="foto2">
              <img
                className={styles.carrosel_slide_img}
                src="https://i.ibb.co/6NNqHyv/rd-2.jpg"
                alt="rd-21"
                border="0"
              />

              {/*<a href="">*/}
              {/*  <img*/}
              {/*    className={styles.carrosel_slide_img}*/}
              {/*    src="https://i.ibb.co/6NNqHyv/rd-2.jpg"*/}
              {/*    alt="rd-2"*/}
              {/*    border="0"*/}
              {/*  />*/}
              {/*</a>*/}
            </label>
          </div>
          <div className={styles.carrosel_slide}>
            <input type="radio" id="foto3" name={styles.grupo} />
            <label htmlFor="foto3">
              <img
                className={styles.carrosel_slide_img}
                src="https://i.ibb.co/GxVmyr1/rd-18.jpg"
                alt="rd-21"
                border="0"
              />
            </label>
          </div>
          <div className={styles.carrosel_slide}>
            <div className={styles.carrosel_div_hover}>Clique Aqui</div>

            <input type="radio" id="foto4" name={styles.grupo} />
            <label htmlFor="foto4">
              <img
                className={styles.carrosel_slide_img}
                src="https://i.ibb.co/GxVmyr1/rd-18.jpg"
                alt="rd-21"
                border="0"
              />
            </label>

            {/*<a href="">*/}
            {/*  <img*/}
            {/*    className={styles.carrosel_slide_img}*/}
            {/*    src="https://i.ibb.co/p3MP6Hm/logotipo-papagaiado-terminado.jpg"*/}
            {/*    alt="logotipo-papagaiado-terminado"*/}
            {/*    border="0"*/}
            {/*  />*/}
            {/*</a>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrosel;
