import React from "react";
import styles from "./Footer.module.css";
import logoManuserve from "../../images/logo.png";

const Footer = () => {

  return (
    <section className={styles.container}>
      <div className={styles.contato}>
        <div id="contact_info">
          <h2>Contato</h2>
          <p>(81)9 9445-9834</p>
          <p>(81)9 3048-0206</p>
          <p>contato@manuservnordeste.com</p>
        </div>
        <div className={styles.vl}></div>
        <div id={styles.social}>
          <a href="https://contate.me/manuserv" className={styles.link} target="blank" rel="external"><i class="fa-brands fa-square-whatsapp"> WhatsApp</i></a>
          <a href="https://www.instagram.com/manuservnordeste" className={styles.link} target="blank" rel="external"><i class="fa-brands fa-square-instagram"> @manuservnordeste</i></a>
        </div>
      </div>
      <div className={styles.logo}>
        <img src={logoManuserve} alt="Logo manuserve" />
      </div>
      <div className={styles.mapWrapper}>
        <div className={styles.map}>
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.5124076729453!2d-34.93060438461543!3d-8.049097682629093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1f27dde41255%3A0x206e518b562ecc3f!2sMANUSA%20DO%20NORDESTE%20-%20MANUSERV!5e0!3m2!1spt-BR!2sbr!4v1666135316901!5m2!1spt-BR!2sbr" className={styles.map} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        
      </div>
    </section>
  );
};

export default Footer;
