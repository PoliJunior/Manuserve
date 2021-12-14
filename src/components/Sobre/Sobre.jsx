import React from "react";
import ChamadaParalax from "../ChamadaParalax/ChamadaParalax";
import backgroundSobre from "../../images/banner-produtos.png";
import style from "./Sobre.module.css";

const Sobre = () => {
  return (
    <>
      <ChamadaParalax img={backgroundSobre} title="Sobre Nós" />
      <div className={style.content}>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu
          ultrices quam. Sed id vestibulum risus, quis tincidunt justo. Morbi
          fringilla tellus eget ultrices luctus. Donec at quam eu lorem sagittis
          laoreet vel sit amet turpis.
        </h3>
      </div>
    </>
  );
};

export default Sobre;
