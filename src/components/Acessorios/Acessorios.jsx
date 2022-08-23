import React from "react";
import styles from "./Acessorios.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/components/navigation/navigation.min.css";
import acessorios from "../../data/AcessoriosData";

SwiperCore.use([Pagination, Navigation, Autoplay]);

const Acessorios = () => {

  return (
    <section className={styles.container}>
      <div className={styles.chamada}>
        <div className={styles.chamada_barra}></div>
        <h1>Acessórios</h1>
        <div className={styles.chamada_barra}></div>
      </div>

      <div className={styles.swiper}>
        <Swiper
          spaceBetween={30}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640:{
              slidesPerView:2,
            },
            760: {
              slidesPerView:3
            },
            900:{
              slidesPerView:3
            }
          }}
          pagination={{ clickable: true }}
        >
          {acessorios.map((acessorio) => (
            <SwiperSlide key={acessorio.id}>
              <div className={styles.card}>
                <img
                  src={acessorio.image}
                  alt={acessorio.title}
                  className={styles.img_card}
                />
                <h2>{acessorio.title}</h2>
                <p>{acessorio.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Acessorios;
