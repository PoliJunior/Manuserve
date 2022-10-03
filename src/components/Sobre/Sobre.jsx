import React from "react";
import ChamadaParalax from "../ChamadaParalax/ChamadaParalax";
import backgroundSobre from "../../images/banner-sobre.jpg";
import style from "./Sobre.module.css";
import CarrosselVideos from "../CarrosselVideos/CarrosselVideos";

const Sobre = () => {
  return (
    <div id="sobre">
      <ChamadaParalax img={backgroundSobre} title="Sobre Nós" />
      <div className={style.content}>
        <p>
        A manuserv, é uma empresa nordestina, focada exclusivamente no produto portas automáticas. 
        A marca manusa está presente em mais de 90 países e cinco continentes, oferece equipamentos e 
        acessórios digitais inteligentes de última geração, duráveis e seguros, seus desenvolvedores 
        produzem e atualizam constantemente as diversas tecnologias, a manuserv representa, confiança e 
        a certeza de excelentes negócios.      
        </p>
        <br />
        <CarrosselVideos />
      </div>
    </div>
  );
};

export default Sobre;
