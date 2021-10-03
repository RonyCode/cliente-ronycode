import React from "react";
import "./SelectList.css";
import iconSeg from "../../Assets/seg.png";
import iconTer from "../../Assets/ter.png";
import iconQua from "../../Assets/qua.png";
import iconQui from "../../Assets/qui.png";
import iconSex from "../../Assets/sex.png";

const SelectList = ({ onChange, selectPatern, valueSelect }) => {
  return (
    <div hidden={selectPatern}>
      <div className="select">
        <div className="select_container">
          <label htmlFor="button_expand">
            <p>Dias Selecionados</p>
            <input type="checkbox" onChange={onChange} id="button_expand" />

            <div className="select_expand" id="teste">
              <h4>Dias selecionado</h4>
              {valueSelect &&
                valueSelect.split(",").map((item) => (
                  <label key={item} className="select_label">
                    <input
                      type="checkbox"
                      value={item || ""}
                      onChange={onChange}
                      className="item_checkbox"
                    />
                    {item.substr(0, 3) === "seg" && (
                      <img
                        className="add_checkbox_icon"
                        src={iconSeg}
                        alt="icone checkbox"
                      />
                    )}{" "}
                    {item.substr(0, 3) === "ter" && (
                      <img
                        className="add_checkbox_icon"
                        src={iconTer}
                        alt="icone checkbox"
                      />
                    )}{" "}
                    {item.substr(0, 3) === "qua" && (
                      <img
                        className="add_checkbox_icon"
                        src={iconQua}
                        alt="icone checkbox"
                      />
                    )}{" "}
                    {item.substr(0, 3) === "qui" && (
                      <img
                        className="add_checkbox_icon"
                        src={iconQui}
                        alt="icone checkbox"
                      />
                    )}{" "}
                    {item.substr(0, 3) === "sex" && (
                      <img
                        className="add_checkbox_icon"
                        src={iconSex}
                        alt="icone checkbox"
                      />
                    )}
                    <p>{item}</p>
                  </label>
                ))}
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SelectList;
