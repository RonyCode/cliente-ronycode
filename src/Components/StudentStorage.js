import React, {isValidElement} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {POST_ADD_STD, SELECT_STD} from "../api/api";
import axios from "axios";

export const StudentContext = React.createContext("");

const StudentStorage = ({children}) => {
  const [id, setId] = React.useState(null);
  const [stdName, setstdName] = React.useState(null);
  const [stdAddress, setStdAddress] = React.useState(null);
  const [stdPhone, setStdPhone] = React.useState(null);

  // const [login, setLogin] = React.useState(null);
  // const [loading, setLoading] = React.useState(false);
  // const [error, setError] = React.useState(null);
  const [stdData, setStdData] = React.useState("");
  const navigate = useNavigate();

  React.useEffect(() => {
    const selectStudent = async () => {
      try {
        const {url, options} = SELECT_STD(id);
        const response = await axios(url, options);
        response && setStdData(response.data.data[0]);
        setstdName(stdData.name);
        setStdAddress(stdData.name);
        setStdPhone(stdData.phone);
        console.log(response.data.data[0]);
      } catch (response) {
        console.log(response.response.data);
      }
    };
    selectStudent();
  }, [stdData.name, stdData.address, stdData.phone]);

  const addStudent = (formData) => {
    const {url, options} = POST_ADD_STD(formData);

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
        }}
      >
        {children}
      </StudentContext.Provider>
    </div>
  );
};
export default StudentStorage;
