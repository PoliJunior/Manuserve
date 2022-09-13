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
            A empresa manuserv, criada no ano de 2008, focada no produto portas automáticas sociais, é
            distribuidora da marca manusa. Possui ampla gama de produtos e acessórios, bem como
            soluções personalizadas para vários tipos de portas automáticas. Desde o início das suas
            atividades vem desenvolvendo capital humano qualificado, acervo técnico junto ao CREA,
            fornecedores confiáveis, infraestrutura logística, estoques e assistência técnica acompanhadas
            de ferramentas, instrumentos e materiais exclusivos, conferindo diagnósticos precisos aos
            seus produtos. Grandes empresas de negócios e destaque expressivos do mercado, como
            shopping centers, aeroportos, hospitais, construtoras, hotéis, resorts, condomínios,
            supermercados, vem depositando grande confiança na marca manusa e na assistência técnica manuserv.
            Escolher manuserv é marcar um encontro em algum lugar no futuro, é a escolha certa que
            abre infinitas vezes a inteligente porta que nos aproxima.
          </p>
          <br />
          <p>
            A marca manusa está presente em mais de 90 países e cinco continentes, oferece
            equipamentos e acessórios digitais inteligentes de última geração, duráveis e seguros, seus
            desenvolvedores produzem e atualizam constantemente as diversas tecnologias, levando ao
            consumidor a confiança e a certeza de excelentes produtos.
          </p>
        <br />
        <CarrosselVideos />
      </div>
    </div>
  );
};

export default Sobre;
