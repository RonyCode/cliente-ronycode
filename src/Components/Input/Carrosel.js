import React from "react";
import styles from "./Carrosel.module.css";
import imgSlide1 from "../../Assets/logo1.png";
import imgSlide2 from "../../Assets/banner 1.png";
import imgSlide3 from "../../Assets/foguete.png";
import imgSlide4 from "../../Assets/logotipo papagaiado terminado.jpg";

const Carrosel = () => {
  const [src, setSrc] = React.useState(imgSlide1);
  const slides = [imgSlide1, imgSlide2, imgSlide3, imgSlide4];

  let currentImgIndex = 0,
    time = 5000,
    maxImgIndex = slides.length - 1;

  const handleChange = ({ target }) => {
    setSrc(target.value);
  };

  const nextImg = () => {
    currentImgIndex++;
    if (currentImgIndex > maxImgIndex) currentImgIndex = 0;
    setSrc(slides[currentImgIndex]);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      nextImg();
    }, time);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carrosel}>
      <div className={styles.carrosel_container}>
        <div className={styles.carrosel_principal}>
          <div className={styles.carrosel_principal_div}>
            <img
              className={styles.carrosel_principal_img}
              src={src}
              alt="imagem slide principal"
            />
            <div className={styles.carrosel_principal_hover}>
              <div className={styles.principal_hover_content}>
                <a href="#">Conheça nossos planos!</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.carrosel_slides}>
          <form>
            <div className={styles.carrosel_slide}>
              <label className={styles.carrosel_label}>
                <input
                  className={styles.carrosel_radio}
                  type="radio"
                  id="foto1"
                  name="grupo"
                  value={slides[0]}
                  checked={src === slides[0]}
                  onChange={handleChange}
                />
                <img
                  className={styles.carrosel_slide_img}
                  src={imgSlide1}
                  alt="rd-21"
                />
                <div className={styles.carrosel_slide_hover}>
                  <div className={styles.slide_hover_content}></div>
                </div>
              </label>
            </div>

            <div className={styles.carrosel_slide}>
              <label className={styles.carrosel_label}>
                <input
                  className={styles.carrosel_radio}
                  type="radio"
                  id="foto2"
                  name="grupo"
                  value={slides[1]}
                  checked={src === slides[1]}
                  onChange={handleChange}
                />
                <img
                  className={styles.carrosel_slide_img}
                  src={imgSlide2}
                  alt="rd-21"
                />
                <div className={styles.carrosel_slide_hover}>
                  <div className={styles.slide_hover_content}></div>
                </div>
              </label>
            </div>

            <div className={styles.carrosel_slide}>
              <label className={styles.carrosel_label}>
                <input
                  className={styles.carrosel_radio}
                  type="radio"
                  id="foto3"
                  name="grupo"
                  value={slides[2]}
                  checked={src === slides[2]}
                  onChange={handleChange}
                />
                <img
                  className={styles.carrosel_slide_img}
                  src={imgSlide3}
                  alt="rd-21"
                />
                <div className={styles.carrosel_slide_hover}>
                  <div className={styles.slide_hover_content}></div>
                </div>
              </label>
            </div>

            <div className={styles.carrosel_slide}>
              <label className={styles.carrosel_label}>
                <input
                  className={styles.carrosel_radio}
                  type="radio"
                  id="foto4"
                  name="grupo"
                  value={slides[3]}
                  checked={src === slides[3]}
                  onChange={handleChange}
                />
                <img
                  className={styles.carrosel_slide_img}
                  src={imgSlide4}
                  alt="rd-21"
                />
                <div className={styles.carrosel_slide_hover}>
                  <div className={styles.slide_hover_content}></div>
                </div>
              </label>
            </div>
          </form>
          <div className={styles.carrosel_slide}>
            <div className={styles.carrosel_div_hover}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrosel;
