import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Carrosel from "../../Input/Carrosel";
import { WeekDay } from "../../../Helper/Weekday/WeekDay";
import imgCard5 from "../../../Assets/03_geha_blog_formacao_das_turmas.jpg";
import iconStar from "../../../Assets/star_77949.png";
import iconStarVoid from "../../../Assets/star_favorite_5754.png";
import iconHour from "../../../Assets/clock-time-control-tool-1_icon-icons.com_56823.svg";
import iconData from "../../../Assets/3586371-calendar-date-event-schedule_107943.svg";
import imgDeploy1 from "../../../Assets/flaviane.png";
import imgDeploy2 from "../../../Assets/amanda.jpeg";
import imgDeploy3 from "../../../Assets/Andreia.jpeg";
import imgDeploy4 from "../../../Assets/carla.jpeg";

const Home = () => {
  const { seg, ter, qua, qui, sex } = WeekDay();

  const [contentWeek, setContentWeek] = React.useState("");

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
                  <Link className={styles.link_content} to="/contato">
                    saber mais...
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.report}>
          <div className={styles.div_report}>
            <h2 className={styles.titulo_report}>Fique atento!</h2>
            <div className={styles.div_img_text}>
              <a
                href="https://www.bbc.com/portuguese/geral-56642352"
                target={"_blank"}
                rel="noreferrer"
              >
                <img
                  className={styles.img_report}
                  src="https://ichef.bbci.co.uk/news/800/cpsprodpb/4898/production/_117848581_gettyimages-1281093588.jpg"
                  alt=""
                />
              </a>
              <div className={styles.text_report_div}>
                <h3 className={styles.text_report_subtittle}>
                  O enorme impacto da demora do poder público e da baixa
                  conectividade
                </h3>
                <p className={styles.text_report}>
                  O Departamento de Ciência Política da Universidade de São
                  Paulo (USP) e o Centro de Aprendizagem em Avaliação e
                  Resultados da Fundação Getúlio Vargas (FGV) avaliaram a
                  eficiência dos planos de educação remota de Estados e
                  capitais. Foram analisados os meios usados para as aulas (como
                  TV ou internet), seu alcance e qualidade entre as diversas
                  etapas de ensino e os materiais e tecnologias oferecidos aos
                  alunos. Fonte: BBC
                  <a
                    rel="noreferrer"
                    target={"_blank"}
                    className={styles.text_report_link}
                    href="https://www.bbc.com/portuguese/geral-56642352"
                  >
                    saber mais...
                  </a>
                </p>
              </div>
            </div>

            <div className={styles.div_img_text}>
              <a
                rel="noreferrer"
                href="https://www12.senado.leg.br/noticias/infomaterias/2021/07/pandemia-acentua-deficit-educacional-e-exige-acoes-do-poder-publico"
                target={"_blank"}
              >
                <img
                  className={styles.img_report}
                  src="https://s2.glbimg.com/alVJTMnLNTPbK42da6jdKg6qxBs=/0x0:800x450/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/6/K/5UvfQKRASlBHpbe0Q6lg/foto-1-getty-images.jpg"
                  alt="novo-logo-composto"
                  border="0"
                />
              </a>
              <div className={styles.text_report_div}>
                <h3 className={styles.text_report_subtittle}>
                  Pandemia acentua deficit educacional e exige ações do poder
                  público
                </h3>
                <p className={styles.text_report}>
                  Quase um ano e meio após a autorização original, o Instituto
                  Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira
                  (Inep) divulgou o primeiro levantamento com os impactos
                  causados pelo vírus. A pesquisa Resposta Educacional à
                  Pandemia de Covid-19 no Brasil, que contempla toda a educação
                  básica, aponta que 9 em cada 10 escolas (90,1%) não retornaram
                  às atividades presenciais no ano letivo de 2020. Fonte:
                  Agência Senado
                  <a
                    rel="noreferrer"
                    target={"_blank"}
                    className={styles.text_report_link}
                    href="https://www12.senado.leg.br/noticias/infomaterias/2021/07/pandemia-acentua-deficit-educacional-e-exige-acoes-do-poder-publico"
                  >
                    saber mais...
                  </a>
                </p>
              </div>
            </div>

            <div className={styles.div_img_text}>
              <a
                rel="noreferrer"
                href="https://agenciabrasil.ebc.com.br/radioagencia-nacional/meio-ambiente/audio/2021-07/portaria-suspende-autorizacoes-para-queimadas-controladas-no-tocantins"
                target={"_blank"}
              >
                <img
                  className={styles.img_report}
                  src="http://www.lorena.sp.gov.br/wordpress/wp-content/uploads/2018/06/queimadas-1.jpg"
                  alt=""
                />
              </a>
              <div className={styles.text_report_div}>
                <h3 className={styles.text_report_subtittle}>
                  Portaria suspende autorizações para queimadas controladas no
                  Tocantins
                </h3>
                <p className={styles.text_report}>
                  Estão suspensas até 20 de novembro deste ano as autorizações
                  para queimadas controladas no Tocantins. A medida foi tomada
                  para controlar os focos de incêndios florestais no estado,
                  devido à baixa umidade do ar e o tempo seco. A portaria foi
                  emitida pelo Naturatins, Instituto Natureza do Tocantins, e se
                  aplica também ao prazo das autorizações emitidas
                  anteriormente. Fonte: EBC
                  <a
                    rel="noreferrer"
                    target={"_blank"}
                    className={styles.text_report_link}
                    href="https://agenciabrasil.ebc.com.br/radioagencia-nacional/meio-ambiente/audio/2021-07/portaria-suspende-autorizacoes-para-queimadas-controladas-no-tocantins"
                  >
                    saber mais...
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.calendar}>
          <div className={styles.container_calendar}>
            <h2 className={styles.calendar_tittle}>Eventos da Semana</h2>
            <div className={styles.div_calendar}>
              <img
                className={styles.calendar_img}
                src="https://i.ibb.co/sgLk100/seg.png"
                alt="seg"
                border="0"
              />
              <div className={styles.calendar_list}>
                <ul>
                  <li className={styles.calendar_list_item}>
                    <img
                      className={styles.calendar_icons}
                      src={iconData}
                      alt="icone data"
                    />{" "}
                    Data: {seg}
                  </li>
                  <li className={styles.calendar_list_item}>
                    <img
                      className={styles.calendar_icons}
                      src={iconHour}
                      alt="icone horario"
                    />
                    Horário 07:30 às 11:30 matutino
                  </li>
                  <li className={styles.calendar_list_item}>
                    <img
                      className={styles.calendar_icons}
                      src={iconHour}
                      alt="icone horario"
                    />
                    Horário 13:30 às 17:30 vespertino
                  </li>
                  <li className={styles.calendar_list_item}>{contentWeek}</li>
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
                  <li className={styles.calendar_list_item}>
                    <img
                      className={styles.calendar_icons}
                      src={iconData}
                      alt="icone data"
                    />{" "}
                    Data: {ter}
                  </li>
                  <li className={styles.calendar_list_item}>
                    <img
                      className={styles.calendar_icons}
                      src={iconHour}
                      alt="icone horario"
                    />
                    Horário 07:30 às 11:30 matutino
                  </li>
                  <li className={styles.calendar_list_item}>
                    <img
                      className={styles.calendar_icons}
                      src={iconHour}
                      alt="icone horario"
                    />
                    Horário 13:30 às 17:30 vespertino
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
                  <li className={styles.calendar_list_item}>
                    <img
                      className={styles.calendar_icons}
                      src={iconData}
                      alt="icone data"
                    />{" "}
                    Data: {qua}
                  </li>
                  <li className={styles.calendar_list_item}>
                    <img
                      className={styles.calendar_icons}
                      src={iconHour}
                      alt="icone horario"
                    />
                    Horário 07:30 às 11:30 matutino
                  </li>
                  <li className={styles.calendar_list_item}>
                    <img
                      className={styles.calendar_icons}
                      src={iconHour}
                      alt="icone horario"
                    />
                    Horário 13:30 às 17:30 vespertino
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
                  <li className={styles.calendar_list_item}>
                    <img
                      className={styles.calendar_icons}
                      src={iconData}
                      alt="icone data"
                    />{" "}
                    Data: {qui}
                  </li>
                  <li className={styles.calendar_list_item}>
                    <img
                      className={styles.calendar_icons}
                      src={iconHour}
                      alt="icone horario"
                    />
                    Horário 07:30 às 11:30 matutino
                  </li>
                  <li className={styles.calendar_list_item}>
                    <img
                      className={styles.calendar_icons}
                      src={iconHour}
                      alt="icone horario"
                    />
                    Horário 13:30 às 17:30 vespertino
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
                  <li className={styles.calendar_list_item}>
                    <img
                      className={styles.calendar_icons}
                      src={iconData}
                      alt="icone data"
                    />{" "}
                    Data: {sex}
                  </li>
                  <li className={styles.calendar_list_item}>
                    <img
                      className={styles.calendar_icons}
                      src={iconHour}
                      alt="icone horario"
                    />
                    Horário 07:30 às 11:30 matutino
                  </li>
                  <li className={styles.calendar_list_item}>
                    <img
                      className={styles.calendar_icons}
                      src={iconHour}
                      alt="icone horario"
                    />
                    Horário 13:30 às 17:30 vespertino
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.deployment}>
          <div className={styles.deployment_cards}>
            <h1 className={styles.deployment_cards_tittle}>
              Depoimentos de quem já é nosso cliente
            </h1>

            <div className={styles.deployment_card1}>
              <div className={styles.deployment_card_header}>
                <img
                  className={styles.deployment_card_img}
                  src={imgDeploy1}
                  alt="imagem card depoimento"
                />
              </div>

              <div className={styles.deployment_card_rating}>
                <img src={iconStar} alt="estrela rating" />
                <img src={iconStar} alt="estrela rating" />
                <img src={iconStar} alt="estrela rating" />
                <img src={iconStar} alt="estrela rating" />
                <img src={iconStarVoid} alt="estrela rating" />
              </div>
              <h3 className={styles.deployment_card_tittle}>Flaviane</h3>

              <p className={styles.deployment_card_text}>
                " Desde que entreguei meus filhos ao espaço Educar só tenho
                notado melhoras, está sendo fundamental esse auxílio, a
                Professora Gisele é muito atenciosa, e carinhosa. Estamos amando
                essa experiência! "
              </p>
            </div>

            <div className={styles.deployment_card2}>
              <div className={styles.deployment_card_header}>
                <img
                  className={styles.deployment_card_img}
                  src={imgDeploy2}
                  alt="imagem card depoimento"
                />
              </div>

              <div className={styles.deployment_card_rating}>
                <img src={iconStar} alt="estrela rating" />
                <img src={iconStar} alt="estrela rating" />
                <img src={iconStar} alt="estrela rating" />
                <img src={iconStar} alt="estrela rating" />
                <img src={iconStar} alt="estrela rating" />
              </div>
              <h3 className={styles.deployment_card_tittle}>Amanda</h3>

              <p className={styles.deployment_card_text}>
                " Oi! Gostaria de agradecer o carinho que você tem pelo Heitor
                esses meses que ele está passando com a Espaço Educar está
                gostando muito, quando ele não vai ele fica zangado, ele já
                desenvolveu bastante nesse pouco tempo que está na Espaço Educar
                "
              </p>
            </div>

            <div className={styles.deployment_card3}>
              <div className={styles.deployment_card_header}>
                <img
                  className={styles.deployment_card_img}
                  src={imgDeploy3}
                  alt="imagem card depoimento"
                />
              </div>

              <div className={styles.deployment_card_rating}>
                <img src={iconStar} alt="estrela rating" />
                <img src={iconStar} alt="estrela rating" />
                <img src={iconStar} alt="estrela rating" />
                <img src={iconStar} alt="estrela rating" />
                <img src={iconStar} alt="estrela rating" />
              </div>
              <h3 className={styles.deployment_card_tittle}>Andreia</h3>

              <p className={styles.deployment_card_text}>
                " To amando! A melhor coisa que fiz foi colocar meu filho na
                Espaço Educar! Ele já desenvolveu muito! Parabéns pelo cuidado e
                carinho que tem com ele! "
              </p>
            </div>

            <div className={styles.deployment_card4}>
              <div className={styles.deployment_card_header}>
                <img
                  className={styles.deployment_card_img}
                  src={imgDeploy4}
                  alt="imagem card depoimento"
                />
              </div>

              <div className={styles.deployment_card_rating}>
                <img src={iconStar} alt="estrela rating" />
                <img src={iconStar} alt="estrela rating" />
                <img src={iconStar} alt="estrela rating" />
                <img src={iconStar} alt="estrela rating" />
                <img src={iconStar} alt="estrela rating" />
              </div>
              <h3 className={styles.deployment_card_tittle}>Carla</h3>

              <p className={styles.deployment_card_text}>
                " Estou muito feliz em ver o interesse do Luiz Otávio, ele está
                evoluindo bem, a atenção dada ao desenvolvimento dele foi
                primordial, quero agradecer a Educadora Gisele pelo cuidado e a
                dedicação nos mínimos detalhes desde a recepção até os mimos de
                um cartãozinho, você é nota 1.000 "
              </p>
            </div>

            <div className={styles.deployment_card5}>
              <div className={styles.deployment_card_header}>
                <img
                  className={styles.deployment_card_img}
                  src={imgCard5}
                  alt="imagem card depoimento"
                />
              </div>
              <div className={styles.deployment_card_rating}>
                <img src={iconStar} alt="estrela rating" />
                <img src={iconStar} alt="estrela rating" />
                <img src={iconStar} alt="estrela rating" />
                <img src={iconStar} alt="estrela rating" />
                <img src={iconStar} alt="estrela rating" />
              </div>
              <h3 className={styles.deployment_card_tittle}>Amanda</h3>
              <p className={styles.deployment_card_text}>
                " Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus, fugit."
              </p>
            </div>
            <div className={styles.deployment_result}>
              <h1 className={styles.deployment_result_tittle}>
                Satisfação 4.4 de 5 estrelas por nossos clientes!!!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
