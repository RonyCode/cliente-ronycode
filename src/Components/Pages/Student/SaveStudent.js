import React, { useContext } from "react";
import FormStudent from "../../Input/FormStudent";
import { StudentContext } from "../../StudentStorage";
import styles from "../../Input/FormSelectDays.module.css";
import { useParams } from "react-router-dom";

const SaveStudent = () => {
  const { id } = useParams();
  const [name, setName] = React.useState();
  const [editData, setEditData] = React.useState("");
  const [phone, setPhone] = React.useState();
  const [email, setEmail] = React.useState();
  const [address, setAddress] = React.useState();
  const [birthday, setBirthday] = React.useState();
  const [grade, setGrade] = React.useState();
  const [progress, setProgress] = React.useState([]);
  const [contractNumber, setContractNumber] = React.useState();
  const [situation, setSituation] = React.useState();
  const [responsible, setResponsible] = React.useState();
  const [responsiblePhone, setResponsiblePhone] = React.useState();
  const [datePayment, setDatePayment] = React.useState();
  const [dayStudent, setDayStudent] = React.useState([]);
  const [hourInput, setHourInput] = React.useState([]);
  const [hourOutput, setHourOutput] = React.useState([]);
  const [dayEditStudent, setDayEditStudent] = React.useState([]);
  const [hourEditInput, setHourEditInput] = React.useState([]);
  const [hourEditOutput, setHourEditOutput] = React.useState([]);
  const [saveData, setSaveData] = React.useState([]);
  const [showSelected, setShowSelected] = React.useState(styles.drowmbox);
  const [pay, setPay] = React.useState({
    day: "",
    hour_input: "",
    hour_output: "",
  });

  const { addStudent, updateStudent, selectStudent, stdData } =
    useContext(StudentContext);

  const formData = new FormData();
  formData.append("id", id);
  formData.append("name", name);
  formData.append("phone", phone);
  formData.append("email", email);
  formData.append("address", address);
  formData.append("birthday", birthday);
  formData.append("grade", grade);
  formData.append("progress", progress);
  formData.append("contract_number", contractNumber);
  formData.append(
    "day_student",
    saveData &&
      saveData.map(
        (item) => item.day + " " + item.hour_input + " " + item.hour_output
      )
  );
  formData.append("date_payment", datePayment);
  formData.append("situation", situation);
  formData.append("responsible", responsible);
  formData.append("responsible_phone", responsiblePhone);

  function handleSubmit(event) {
    event.preventDefault();
    if (id) {
      updateStudent(formData);
    } else {
      addStudent(formData);
    }
  }

  const hour = [
    "08h:00min",
    "08h:30min",
    "09h:00min",
    "09h:30min",
    "10h:00min",
    "10h:30min",
    "13h:30min",
    "14h:00min",
    "14h:30min",
    "15h:00min",
    "15h:30min",
    "16h:00min",
    "16h:30min",
  ];
  const days = ["seg", "ter", "qua", "qui", "sex"];

  const progressArr = [
    "Pré-silábico",
    "Silábico",
    "Silábico sem valor",
    "Silábico com valor",
    "Alfabetizado",
  ];

  const gradeArr = [
    "Alfabetização",
    "1º Ano",
    "2º Ano",
    "3º Ano",
    "4º Ano",
    "5º Ano",
  ];
  const situationArr = ["Adimplente", "Inadimplente"];

  const handleChangeDay = (e) => {
    if (e.target.checked) {
      setDayStudent(e.target.value);
    } else {
      setDayStudent(stdData.dayStudent.split(","));
    }
  };
  const handleChangeHourInput = (e) => {
    if (e.target.checked) {
      setHourInput(e.target.value);
    } else {
      setHourInput(hourEditInput);
    }
  };
  const handleChangeHourOutput = (e) => {
    if (e.target.checked) {
      setHourOutput(e.target.value);
    } else {
      setHourOutput(hourEditOutput);
    }
  };

  const handleChangeProgress = (e) => {
    if (e.target.checked) {
      setProgress(e.target.value);
    }
  };

  const handleChangeGrade = (e) => {
    if (e.target.checked) {
      setGrade(e.target.value);
    }
  };
  const handleChangeSituation = (e) => {
    if (e.target.checked) {
      setSituation(e.target.value);
    }
  };

  React.useEffect(() => {
    dayEditStudent && setDayStudent(stdData.dayStudent.split(",", 1));

    if (id) {
      selectStudent(id);
      setName(stdData.name);
      setEmail(stdData.email);
      setPhone(stdData.phone);
      setAddress(stdData.address);
      setPhone(stdData.phone);
      setGrade(stdData.grade);
      setProgress(stdData.progress);
      setBirthday(stdData.birthday);
      setSituation(stdData.situation);
      setDatePayment(stdData.datePayment);
      setContractNumber(stdData.contractNumber);
      setResponsible(stdData.responsible);
      setResponsiblePhone(stdData.responsiblePhone);
      setEditData(stdData.dayStudent);
      setShowSelected(styles.container_show);
      // setPay({
      //   day: dayEditStudent,
      //   hour_input: hourEditInput,
      //   hour_output: hourEditOutput,
      // });
    }

    if (dayStudent && hourInput && hourOutput) {
      setPay({
        day: dayStudent,
        hour_input: hourInput,
        hour_output: hourOutput,
      });
    } else {
      setPay({
        day: dayEditStudent,
        hour_input: hourEditInput,
        hour_output: hourEditOutput,
      });
    }
  }, [
    dayStudent,
    hourInput,
    hourOutput,
    // dayEditStudent,
    // hourEditInput,
    // hourEditOutput,
    stdData.name,
    stdData.name,
    stdData.phone,
    stdData.email,
    stdData.address,
    stdData.grade,
    stdData.progress,
    stdData.birthday,
    stdData.situation,
    stdData.dayStudent,
    stdData.datePayment,
    stdData.contractNumber,
    stdData.responsible,
    stdData.responsiblePhone,
  ]);

  const handleClick = () => {
    if (pay) {
      setSaveData((saveData) => [...saveData, pay]);
      setShowSelected(styles.container_show);
    }
    // else {
    //   setPay("");
    // }
  };

  console.log(dayEditStudent);

  return (
    <div>
      <FormStudent
        valueName={name || ""}
        valueAddress={address || ""}
        valueBirthday={birthday || ""}
        valueEmail={email || ""}
        valuePhone={phone || ""}
        valueGrade={grade || ""}
        valueProgress={progress || ""}
        valueContractNumber={contractNumber || ""}
        valueDatePayment={datePayment || ""}
        valueSituation={situation || ""}
        valueResponsible={responsible || ""}
        valueResponsiblePhone={responsiblePhone || ""}
        setName={setName}
        setAddress={setAddress}
        setContractNumber={setContractNumber}
        setBirthday={setBirthday}
        setSituation={setSituation}
        setDatePayment={setDatePayment}
        setEmail={setEmail}
        setGrade={setGrade}
        setProgress={setProgress}
        setPhone={setPhone}
        setResponsible={setResponsible}
        setResponsiblePhone={setResponsiblePhone}
        onSubmit={handleSubmit}
        required={true}
        valueSelectProgress={progressArr}
        valueSelectGrade={gradeArr}
        valueSelectSituation={situationArr}
        valueSelectDays={days}
        valueSelectHour={hour}
        valueCheckSelectDay={dayStudent}
        valueCheckSelectHourInput={hourInput}
        valueCheckSelectHourOutput={hourOutput}
        valueCheckFormFinal={pay}
        saveData={saveData}
        editData={editData}
        onClick={handleClick}
        showSelected={showSelected}
        onChangeDay={handleChangeDay}
        onChangeHourInput={handleChangeHourInput}
        onChangeHourOutput={handleChangeHourOutput}
        onChangeSelectProgress={handleChangeProgress}
        onChangeSelectGrade={handleChangeGrade}
        onChangeSelectSituation={handleChangeSituation}
      />
    </div>
  );
};
export default SaveStudent;
