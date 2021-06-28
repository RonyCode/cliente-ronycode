import React from "react";
import { useParams } from "react-router-dom";
import { SELECT_STD } from "../../../api/api";
import axios from "axios";

const SelectStudent = () => {
  const [data, setData] = React.useState([]);
  const { id } = useParams();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const { url, options } = SELECT_STD(id);
      const response = await axios(url, options);
      response && setData(response.data.data);
      console.log(response);
    } catch (response) {
      console.log(response);
    }
  }

  return (
    <div className="App">
      <h1> metodo Select Student</h1>
      <form onSubmit={handleSubmit}>
        <button>Enviar</button>
      </form>
      {<p></p>}
      {data &&
        data.map((item) => (
          <div key={item.id}>
            <li>Email: {item.email}</li>
            <li>Telefone: {item.phone}</li>
            <li>Endereço: {item.address}</li>
            <li>Data Nascimento: {item.birthday}</li>
            <li>Boletim Escolar: {item.report}</li>
            <li>Grau Escolar: {item.grade}</li>
            <li>Data da matrícula: {item.registrationDate}</li>
            <li>Data término curso: {item.expirationDate}</li>
            <li>Resultado: {item.result}</li>
            <p></p>
          </div>
        ))}
      {<p></p>}
    </div>
  );
};
export default SelectStudent;
