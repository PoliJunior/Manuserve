import React, { useEffect } from "react";
import styles from './produtos.module.css'
import produtos from '../../data/ProdutosData'
import Aos from "aos"
import "aos/dist/aos.css"
import CarrosselImagens from "../CarrosselImagens/CarrosselImagens";


const Produtos = () => {

  useEffect(() => {
    Aos.init({duration:1500})
  },[])

  return (
    <div className={styles.container}>
      {produtos.map((produto) => (
        <div className={styles.box} data-aos="fade-right" key={produto.id}>
          {produto.image2 ? 
          <CarrosselImagens props={produto}/>
          :
          <>
          <img src={produto.image} alt={produto.title} className={styles.img_box} />
          <div className={styles.info_box}>
            <h2>{produto.title}</h2>
            <p>{produto.description}</p>
          </div></>
          }
          
        </div>
      ))}
    </div>
  );
};

export default Produtos;
