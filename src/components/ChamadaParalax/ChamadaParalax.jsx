import React, { useEffect } from "react";
import styles from "./ChamadaParalax.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

const ChamadaParalax = (props) => {
  const background = props.img;

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      data-aos="fade-up"
      className={styles.banner}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className={styles.filter}></div>
      <h1>{props.title}</h1>
    </div>
  );
};

export default ChamadaParalax;
