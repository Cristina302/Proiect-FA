import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <section className={styles.acasa_section}>
      <div  className={styles.acasa}>
        <h1><span>meet</span> people <br />discover <span>places</span> <br /><span>enjoy</span> time</h1>
      </div>
      <h1 className={`${styles.heading}`}>Despre noi</h1>
      <section>
        <div  className={styles.detalii}>
          <div className={`${styles.boxx}`}>
            <h3>De ce sa ne alegi pe noi?</h3>
            <ul>
              <li>cele mai bune preturi</li>
              <li>o selectie imensa de destinatii potrivite pentru orice turist</li>
              <li>servicii de cea mai inalta calitate</li>
              <li>suport permanent</li>
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.recenzii}>
        <h1 className={`${styles.heading}`}>Ce spun clientii</h1>
        <div className={styles.rec}>
          <div className={`${styles.box2}`}>
            <h3>Popescu Alina</h3>
            <p>A fost o experienta minunta pe care as dori sa o repet cat mai curand</p>
          </div>
          <div className={`${styles.box2}`}>
            <h3>Dogaru Robert</h3>
            <p>Servicii de calitate la cele mai bune preturi</p>
          </div>
          <div className={`${styles.box2}`}>
            <h3>Dacota</h3>
            <p>Calatorii fara incidente. Recomand din inima</p>
          </div>
        </div>
      </section>
    </section>
  );
};
export default Home;
