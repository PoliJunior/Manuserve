import React, { useEffect } from "react";
import styles from "./infoSection.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import ChamadaParalax from "../ChamadaParalax/ChamadaParalax";
import backgroundProdutos from "../../images/banner-produtos.jpg";

const InfoSection = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className={styles.container}>
      <div data-aos="fade-up" className={styles.info}>
        <div className={styles.description}>
          <h1>ManuServ</h1>
        </div>
        <div data-aos="flip-left" className={styles.info_img}></div>
      </div>
      <ChamadaParalax img={backgroundProdutos} title="Nossos Produtos" />
    </div>
  );
};

export default InfoSection;
