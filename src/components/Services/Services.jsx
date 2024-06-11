import React from 'react';
import { FaAws, FaDatabase, FaBrain, FaShieldAlt } from 'react-icons/fa';
import styles from './Services.module.css';

const services = [
  {
    title: 'AWS ElastiCache',
    description: 'Ofrecemos servicios avanzados de AWS ElastiCache para optimizar el rendimiento de sus aplicaciones.',
    icon: <FaAws size={50} color="#ff9900" />
  },
  {
    title: 'BaaS',
    description: 'Nuestros servicios de BaaS (Backup as a Service) garantizan la seguridad y disponibilidad de sus datos.',
    icon: <FaDatabase size={50} color="#00bfff" />
  },
  {
    title: 'AI y ML',
    description: 'Implementamos soluciones de AI y ML para ayudar a su empresa a aprovechar el poder de la inteligencia artificial.',
    icon: <FaBrain size={50} color="#800080" />
  },
  {
    title: 'SECaaS',
    description: 'Nuestros servicios de Seguridad como Servicio (SECaaS) protegen su infraestructura contra amenazas avanzadas.',
    icon: <FaShieldAlt size={50} color="#32cd32" />
  },
];

const Services = () => {
  return (
    <section className={styles.services}>
      <h2 className={styles.heading}>Servicios</h2>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.iconContainer}>
              {service.icon}
            </div>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
