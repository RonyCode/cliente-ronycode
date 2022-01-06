import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  GET_ALL_DAY_STD,
  GET_ALL_STD,
  POST_ADD_STD,
  SELECT_STD,
  UPDATE_STD,
} from "../api/api";
import axios from "axios";

export const StudentContext = createContext();

export const StudentStorage = ({ children }) => {
  const [dataAllStudent, setDataAllStudent] = useState("");
  const [dataDayAllStudent, setDataDayAllStudent] = useState("");
  const [stdData, setStdData] = useState("");
  const navigate = useNavigate();

  const selectStudent = async (id) => {
    try {
      const { url, options } = SELECT_STD(id);
      const response = await axios(url, options);
      response && setStdData(response.data.data[0]);
      console.log(response.data);
    } catch (response) {
      console.log(response.data);
    }
  };

  const addStudent = (formData) => {
    const { url, options } = POST_ADD_STD(formData);

    axios(url, options)
      .then(function (response) {
        alert(response.data.message);
        navigate("/login/aluno/lista");
      })
      .catch(function (error) {
        alert(error.response.data.message);
      });
  };
  const updateStudent = (formData) => {
    const { url, options } = UPDATE_STD(formData);

    axios(url, options)
      .then(function (response) {
        alert("Aluno Atualizado com sucesso!");
        navigate("/login/aluno/lista");
        console.log("Success: ", response.data);
      })
      .catch(function (error) {
        console.log("Error: ", error.data);
        alert(error.response.data.message);
      });
  };

  const getAllStudents = async () => {
    try {
      const { url, options } = GET_ALL_STD();
      const response = await axios(url, options);
      response && setDataAllStudent(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getAllDayStudents = async () => {
    try {
      const { url, options } = GET_ALL_DAY_STD();
      const response = await axios(url, options);
      response && setDataDayAllStudent(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <StudentContext.Provider
        value={{
          stdData,
          selectStudent,
          addStudent,
          updateStudent,
          getAllStudents,
          dataAllStudent,
          getAllDayStudents,
          dataDayAllStudent,
        }}
      >
        {children}
      </StudentContext.Provider>
    </div>
  );
};
