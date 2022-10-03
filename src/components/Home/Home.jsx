import React from "react";
import styles from "./styles.module.css";
import { Spring, animated } from "react-spring";

const Home = () => {
  return (
    <div className={styles.home} id="home">
      <div className={styles.banner}>
        <div className={styles.filter}></div>
        <div className={styles.content}>
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: 1000, duration: 1500 }}
          >
            {(props) => (
              <animated.div style={props}>
                <h1>
                  Manuserv comercio, manutenção e serviços em portas automáticas. Sofisticação e durabilidade aliada 
                  à tecnologia de alta performance e eficiência energética
                </h1>
              </animated.div>
            )}
          </Spring>
        </div>
      </div>
    </div>
  );
};

export default Home;
