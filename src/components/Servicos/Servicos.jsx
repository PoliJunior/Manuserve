import React from "react";
import ChamadaParalax from "../ChamadaParalax/ChamadaParalax";
import backgroundServico from "../../images/banner-servicos.jpg";
import style from "./Servicos.module.css";

const Servicos = () => {



  return (
    <div id="servicos">
      <ChamadaParalax img={backgroundServico} title="Serviços" />
      <div className={style.content} >
        <p>
          Precisa de instalação, manutenção, peças, contratos, consultoria, 
          melhorias e assistência permanente em portas automáticas sociais, sem 
          improvisos e ou arranjos e ainda com segurança e qualidade, é fácil, contrate 
          o capital humano especializado da manuserv.
        </p>
        <button className={style.btn}><a href="#contato" className={style.a}>Entrar em contato</a></button>
      </div>
    </div>
  );
};

export default Servicos;
