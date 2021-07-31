import React from "react";

export const WeekDay = () => {
  const [seg, setSeg] = React.useState(null);
  const [ter, setTer] = React.useState(null);
  const [qua, setQua] = React.useState(null);
  const [qui, setQui] = React.useState(null);
  const [sex, setSex] = React.useState(null);

  React.useEffect(() => {
    const getWeekDay = () => {
      const dateNow = new Date();

      if (dateNow.getDay() === 1) dateNow.setDate(dateNow.getDate());
      if (dateNow.getDay() === 2) dateNow.setDate(dateNow.getDate() - 1);
      if (dateNow.getDay() === 3) dateNow.setDate(dateNow.getDate() - 2);
      if (dateNow.getDay() === 4) dateNow.setDate(dateNow.getDate() - 3);
      if (dateNow.getDay() === 5) dateNow.setDate(dateNow.getDate() - 4);

      dateNow.setMonth(dateNow.getMonth() + 1);

      const dateSeg =
        dateNow.getDate() +
        "/" +
        dateNow.getMonth() +
        "/" +
        dateNow.getFullYear();

      setSeg(dateSeg);

      dateNow.setDate(dateNow.getDate() + 1);

      const dateTer =
        dateNow.getDate() +
        "/" +
        dateNow.getMonth() +
        "/" +
        dateNow.getFullYear();
      setTer(dateTer);

      dateNow.setDate(dateNow.getDate() + 1);

      const dateQua =
        dateNow.getDate() +
        "/" +
        dateNow.getMonth() +
        "/" +
        dateNow.getFullYear();
      setQua(dateQua);

      dateNow.setDate(dateNow.getDate() + 1);

      const dateQui =
        dateNow.getDate() +
        "/" +
        dateNow.getMonth() +
        "/" +
        dateNow.getFullYear();
      setQui(dateQui);

      dateNow.setDate(dateNow.getDate() + 1);

      const dateSex =
        dateNow.getDate() +
        "/" +
        dateNow.getMonth() +
        "/" +
        dateNow.getFullYear();
      setSex(dateSex);
    };
    getWeekDay();
  }, [setSeg, setTer, setQua, setQui, setSex]);

  return { seg, ter, qua, qui, sex };
};