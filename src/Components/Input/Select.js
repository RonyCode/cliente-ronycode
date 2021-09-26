import React from "react";
import "./Select.css";
import styles from "./Select.css";
import iconSeg from "../../Assets/seg.png";
import iconTer from "../../Assets/ter.png";
import iconQua from "../../Assets/qua.png";
import iconQui from "../../Assets/qui.png";
import iconSex from "../../Assets/sex.png";

const Select = ({ onChange, value, onCLick, selectExpand, addClass }) => {
  const hours = [
    "08h:00min as 09h:00min",
    "09h:00min as 10h:00min",
    "10h:00min as 11h:30min",
    "13h:30min as 15h:00min",
    "15h:00min as 16h:00min",
    "16h:00min as 17h:30min",
  ];

  return (
    <div className="select">
      <div className="select_container">
        <label>
          <p>Selecione</p>
          <input
            type="checkbox"
            checked={addClass === "select_expand"}
            onChange={onChange}
            value={addClass}
            id="button_expand"
          />
        </label>

        <div className={addClass}>
          <div className="select_item">
            <h4>Segunda-Feira</h4>
            {hours.map((item) => (
              <label key={item} className="select_label">
                <input
                  type="checkbox"
                  value={"seg " + item}
                  onChange={onChange}
                  className="item_checkbox"
                />
                <img
                  className="add_checkbox_icon"
                  src={iconSeg}
                  alt="icone checkbox"
                />
                <p>{item}</p>
              </label>
            ))}
          </div>
          <div>
            <h4>Terça-Feira</h4>
            {hours.map((item) => (
              <label key={item} className="select_label">
                <input
                  type="checkbox"
                  value={"ter " + item}
                  onChange={onChange}
                  className="item_checkbox"
                />
                <img
                  className="add_checkbox_icon"
                  src={iconTer}
                  alt="icone checkbox"
                />
                <p>{item}</p>
              </label>
            ))}
          </div>
          <div>
            <h4>Quarta-Feira</h4>
            {hours.map((item) => (
              <label key={item} className="select_label">
                <input
                  type="checkbox"
                  value={"qua " + item}
                  onChange={onChange}
                  className="item_checkbox"
                />
                <img
                  className="add_checkbox_icon"
                  src={iconQua}
                  alt="icone checkbox"
                />
                <p>{item}</p>
              </label>
            ))}
          </div>
          <div>
            <h4>Quinta-Feira</h4>
            {hours.map((item) => (
              <label key={item} className="select_label">
                <input
                  type="checkbox"
                  value={"qui " + item}
                  onChange={onChange}
                  className="item_checkbox"
                />
                <img
                  className="add_checkbox_icon"
                  src={iconQui}
                  alt="icone checkbox"
                />
                <p>{item}</p>
              </label>
            ))}
          </div>
          <div>
            <h4>Sexta-Feira</h4>
            {hours.map((item) => (
              <label key={item} className="select_label">
                <input
                  type="checkbox"
                  value={"sex " + item}
                  onChange={onChange}
                  className="item_checkbox"
                />
                <img
                  className="add_checkbox_icon"
                  src={iconSex}
                  alt="icone checkbox"
                />
                <p>{item}</p>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Select;
