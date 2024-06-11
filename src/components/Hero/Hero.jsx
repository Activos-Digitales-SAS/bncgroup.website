import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h2 className={styles.subheading}>Proveedores de</h2>
        <h1 className={styles.heading}>Activos Virtuales</h1>
        <p className={styles.description}>
          Somos su socio confiable en AWS ElastiCache, BaaS, AI y ML, y SECaaS. Nuestra empresa gestiona servicios avanzados de activos virtuales para mejorar su infraestructura tecnológica y seguridad.
        </p>
        <button className={styles.ctaButton}>Leer Normativa</button>
      </div>
      <div className={styles.imageContainer}>
        <img src="/robothero.png" alt="Robot Hero" className={styles.heroImage} />
      </div>
    </section>
  );
};

export default Hero;
