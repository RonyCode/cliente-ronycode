import React from "react";
import "./Select.css";

import iconSeg from "../../Assets/seg.png";
import iconTer from "../../Assets/ter.png";
import iconQua from "../../Assets/qua.png";
import iconQui from "../../Assets/qui.png";
import iconSex from "../../Assets/sex.png";

const Select = ({ onChange, valueCheck, valueAdd }) => {
  const [checked, setChecked] = React.useState("");
  const handleMouseLeave = (e) => {
    setChecked(false);
  };
  const handleMouseOver = (e) => {
    setChecked(true);
  };

  return (
    <div>
      <div className="select">
        <div
          className="select_container"
          onMouseLeave={handleMouseLeave}
          onMouseOver={handleMouseOver}
        >
          <label htmlFor="button_expand">
            <p>Selecione</p>

            <input
              type="checkbox"
              readOnly={true}
              checked={checked}
              id="button_expand"
            />

            <div className="select_expand">
              {valueCheck.split &&
                valueCheck.split(",").map((item) => (
                  <label key={item} className="select_label">
                    <input
                      type="checkbox"
                      value={item}
                      onChange={onChange}
                      id="item_checkbox"
                    />
                    {item.includes("seg") && (
                      <div className="select_item_icon">
                        <img
                          className="add_checkbox_icon"
                          src={iconSeg}
                          alt="icone checkbox"
                        />
                        <p className={"select_item"}>{item}</p>
                      </div>
                    )}
                    {item.includes("ter") && (
                      <div className="select_item_icon">
                        <img
                          className="add_checkbox_icon"
                          src={iconTer}
                          alt="icone checkbox"
                        />
                        <p className={"select_item"}>{item}</p>
                      </div>
                    )}
                    {item.includes("qua") && (
                      <div className="select_item_icon">
                        <img
                          className="add_checkbox_icon"
                          src={iconQua}
                          alt="icone checkbox"
                        />
                        <p className={"select_item"}>{item}</p>
                      </div>
                    )}{" "}
                    {item.includes("qui") && (
                      <div className="select_item_icon">
                        <img
                          className="add_checkbox_icon"
                          src={iconQui}
                          alt="icone checkbox"
                        />
                        <p className={"select_item"}>{item}</p>
                      </div>
                    )}{" "}
                    {item.includes("sex") && (
                      <div className="select_item_icon">
                        <img
                          className="add_checkbox_icon"
                          src={iconSex}
                          alt="icone checkbox"
                        />
                        <p className={"select_item"}>{item}</p>
                      </div>
                    )}
                  </label>
                ))}

              <h4 className="select_divisor">Selecione horario</h4>
              {valueAdd &&
                valueAdd.map((item) =>
                  item.map((item2) => (
                    <div key={item2}>
                      <label className="select_label">
                        <input
                          type="checkbox"
                          value={item2}
                          onChange={onChange}
                          id="item_checkbox"
                        />
                        {item2.includes("seg") && (
                          <div className="select_item_icon">
                            <img
                              className="add_checkbox_icon"
                              src={iconSeg}
                              alt="icone checkbox"
                            />
                            <p className={"select_item"}>{item2}</p>
                          </div>
                        )}
                        {item2.includes("ter") && (
                          <div className="select_item_icon">
                            <img
                              className="add_checkbox_icon"
                              src={iconTer}
                              alt="icone checkbox"
                            />
                            <p className={"select_item"}>{item2}</p>
                          </div>
                        )}
                        {item2.includes("qua") && (
                          <div className="select_item_icon">
                            <img
                              className="add_checkbox_icon"
                              src={iconQua}
                              alt="icone checkbox"
                            />
                            <p className={"select_item"}>{item2}</p>
                          </div>
                        )}
                        {item2.includes("qui") && (
                          <div className="select_item_icon">
                            <img
                              className="add_checkbox_icon"
                              src={iconQui}
                              alt="icone checkbox"
                            />
                            <p className={"select_item"}>{item2}</p>
                          </div>
                        )}
                        {item2.includes("sex") && (
                          <div className="select_item_icon">
                            <img
                              className="add_checkbox_icon"
                              src={iconSex}
                              alt="icone checkbox"
                            />
                            <p className={"select_item"}>{item2}</p>
                          </div>
                        )}
                      </label>
                    </div>
                  ))
                )}
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};
export default Select;
