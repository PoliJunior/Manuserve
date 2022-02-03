import React, { useEffect } from "react";
import styles from "./infoSection.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import ChamadaParalax from "../ChamadaParalax/ChamadaParalax";
import backgroundProdutos from "../../images/banner-produtos.png";

const InfoSection = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className={styles.container}>
      <div data-aos="fade-up" className={styles.info}>
        <div className={styles.description}>
          <h1>ManuServe</h1>
          <p>
            Estrutura enxuta, com técnicos formados e treinados na matriz da
            fábrica em SP, uniformizados e munidos de instrumentos, ferramentas
            e materiais exclusivos, para diagnóstico preciso, tudo atualizado
            com as tecnologias de ponta, para proporcionar ao nosso cliente
            segurança e tranquilidade na relação de consumo dos nossos produtos
            e serviços. Escolher manuserv é marcar um encontro em algum lugar no
            futuro, é a escolha certa que abri infinitas vezes a inteligente
            porta que nos aproxima. Somos construídos por todos esses valores
            tecnológicos somados a tranquilidade, segurança, robustez e beleza
            para proporcionar a melhor experiência real na entrega dos nossos
            produtos e serviços.
          </p>
        </div>
        <div data-aos="flip-left" className={styles.info_img}></div>
      </div>
      <ChamadaParalax img={backgroundProdutos} title="Nossos Produtos" />
    </div>
  );
};

export default InfoSection;
