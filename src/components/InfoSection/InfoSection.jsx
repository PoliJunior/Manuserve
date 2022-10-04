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
          <p>
            A empresa manuserv, criada no ano de 2008, focada no produto portas automáticas sociais, 
            é distribuidora da marca manusa, possui ampla gama de produtos e acessórios bem como soluções 
            personalizadas para vários tipos de portas automáticas. Desde o início das suas atividades vem 
            desenvolvendo, capital humano qualificado, acervo técnico, fornecedores confiáveis, infraestrutura 
            logística, estoques e assistência técnica acompanhadas de ferramentas, instrumentos e materiais exclusivos, 
            conferindo diagnósticos precisos. Grandes   empresas de negócios e destaque expressivos do mercado, como shoppings 
            center, aeroportos, hospitais, construtoras, hotéis, resorts, condomínios, supermercados, vem depositando grande 
            confiança na nossa marca e assistência técnica. Escolher <strong>manuserv é marcar um encontro em algum lugar no futuro, é a 
            escolha certa que abre infinitas vezes a inteligente porta que nos aproxima.</strong>
            </p>
        </div>
        <div data-aos="flip-left" className={styles.info_img}></div>
      </div>
      <ChamadaParalax img={backgroundProdutos} title="Nossos Produtos" />
    </div>
  );
};

export default InfoSection;
