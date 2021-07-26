import React from "react";
import styles from "./Footer.module.css";
import fotoZap from "../../Assets/whatsapp_alt_macos_bigsur_icon_189553.png";
import fotoFace from "../../Assets/facebook_macos_bigsur_icon_190191.png";
import fotoInsta from "../../Assets/instagram_alt_macos_bigsur_icon_190065.png";
import fotoMail from "../../Assets/mail_macos_bigsur_icon_190003.png";
import fotoSobre from "../../Assets/feedback_assistant_macos_bigsur_icon_190184.png";
import fotoHome from "../../Assets/home_macos_bigsur_icon_190091.png";
import fotoContato from "../../Assets/cardhop_macos_bigsur_icon_190304.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_container_2}>
          <div className={styles.footer_links}>
            <div>
              <div className={styles.footer_div_links}>
                <img
                  className={styles.footer_div_links_img}
                  src={fotoHome}
                  alt=""
                />
                <div className={styles.footer_div_links_list}>
                  <Link className={styles.footer_div_link} to="/">
                    Home
                  </Link>
                  <Link className={styles.footer_div_link} to="/login">
                    Login
                  </Link>
                  <Link className={styles.footer_div_link} to="/login/usuario">
                    Usuario
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <div className={styles.footer_div_links}>
                <img
                  className={styles.footer_div_links_img}
                  src={fotoSobre}
                  alt=""
                />
                <div className={styles.footer_div_links_list}>
                  <Link className={styles.footer_div_link} to="/sobre">
                    Sobre
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <div className={styles.footer_div_links}>
                <img
                  className={styles.footer_div_links_img}
                  src={fotoContato}
                  alt=""
                />
                <div className={styles.footer_div_links_list}>
                  <Link className={styles.footer_div_link} to="/contato">
                    Contato
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.footer_container_socials}>
            <h3>Nos siga nas redes sociais!</h3>
            <div className={styles.footer_socials}>
              <div className={styles.footer_social_item}>
                <a
                  href="https://web.whatsapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className={styles.footer_img} src={fotoZap} alt="" />
                </a>
              </div>
              <div className={styles.footer_social_item}>
                <a
                  href="https://web.whatsapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className={styles.footer_img} src={fotoFace} alt="" />{" "}
                </a>
              </div>
              <div className={styles.footer_social_item}>
                <a
                  href="https://web.whatsapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className={styles.footer_img} src={fotoInsta} alt="" />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        <p align="center">Ronycode &copy; 2021 todos os direitos reservados </p>
      </div>
    </footer>
  );
};

export default Footer;
