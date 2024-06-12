import React, { useState, useEffect } from 'react';
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
    description: 'Nuestros servicios de BaaS garantizan la seguridad y disponibilidad de sus datos, como la de sus clientes.',
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
  const [slidePercentage, setSlidePercentage] = useState(100);

  useEffect(() => {
    const updateSlidePercentage = () => {
      setSlidePercentage(window.innerWidth > 768 ? 33.33 : 100);
    };

    window.addEventListener('resize', updateSlidePercentage);
    updateSlidePercentage();

    return () => window.removeEventListener('resize', updateSlidePercentage);
  }, []);

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    window.open('https://wa.link/irfqq9', '_blank');
  };

  return (
    <section className={styles.carouselContainer}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Descubre Nuestras Soluciones</h2>

        <a href="https://wa.link/irfqq9" className={styles.ctaButton} onClick={handleWhatsAppClick}>
          Comprar por WhatsApp
        </a>
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
        centerSlidePercentage={slidePercentage}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          const indicatorStyle = isSelected ? { opacity: 1 } : { opacity: 0.7 };
          return (
            <li
              style={indicatorStyle}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`${label} ${index + 1}`}
              aria-selected={isSelected}
            />
          );
        }}
      >
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <img src={service.image} alt={service.title} className={styles.image} />
            <div className={styles.content}>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default ServiceCarousel;
