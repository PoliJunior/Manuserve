import React from "react";
import ChamadaParalax from "../ChamadaParalax/ChamadaParalax";
import backgroundServico from "../../images/banner-produtos.png";
import style from "./Servicos.module.css";

const Servicos = () => {
  return (
    <div id="servicos">
      <ChamadaParalax img={backgroundServico} title="Serviços" />
      <div className={style.content} >
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu
          ultrices quam. Sed id vestibulum risus, quis tincidunt justo. Morbi
          fringilla tellus eget ultrices luctus. Donec at quam eu lorem sagittis
          laoreet vel sit amet turpis.
        </h3>
        <button className={style.btn}>Entrar em contato</button>
      </div>
    </div>
  );
};

export default Servicos;
