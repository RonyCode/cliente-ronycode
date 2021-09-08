import React from "react";
import styles from "./WeekPlanning.module.css";

const WeekPlanning = () => {
  return (
    <div className={styles.planning}>
      <div className={styles.planning_container}>
        <h1>Planejamento Semanal</h1>
        <div className={styles.planning_table}>
          <div className={styles.planning_table_title}>Calendário</div>
          <div className={styles.planning_table_seg}>Seg</div>
          <div className={styles.planning_table_ter}>Ter</div>
          <div className={styles.planning_table_qua}>Qua</div>
          <div className={styles.planning_table_qui}>Qui</div>
          <div className={styles.planning_table_sex}>Sex</div>
          <div className={styles.table_description_tittle}>Descrição </div>
          <div className={styles.table_description_seg}>Descrição seg</div>
          <div className={styles.table_description_ter}>Descrição ter</div>
          <div className={styles.table_description_qua}>Descrição qua</div>
          <div className={styles.table_description_qui}>Descrição qui</div>
          <div className={styles.table_description_sex}>Descrição sex</div>
        </div>
      </div>
    </div>
  );
};

export default WeekPlanning;
