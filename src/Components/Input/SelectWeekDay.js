import React from "react";
import "./SelectNormal.css";
import iconSeg from "../../Assets/seg.png";
import iconTer from "../../Assets/ter.png";
import iconQua from "../../Assets/qua.png";
import iconQui from "../../Assets/qui.png";
import iconSex from "../../Assets/sex.png";

const SelectWeekDay = ({ onChangeDay, valueCheck, valueArrDays }) => {
  const [checked, setChecked] = React.useState("");
  const [change, setChange] = React.useState("");

  const handleMouseLeave = (e) => {
    setChecked(false);
  };
  const handleMouseOver = (e) => {
    setChecked(true);
  };
  React.useEffect(() => {
    valueCheck && change ? setChange(valueCheck) : setChange(() => "Selecione");
  }, [valueCheck]);
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
              {valueArrDays &&
                valueArrDays.map((item) => (
                  <div key={item}>
                    <label className="select_label">
                      <input
                        type="checkbox"
                        value={item}
                        checked={item === valueCheck || ""}
                        onChange={onChangeDay}
                        id="item_checkbox"
                      />
                      {item === "seg" && (
                        <div key={item} className="select_item_icon">
                          <img
                            className="checkbox_icon_day"
                            src={iconSeg}
                            alt="icone checkbox"
                          />
                          <p className={"select_item"}>{item}</p>
                        </div>
                      )}
                      {item === "ter" && (
                        <div key={item} className="select_item_icon">
                          <img
                            className="checkbox_icon_day"
                            src={iconTer}
                            alt="icone checkbox"
                          />
                          <p className={"select_item"}>{item}</p>
                        </div>
                      )}{" "}
                      {item === "qua" && (
                        <div key={item} className="select_item_icon">
                          <img
                            className="checkbox_icon_day"
                            src={iconQua}
                            alt="icone checkbox"
                          />
                          <p className={"select_item"}>{item}</p>
                        </div>
                      )}{" "}
                      {item === "qui" && (
                        <div key={item} className="select_item_icon">
                          <img
                            className="checkbox_icon_day"
                            src={iconQui}
                            alt="icone checkbox"
                          />
                          <p className={"select_item"}>{item}</p>
                        </div>
                      )}{" "}
                      {item === "sex" && (
                        <div key={item} className="select_item_icon">
                          <img
                            className="checkbox_icon_day"
                            src={iconSex}
                            alt="icone checkbox"
                          />
                          <p className={"select_item"}>{item}</p>
                        </div>
                      )}{" "}
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
export default SelectWeekDay;
