import React from "react";
import styles from "./UserEventWeek.module.css";
import Input from "../../Input/Input";

const UserEventWeek = () => {
  return (
    <div className={styles.user_event_week}>
      <div className={styles.event_container}>
        <div className={styles.edit_report}>
          <h2>Eventos</h2>
          <form action="">
            <textarea
              name="text_report"
              id="teste"
              cols="60"
              rows="15"
              value={
                "tasdasdtsdaaaaaaaaaaaaaaazxxxxxxxxxxraesdasd asdas das das dasda ffffffffffffffff"
              }
            />
            <button>Atualizar </button>
          </form>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
            consequatur esse excepturi facere maxime minus odit saepe. Eligendi,
            nihil, officia.
          </p>
        </div>

        <div className={styles.edit_weekday}>
          <h2>Eventos</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
            consequatur esse excepturi facere maxime minus odit saepe. Eligendi,
            nihil, officia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserEventWeek;
