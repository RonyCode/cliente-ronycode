import React from "react";
import axios from "axios";
import { GET_ALL_STD } from "../../../api/api";

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

  return (
    <div className="App">
      <h1> metodo GETAll</h1>
      {stdData &&
        stdData.map((item) => (
          <ul key={item.id}>
            <li></li>
            <li>Id User: {item.id}</li>
            <li>Name: {item.name}</li>
            <li>Email: {item.email}</li>
            <li>Telefone: {item.phone}</li>
            <li>Endereço: {item.address}</li>
            <li>Data Nascimento: {item.birthday}</li>
            <li>Boletim Escolar: {item.report}</li>
            <li>Grau Escolar: {item.grade}</li>
            <li>Data da matrícula: {item.registrationDate}</li>
            <li>Data término curso: {item.expirationDate}</li>
            <li>Resultado: {item.result}</li>
          </ul>
        ))}
    </div>
  );
}

export default ListStudents;
