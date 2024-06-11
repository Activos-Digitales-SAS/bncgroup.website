import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './ServiceCarousel.module.css';

const services = [
  {
    title: 'AWS ElastiCache',
    description: 'Ofrecemos servicios avanzados de AWS ElastiCache para optimizar el rendimiento de sus aplicaciones.',
    image: '/servicio1.jpeg',
  },
  {
    title: 'BaaS',
    description: 'Nuestros servicios de BaaS garantizan la seguridad y disponibilidad de sus datos.',
    image: '/servicio2.jpeg',
  },
  {
    title: 'AI y ML',
    description: 'Implementamos soluciones de AI y ML para ayudar a su empresa a aprovechar el poder de la inteligencia artificial.',
    image: '/servicio3.jpeg',
  },
  {
    title: 'SECaaS',
    description: 'Nuestros servicios de Seguridad como Servicio (SECaaS) protegen su infraestructura contra amenazas avanzadas.',
    image: '/servicio4.jpeg',
  },
  {
    title: 'RPA',
    description: 'Automatizamos procesos empresariales utilizando tecnologías avanzadas de RPA.',
    image: '/servicio5.jpeg',
  },
  {
    title: 'IoT',
    description: 'Conectamos y controlamos dispositivos inteligentes para mejorar la eficiencia y la innovación.',
    image: '/servicio6.jpeg',
  },
];

const ServiceCarousel = () => {
  return (
    <section className={styles.carouselContainer}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Descubre Nuestras Soluciones</h2>
       
      </div>
      <Carousel
        showThumbs={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay
        interval={3000}
        showStatus={false}
        showIndicators={true}
        centerMode={true}
        centerSlidePercentage={33.33}
      >
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <img src={service.image} alt={service.title} className={styles.image} />
            <div className={styles.content}>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
              <a href="https://wa.me/YOUR_WHATSAPP_NUMBER" className={styles.ctaButton}>
                Comprar por WhatsApp
              </a>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default ServiceCarousel;
