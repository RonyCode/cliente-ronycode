import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <div className={styles.banner}>
          <img
            className={styles.img_banner}
            src="https://s2.glbimg.com/nIqfLY3zjr8JntK_zMS9QxXFaZk=/e.glbimg.com/og/ed/f/original/2020/09/05/alfons-morales-ylswjsy7stw-unsplash.jpg"
            alt="logo educar"
          />
        </div>
        <div className={styles.main}>
          <h1 className={styles.tittle}>Espaço Educar</h1>
          <img
            className={styles.img_main}
            src="https://exame.com/wp-content/uploads/2020/01/melhores-livros-2019.jpg"
            alt=""
          />
          <div className={styles.content}>
            <p className={styles.text}>
              Em 2018 buscando à excelência em aplicações estudantis para seus
              alunos foi fundado o Espaço Educar. Professora formada em
              pedagogia, magistério e com ampla experiência em ensino escolar, a
              Professora Gisele fundou esse ambiente com objetivo de auxiliar
              alunos com dificuldades em diversos espectros da educação. Da
              alfabetização ao ensino fundamental (5 ano), nosso espaço foi
              pensado para o aluno que enfrenta dificuldade na hora de entender
              matérias, deveres, exercícios e etc. Nosso ambiente conta com sala
              climatizada, ensino dinâmico, especialização em aproveitamento
              individual na área em que existe maior dificuldade, horários
              flexíveis, e acompanhamento educacional diferenciado. Agende uma
              visita conosco ou entre em contato através do link abaixo.
            </p>
            <Link className={styles.link_content} to="/contato">
              Para saber mais clique aqui
            </Link>
          </div>
        </div>
        <div className={styles.post}>
          <h3>Depoimentos</h3>
        </div>
        <div className={styles.report}>
          <h3>report</h3>
        </div>
        <div className={styles.calendar}>
          <h4>calendario</h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
