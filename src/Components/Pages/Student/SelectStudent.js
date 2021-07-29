import React from "react";
import { useParams } from "react-router-dom";
import { SELECT_STD } from "../../../api/api";
import axios from "axios";
import styles from "./SelectStudent.module.css";

const SelectStudent = () => {
  const [data, setData] = React.useState([]);
  const { id } = useParams();
  const [name, setName] = React.useState("");

  React.useEffect(() => {
    const selectStudent = async () => {
      try {
        const { url, options } = SELECT_STD(id);
        const response = await axios(url, options);
        response && setData(response.data.data);

        console.log(response);
      } catch (response) {
        console.log(response);
      }
    };
    selectStudent();
  }, []);

  return (
    <div className="App">
      {data &&
        data.map((item) => (
          <div key={item.id}>
            <h1 className={styles.tittle}> Aluno: {item.name}</h1>
            <li>Email: {item.email}</li>
            <li>Telefone: {item.phone}</li>
            <li>Endereço: {item.address}</li>
            <li>Data Nascimento: {item.birthday}</li>
            <li>Boletim Escolar: {item.report}</li>
            <li>Grau Escolar: {item.grade}</li>
            <li>Data da matrícula: {item.registrationDate}</li>
            <li>Data término curso: {item.expirationDate}</li>
            <li>Resultado: {item.result}</li>
          </div>
        ))}
    </div>
  );
};
export default SelectStudent;
