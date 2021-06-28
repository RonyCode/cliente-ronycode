import React from "react";
import axios from "axios";
import { GET_ALL_STD } from "../../../api/api";

function ListStudents() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const getStds = async () => {
      try {
        const { url, options } = GET_ALL_STD();
        const response = await axios(url, options);
        response && setData(response.data.data);
        console.log(response);
      } catch (response) {
        console.log(response);
      }
    };
    getStds();
  }, []);
  return (
    <div className="App">
      <h1> metodo GETAll</h1>

      {<p></p>}
      {data &&
        data.map((item) => (
          <div key={item.id}>
            <div>Id User: {item.id}</div>
            <div>Name: {item.name}</div>
            <div>Email: {item.email}</div>
            <div>Telefone: {item.phone}</div>
            <div>Endereço: {item.address}</div>
            <div>Data Nascimento: {item.birthday}</div>
            <div>Boletim Escolar: {item.report}</div>
            <div>Grau Escolar: {item.grade}</div>
            <div>Data da matrícula: {item.registrationDate}</div>
            <div>Data término curso: {item.expirationDate}</div>
            <div>Resultado: {item.result}</div>
            <p></p>
          </div>
        ))}
      {<p>{data.data}</p>}
      {}
    </div>
  );
}

export default ListStudents;
