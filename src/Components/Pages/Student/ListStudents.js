import React from "react";
import axios from "axios";
import { GET_ALL_STD } from "../../../api/api";
import styles from "./ListStudents.module.css";
import { Link, useParams } from "react-router-dom";
import imgStudent from "../../../Assets/contactlist_theuser_802.png";

function ListStudents() {
  const [stdData, setStdData] = React.useState("");

  React.useEffect(() => {
    const getStds = async () => {
      try {
        const { url, options } = GET_ALL_STD();
        const response = await axios(url, options);
        response && setStdData(response.data.data);
        console.log(response.data);
      } catch (response) {
        console.log(response);
      }
    };
    getStds();
  }, []);

  const { id } = useParams();

  return (
    <div className={styles.list_student}>
      <h1> ALUNOS CADASTRADOS</h1>
      <div className={styles.list_student_container}>
        {stdData &&
          stdData.map((item) => (
            <div className={styles.list_student_items} key={item.id}>
              <div className={styles.list_student_item}>
                <Link to={"/login/aluno/id/" + item.id}>
                  {" "}
                  <img
                    className={styles.list_student_img}
                    src={imgStudent}
                    alt=""
                  />
                </Link>
                <h4>{item.name}</h4>
                <p>{item.phone}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ListStudents;
