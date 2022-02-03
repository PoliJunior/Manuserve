import React from "react";
import styles from "./Footer.module.css";
import logoManuserve from "../../images/logo.png";

const Footer = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contato}>
        <h2>Contato</h2>
        <p>(99)9 9999-9999</p>
        <p>(99)9 9999-9999</p>
        <p>teste@gmail.com</p>
      </div>
      <div className={styles.logo}>
        <img src={logoManuserve} alt="Logo manuserve" />
      </div>
      <div className={styles.mapWrapper}>
          <div className={styles.map}></div>
      </div>
    </section>
  );
};

export default Footer;
