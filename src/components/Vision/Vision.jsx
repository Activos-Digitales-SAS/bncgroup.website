import React from 'react';
import styles from './Vision.module.css';

const Vision = () => {
  return (
    <section id='nosotros' className={styles.vision}>
      <div className={styles.imageContainer}>
        <img src="/robotmision.webp" alt="Robot Vision" className={styles.visionImage} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.subheading}>Nosotros</h2>
        <h1 className={styles.heading}>Misión y Visión</h1>
        <p className={styles.description}>
          <strong>Misión:</strong> Ser el proveedor líder de soluciones tecnológicas innovadoras, ofreciendo servicios de AWS ElastiCache, BaaS, AI y ML, y SECaaS para optimizar y proteger las infraestructuras tecnológicas de nuestros clientes.
        </p>
        <p className={styles.description}>
          Nuestro objetivo es proporcionar soluciones personalizadas y eficientes que impulsen el crecimiento y la innovación de nuestros clientes. Nos comprometemos a mantener los más altos estándares de calidad y seguridad en todos nuestros servicios.
        </p>
        <p className={styles.description}>
          <strong>Visión:</strong> Transformar el futuro tecnológico de las empresas mediante la implementación de soluciones de vanguardia, garantizando seguridad, eficiencia y crecimiento sostenible en un mundo cada vez más digitalizado.
        </p>
        <p className={styles.description}>
          Aspiramos a ser reconocidos globalmente como un referente en la provisión de servicios tecnológicos, adaptándonos continuamente a las necesidades cambiantes del mercado y fomentando una cultura de mejora continua y responsabilidad social.
        </p>
        <a href="https://wa.link/irfqq9"><button className={styles.ctaButton}>Contáctenos</button></a> 
      </div>
    </section>
  );
};

export default Vision;
