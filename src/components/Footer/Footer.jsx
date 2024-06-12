import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import styles from './Footer.module.css';

const MySwal = withReactContent(Swal);

const Footer = () => {
  const showPrivacyPolicy = () => {
    MySwal.fire({
      title: 'Políticas de Privacidad',
      html: `
        <div style="text-align: justify;">
          <p>En BNC Group, valoramos su privacidad y nos comprometemos a proteger sus datos personales. Nuestra Política de Privacidad describe cómo recopilamos, utilizamos y compartimos su información.</p>
          <p>Recopilamos información personal que usted nos proporciona directamente, así como datos sobre cómo interactúa con nuestro sitio web. Utilizamos esta información para mejorar nuestros servicios y ofrecerle una experiencia personalizada.</p>
          <p>No compartimos su información personal con terceros, excepto cuando es necesario para proporcionarle nuestros servicios o cumplir con la ley.</p>
          <p>Para más detalles, por favor lea nuestra Política de Privacidad completa.</p>
        </div>
      `,
      confirmButtonText: 'Cerrar',
      icon: 'info',
      width: '80%',
      customClass: {
        popup: 'custom-swal-popup'
      }
    });
  };

  const showTermsConditions = () => {
    MySwal.fire({
      title: 'Términos y Condiciones',
      html: `
        <div style="text-align: justify;">
          <p>Bienvenido a BNC Group. Al utilizar nuestro sitio web, usted acepta cumplir con nuestros Términos y Condiciones. Estos términos establecen las reglas y regulaciones para el uso de nuestro sitio web.</p>
          <p>Usted es responsable de asegurarse de que la información que nos proporciona es precisa y completa. Nos reservamos el derecho de suspender o terminar su acceso al sitio si usted viola estos términos.</p>
          <p>Para más detalles, por favor lea nuestros Términos y Condiciones completos.</p>
        </div>
      `,
      confirmButtonText: 'Cerrar',
      icon: 'info',
      width: '80%',
      customClass: {
        popup: 'custom-swal-popup'
      }
    });
  };

  const showCookiePolicy = () => {
    MySwal.fire({
      title: 'Política de Cookies',
      html: `
        <div style="text-align: justify;">
          <p>En BNC Group, utilizamos cookies para mejorar su experiencia en nuestro sitio web. Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio.</p>
          <p>Utilizamos cookies para recordar sus preferencias, analizar el tráfico del sitio y ofrecer contenido personalizado. Usted puede configurar su navegador para rechazar las cookies, pero esto puede afectar su experiencia en nuestro sitio.</p>
          <p>Para más detalles, por favor lea nuestra Política de Cookies completa.</p>
        </div>
      `,
      confirmButtonText: 'Cerrar',
      icon: 'info',
      width: '80%',
      customClass: {
        popup: 'custom-swal-popup'
      }
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.policies}>
          <div className={styles.column}>
            <span onClick={showPrivacyPolicy}>Políticas de Privacidad</span>
          </div>
          <div className={styles.column}>
            <span onClick={showTermsConditions}>Términos y Condiciones</span>
          </div>
          <div className={styles.column}>
            <span onClick={showCookiePolicy}>Política de Cookies</span>
          </div>
          <div id='social' className={`${styles.column} ${styles.socialIconsMobile}`}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className={styles.icon} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className={styles.icon} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className={styles.icon} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className={styles.icon} />
            </a>
          </div>
        </div>
        <hr className={styles.separator} />
        <div className={styles.copyright}>
          <p>Copyright 2024. Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
