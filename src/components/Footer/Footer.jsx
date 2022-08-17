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
          <p>(99)9 9999-9999</p>
          <p>(99)9 9999-9999</p>
          <p>teste@gmail.com</p>
        </div>
        <div className={styles.vl}></div>
        <div id={styles.social}>
          <i class="fa-brands fa-square-facebook"></i>
          <i class="fa-brands fa-square-instagram"></i>
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
