import React from "react";
import ChamadaParalax from "../ChamadaParalax/ChamadaParalax";
import backgroundSobre from "../../images/banner-produtos.png";
import style from "./Sobre.module.css";
import CarroselVideos from "../CarrosselVideos/CarroselVideos";

const Sobre = () => {
  return (
    <div id="sobre">
      <ChamadaParalax img={backgroundSobre} title="Sobre Nós" />
      <div className={style.content}>
        <p>
          A manuserv, focada exclusivamente no produto portas automáticas
          sociais, proporciona segurança e tranquilidade porque possui técnicos
          formados e treinados na fábrica da marca, munidos de instrumentos,
          ferramentas e materiais exclusivos, de fabricação própria, conferindo
          diagnóstico preciso, aos nossos diversos produtos e serviços.
          Grandiosas empresas de negócios e destaque expressivos de mercado,
          como shoppings center, aeroportos, hospitais, construtoras, hotéis e
          resorts vem depositando grande confiança na nossa marca como também na
          assistência permanente oferecidas em todas as fases das nossas
          relações.
        </p>
        <br />
        <CarroselVideos />
      </div>
    </div>
  );
};

export default Sobre;
