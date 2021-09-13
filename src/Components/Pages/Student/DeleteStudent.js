import React from "react";
import { DELETE_STD, SELECT_STD } from "../../../api/api";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./DeleteStudent.module.css";

const DeleteStudent = () => {
  const [data, setData] = React.useState([]);
  const navigate = useNavigate();

  const { id } = useParams();

  const formData = new FormData();
  formData.append("id", id);

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
  }, [id]);

  function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = DELETE_STD(formData);

    axios(url, options)
      .then(function (response) {
        navigate("/login/aluno/lista");
        alert("Aluno removido com sucesso!");
        console.log("Success: ", response.data);
      })
      .catch(function (error) {
        console.log("Error: ", error.response.data);
      });
  }

  return (
    <div className={styles.delete_student}>
      <div className={styles.delete_student_container}>
        {data &&
          data.map((item) => (
            <div key={item.id}>
              <h3 className={styles.tittle}> Aluno: {item.name}</h3>
              <li>Email: {item.email}</li>
              <li>Telefone: {item.phone}</li>
            </div>
          ))}
        <form onSubmit={handleSubmit}>
          <input hidden={true} name="id" value={id || ""} />
          <button className={styles.delete_button}>Remover</button>
          <Link to="/login/aluno/lista" className={styles.delete_button}>
            Cancelar
          </Link>
        </form>
      </div>
      <div className={styles.delete_student_container_hover}></div>
    </div>
  );
};

export default DeleteStudent;
