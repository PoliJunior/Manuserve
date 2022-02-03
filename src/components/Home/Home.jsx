import React from "react";
import styles from "./styles.module.css";
import { Spring, animated } from "react-spring";

const Home = () => {
  return (
    <div className={styles.home} id="home">
      <div className={styles.banner}>
        <div className={styles.filter}></div>
        <div className={styles.content}>
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{delay:1000, duration:1500}}>
            {props => (
              <animated.div style={props}>
                <h1>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu
                  ultrices quam. Sed id vestibulum risus
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