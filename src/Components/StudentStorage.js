import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { POST_ADD_STD, SELECT_STD } from "../api/api";
import axios from "axios";

export const StudentContext = createContext();

export const StudentStorage = ({ children }) => {
  const [stdName, setStdName] = useState("");
  const [stdAddress, setStdAddress] = useState(null);
  const [stdPhone, setStdPhone] = useState(null);
  const [stdEmail, setStdEmail] = useState(null);
  const [stdGrade, setStdGrade] = useState(null);
  const [stdBirthday, setStdBirthday] = useState(null);
  const [stdSituation, setStdSituation] = useState(null);
  const [stdRegistrationDate, setStdRegistrationDate] = useState(null);
  const [stdDatePayment, setStdDatePayment] = useState(null);
  const [stdDateExpiresContract, setStdDateExpiresContract] = useState(null);
  const [stdContractNumber, setStdContractNumber] = useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [stdData, setStdData] = useState("");
  const navigate = useNavigate();

  const selectStudent = async (id) => {
    try {
      const { url, options } = SELECT_STD(id);
      const response = await axios(url, options);
      response && setStdData(response.data.data[0]);
      setStdName(stdData.name);
      setStdAddress(stdData.address);
      setStdPhone(stdData.phone);
      setStdBirthday(stdData.birthday);
      setStdSituation(stdData.situation);
      setStdGrade(stdData.grade);
      setStdEmail(stdData.email);
      setStdRegistrationDate(stdData.registrationDate);
      setStdDateExpiresContract(stdData.dateExpiresContract);
      setStdContractNumber(stdData.contractNumber);
      setStdDatePayment(stdData.datePayment);
      console.log(response.data.data[0]);
    } catch (response) {
      console.log(response.response.data);
    }
  };

  const addStudent = (formData) => {
    const { url, options } = POST_ADD_STD(formData);

    axios(url, options)
      .then(function (response) {
        alert(response.data.message);
        navigate("/login/aluno/lista");
        console.log("Success: ", response.data.message);
      })
      .catch(function (error) {
        console.log("Error: ", error.response.data);
        alert(error.response.data.message);
      });
  };
  return (
    <div>
      <StudentContext.Provider
        value={{
          stdName,
          stdAddress,
          stdEmail,
          stdPhone,
          stdGrade,
          stdBirthday,
          stdSituation,
          stdContractNumber,
          stdDatePayment,
          stdDateExpiresContract,
          stdRegistrationDate,
          selectStudent,
          addStudent,
        }}
      >
        {children}
      </StudentContext.Provider>
    </div>
  );
};
