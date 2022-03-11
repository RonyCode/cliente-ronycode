import React from "react";
import FormSelectDays from "../../Input/FormSelectDays";
import { StudentContext } from "../../StudentStorage";

const Contact = () => {
  const { dataSelect } = React.useContext(StudentContext);
  console.log(dataSelect);
  return (
    <div>
      <FormSelectDays />
    </div>
  );
};
export default Contact;
