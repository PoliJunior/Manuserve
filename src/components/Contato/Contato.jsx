import React from "react";
import ChamadaParalax from "../ChamadaParalax/ChamadaParalax";
import style from "./Contato.module.css";
import backgroundContato from "../../images/banner-produtos.png";

const Contato = () => {
  return (
    <>
      <ChamadaParalax img={backgroundContato} title="Contato" />
      <div className={style.contato}>TODO: formulário de contato</div>
    </>
  );
};

export default Contato;
