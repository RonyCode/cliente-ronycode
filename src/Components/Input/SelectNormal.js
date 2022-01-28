import React from "react";
import "./SelectNormal.css";

const Select = ({
  onChange,
  valueCheck,
  valueAdd,
  icon,
  tittle,
  uncheckSelect,
}) => {
  const [checked, setChecked] = React.useState("");
  const [change, setChange] = React.useState("");
  const [unselect, setUnselect] = React.useState("select_label");

  const handleMouseLeave = (e) => {
    setChecked(false);
  };
  const handleMouseOver = (e) => {
    setChecked(true);
  };
  React.useEffect(() => {
    valueCheck && change ? setChange(valueCheck) : setChange(() => "Selecione");
    // if (valueCheck) {
    //   setUnselect("hiden_checkbox");
    // }
  }, [valueCheck, uncheckSelect]);
  return (
    <div>
      <div className="select">
        <div
          className="select_container"
          onMouseLeave={handleMouseLeave}
          onMouseOver={handleMouseOver}
        >
          <label htmlFor="button_expand">
            {change}
            <input type="checkbox" checked={checked} id="button_expand" />
            <div className="select_expand">
              <label>
                <input
                  type="checkbox"
                  value={valueCheck}
                  onChange={onChange}
                  id="item_checkbox"
                />
              </label>

              <h4 className="select_divisor">{tittle}</h4>
              {valueAdd &&
                valueAdd.map((item) => (
                  <div className={unselect} key={item}>
                    <label className="select_label">
                      <input
                        type="checkbox"
                        value={item}
                        checked={item === valueCheck}
                        onChange={onChange}
                        id="item_checkbox"
                      />

                      <div className="select_item_icon">
                        <img
                          className="add_checkbox_icon"
                          src={icon}
                          alt="icone checkbox"
                        />
                        <p className={"select_item"}>{item}</p>
                      </div>
                    </label>
                  </div>
                ))}
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};
export default Select;
