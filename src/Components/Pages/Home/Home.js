import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Carrosel from "../../Input/Carrosel";
import { WeekDay } from "../../WeekDay/WeekDay";

const Home = () => {
  const { seg, ter, qua, qui, sex } = WeekDay();

  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <div className={styles.banner}>
          {/*////////######################//////////#*/}
          {/*Carrosel da home page*/}
          <Carrosel />
        </div>
        <div className={styles.main}>
          <div className={styles.container_main}>
            <h1 className={styles.tittle}>Espaço Educar</h1>
            <div className={styles.img_text_main}>
              <img
                className={styles.img_main}
                src="https://exame.com/wp-content/uploads/2020/01/melhores-livros-2019.jpg"
                alt=""
              />
              <div className={styles.content}>
                <p className={styles.text}>
                  Em 2018 buscando à excelência em aplicações estudantis para
                  seus alunos foi fundado o Espaço Educar. Professora formada em
                  pedagogia, magistério e com ampla experiência em ensino
                  escolar, a Professora Gisele fundou esse ambiente com objetivo
                  de auxiliar alunos com dificuldades em diversos espectros da
                  educação. Da alfabetização ao ensino fundamental (5 ano),
                  nosso espaço foi pensado para o aluno que enfrenta dificuldade
                  na hora de entender matérias, deveres, exercícios e etc. Nosso
                  ambiente conta com sala climatizada, ensino dinâmico,
                  especialização em aproveitamento individual na área em que
                  existe maior dificuldade, horários flexíveis, e acompanhamento
                  educacional diferenciado. Agende uma visita conosco ou entre
                  em contato através do link abaixo.
                </p>
                <Link className={styles.link_content} to="/contato">
                  saber mais...
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.report}>
          <div className={styles.div_report}>
            <h2 className={styles.titulo_report}>Fique atento!</h2>
            <div className={styles.div_img_text}>
              <img
                className={styles.img_report}
                src="https://s2.glbimg.com/alVJTMnLNTPbK42da6jdKg6qxBs=/0x0:800x450/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/6/K/5UvfQKRASlBHpbe0Q6lg/foto-1-getty-images.jpg"
                alt=""
              />
              <p className={styles.text_report}>
                pouco mais de 10% dos estudantes voltaram ao ensino presencial
                este semestre. Alguns sumiram outros acreditam que o ensino está
                contemplado ao fazer lições online, ou se veem sem opção. A
                reabertura, especialmente no Brasil, é um debate que começou
                quando se mandaram as primeiras crianças para casa em março de
                2020 e ainda não tem data para terminar.
                <a
                  className={styles.text_report_link}
                  href="https://educacao.uol.com.br/noticias/agencia-estado/2021/07/04/volta-as-aulas-profissionais-e-alunos-enfrentam-desafios-na-pandemia.htm"
                >
                  saber mais
                </a>
              </p>
            </div>

            <div className={styles.div_img_text}>
              <img
                className={styles.img_report}
                src="https://i.ibb.co/dfJHFJR/novo-logo-composto.png"
                alt="novo-logo-composto"
                border="0"
              />
              <p className={styles.text_report}>
                pouco mais de 10% dos estudantes voltaram ao ensino presencial
                este semestre. Alguns sumiram outros acreditam que o ensino está
                contemplado ao fazer lições online, ou se veem sem opção. A
                reabertura, especialmente no Brasil, é um debate que começou
                quando se mandaram as primeiras crianças para casa em março de
                2020 e ainda não tem data para terminar.
                <a
                  className={styles.text_report_link}
                  href="https://educacao.uol.com.br/noticias/agencia-estado/2021/07/04/volta-as-aulas-profissionais-e-alunos-enfrentam-desafios-na-pandemia.htm"
                >
                  saber mais
                </a>
              </p>
            </div>

            <div className={styles.div_img_text}>
              <img
                className={styles.img_report}
                src="https://s2.glbimg.com/alVJTMnLNTPbK42da6jdKg6qxBs=/0x0:800x450/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/6/K/5UvfQKRASlBHpbe0Q6lg/foto-1-getty-images.jpg"
                alt=""
              />
              <p className={styles.text_report}>
                pouco mais de 10% dos estudantes voltaram ao ensino presencial
                este semestre. Alguns sumiram outros acreditam que o ensino está
                contemplado ao fazer lições online, ou se veem sem opção. A
                reabertura, especialmente no Brasil, é um debate que começou
                quando se mandaram as primeiras crianças para casa em março de
                2020 e ainda não tem data para terminar.
                <a
                  className={styles.text_report_link}
                  href="https://educacao.uol.com.br/noticias/agencia-estado/2021/07/04/volta-as-aulas-profissionais-e-alunos-enfrentam-desafios-na-pandemia.htm"
                >
                  saber mais
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.calendar}>
          <h2 className={styles.calendar_tittle}>Eventos da Semana</h2>
          <div className={styles.container_calendar}>
            <div className={styles.div_calendar}>
              <img
                className={styles.calendar_img}
                src="https://i.ibb.co/sgLk100/seg.png"
                alt="seg"
                border="0"
              />
              <div className={styles.calendar_list}>
                <ul>
                  <li className={styles.calendar_list_item}>Data: {seg}</li>
                  <li className={styles.calendar_list_item}>
                    Horário de funcionamento normal das 07:30 às 11:30 matutino{" "}
                  </li>
                  <li className={styles.calendar_list_item}>
                    Horário de funcionamento normal das 13:30 às 17:30
                    vespertino{" "}
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.div_calendar}>
              <img
                className={styles.calendar_img}
                src="https://i.ibb.co/fn4n93C/ter.png"
                alt="seg"
                border="0"
              />
              <div className={styles.calendar_list}>
                <ul>
                  <li className={styles.calendar_list_item}>Data: {ter}</li>
                  <li className={styles.calendar_list_item}>
                    Horário de funcionamento normal das 07:30 às 11:30 matutino{" "}
                  </li>
                  <li className={styles.calendar_list_item}>
                    Horário de funcionamento normal das 13:30 às 17:30
                    vespertino{" "}
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.div_calendar}>
              <img
                className={styles.calendar_img}
                src="https://i.ibb.co/dWPxPd1/qua.png"
                alt="seg"
                border="0"
              />
              <div className={styles.calendar_list}>
                <ul>
                  <li className={styles.calendar_list_item}>Data: {qua}</li>
                  <li className={styles.calendar_list_item}>
                    Horário de funcionamento normal das 07:30 às 11:30 matutino{" "}
                  </li>
                  <li className={styles.calendar_list_item}>
                    Horário de funcionamento normal das 13:30 às 17:30
                    vespertino{" "}
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.div_calendar}>
              <img
                className={styles.calendar_img}
                src="https://i.ibb.co/rdCVd75/qui.png"
                alt="seg"
                border="0"
              />
              <div className={styles.calendar_list}>
                <ul>
                  <li className={styles.calendar_list_item}>Data: {qui}</li>
                  <li className={styles.calendar_list_item}>
                    Horário de funcionamento normal das 07:30 às 11:30 matutino{" "}
                  </li>
                  <li className={styles.calendar_list_item}>
                    Horário de funcionamento normal das 13:30 às 17:30
                    vespertino{" "}
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.div_calendar}>
              <img
                className={styles.calendar_img}
                src="https://i.ibb.co/q1Mz5yP/sex.png"
                alt="seg"
                border="0"
              />
              <div className={styles.calendar_list}>
                <ul>
                  <li className={styles.calendar_list_item}>Data: {sex}</li>
                  <li className={styles.calendar_list_item}>
                    Horário de funcionamento normal das 07:30 às 11:30 matutino{" "}
                  </li>
                  <li className={styles.calendar_list_item}>
                    Horário de funcionamento normal das 13:30 às 17:30
                    vespertino{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.deployment}>
          <h3>Depoimentos</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
