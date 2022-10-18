import React from "react";
import styles from "./Footer.module.css";
import logoManuserve from "../../images/logo.png";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const Footer = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDpi11NxjaRnmU9VqB6AAp6_ldKi_Fik9Y",
  });

  const position = {
    lat: -8.059528,
    lng: -34.903736,
  };

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
          <a href="https://www.instagram.com/manuservnordeste" className={styles.link} target="blank" rel="external"><i class="fa-brands fa-square-instagram"> @manuservnordest</i></a>
        </div>
      </div>
      <div className={styles.logo}>
        <img src={logoManuserve} alt="Logo manuserve" />
      </div>
      <div className={styles.mapWrapper}>
        <div className={styles.map}>
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={{ width: "100%", height: "100%" }}
              center={position}
              zoom={15}
            >
              <Marker position={position} />
            </GoogleMap>
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  );
};

export default Footer;
