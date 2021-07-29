import React from "react";
import axios from "axios";
import { GET_ALL_STD } from "../../../api/api";
import styles from "./ListStudents.module.css";
import Input from "../../Input/Input";
import { Link, useParams } from "react-router-dom";

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
      <h1> metodo GETAll</h1>
      <div></div>
      {stdData &&
        stdData.map((item) => (
          <div className={styles.list_input} key={item.id}>
            <Input value={item.name} />
            <Link to={"/login/aluno/id/" + item.id}>Selecionar</Link>
          </div>
        ))}
    </div>
  );
}

export default ListStudents;
