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
            A empresa manuserv, criada no ano de 2008, focada no produto portas automáticas sociais, é
            distribuidor da marca manusa, possui ampla gama de produtos e acessórios bem como
            soluções personalizadas para vários tipos de portas automáticas. Desde o início das suas
            atividades vem desenvolvendo, capital humano qualificado, acervo técnico junto ao CREA,
            fornecedores confiáveis, infraestrutura logística, estoques e assistência técnica acompanhadas
            de ferramentas, instrumentos e materiais exclusivos, conferindo diagnósticos precisos aos
            nossos produtos. Grandes empresas de negócios e destaque expressivos do mercado, como
            shoppings center, aeroportos, hospitais, construtoras, hotéis, resorts, condomínios,
            supermercados, vem depositando grande confiança na nossa marca e assistência técnica.
            Escolher manuserv é marcar um encontro em algum lugar no futuro, é a escolha certa que
            abri infinitas vezes a inteligente porta que nos aproxima.
          </p>
          <br />
          <p>
            A marca manusa está presente em mais de 90 países e cinco continentes, oferece
            equipamentos e acessórios digitais inteligentes de última geração, duráveis e seguros, seus
            desenvolvedores produzem e atualizam constantemente as diversas tecnologias, levando ao
            consumidor a confiança e a certeza de excelentes negócios.
          </p>
        </div>
        <div data-aos="flip-left" className={styles.info_img}></div>
      </div>
      <ChamadaParalax img={backgroundProdutos} title="Nossos Produtos" />
    </div>
  );
};

export default InfoSection;
