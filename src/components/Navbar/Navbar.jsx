  import React, { useState } from 'react';
  import { HashLink as Link } from 'react-router-hash-link';
  import { FaBars, FaTimes } from 'react-icons/fa';
  import Swal from 'sweetalert2';
  import withReactContent from 'sweetalert2-react-content';
  import styles from './Navbar.module.css';

  const MySwal = withReactContent(Swal);

  const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);

    const toggleMobileMenu = () => {
      setIsMobile(!isMobile);
    };

    const showSAGRILAFT = () => {
      MySwal.fire({
        title: "<h2 style='text-align: center;'>Compromiso SAGRILAFT</h2>",
        html: `
          <div style="text-align: center;">
            <img src="/ley.png" alt="Ley" style="width: 25%; height: auto; margin-bottom: 20px;"/>
            <p style="text-align: justify;">En la Organización BNC GROUP, estamos comprometidos con la puesta en marcha de acciones que permitan tener operaciones comerciales de venta, compra, intermediación y/o custodia de Activos Virtuales, disminuyendo los riesgos frente al Lavado de Activos y/o Financiación del Terrorismo LA/FT.</p>
            <p style="text-align: justify;">Esta necesidad responde a que, en la actualidad, en nuestro país es necesario establecer algunos procedimientos, controles y reportes en las Personas naturales y/o Jurídicas que realicen actividades comerciales con Activos Virtuales (AV), para la prevención de actividades delictivas.</p>
            <p style="text-align: justify;">Ante la amenaza que sobre ellos alza la delincuencia internacional en cualquiera de sus expresiones: terrorismo, lavado de activos, corrupción administrativa, etc., que obliga a que cada vez más numerosos los entes obligados a adoptar medidas de prevención, detección y control del lavado de activos.</p>
            <p style="text-align: justify;">El uso de activos virtuales (AV) en la economía representa un desafío para la prevención y el combate al lavado de activos (LA) y el financiamiento del terrorismo (FT). Colombia no cuenta con una legislación que regule explícitamente los AV. Sin embargo, existen normas generales, como la Ley de Financiamiento (Ley 1943 de 2018), que otorgan beneficios fiscales a las empresas que participan en el desarrollo de valor agregado tecnológico.</p>
            <p style="text-align: justify;">Por su parte, la Unidad de Información y Análisis Financiero (UIAF) emitió la Resolución 314 de 2021, del 15 de diciembre de 2021. Con esta Resolución, la UIAF implementó la obligación de reporte a los proveedores de servicios de activos virtuales. La resolución 314 se aplica a las personas naturales o jurídicas que realicen por cuenta propia o por cuenta de otra persona natural o jurídica actividades u operaciones, cualquiera que sea su cuantía, relacionadas con:</p>
            <ul style="text-align: justify;">
              <li>Intercambio entre AV y monedas fiduciarias e intercambio de monedas fiduciarias a activos virtuales;</li>
              <li>Intercambio entre una o más formas de AV</li>
              <li>Transferencias de AV;</li>
              <li>Custodia o administración de AV o instrumentos que permitan el control de AV;</li>
              <li>Participación y provisión de servicios financieros relacionados con la oferta o venta de un AV; por parte de un emisor;</li>
              <li>En general, los servicios relacionados con AV.</li>
            </ul>
            <p style="text-align: justify;">De este modo, la Organización BNC GROUP, establecida como PROVEEDOR DE SERVICIOS DE ACTIVOS VIRTUALES – PSAV ante la Unidad de Información y Análisis Financiero – UIAF e integrante de un sector de economía transaccional formal de nivel nacional e internacional, cuya misión es la de adherirse al compromiso de Colombia con el GAFILAT - Grupo de Acción Financiera de Latinoamérica, para mitigar los riesgos de LA/FT que se presentan en virtud de las operaciones con AV y las actividades que realizamos los PSAV, destacando la importancia de contar con mecanismos de detección, seguimiento, monitoreo y control mediante la puesta en marcha de un SISTEMA DE AUTOCONTROL Y GESTIÓN DEL RIESGO INTEGRAL DE LAVADO DE ACTIVOS, FINANCIACIÓN DEL TERRORISMO Y FINANCIAMIENTO DE LA PROLIFERACIÓN DE ARMAS DE DESTRUCCIÓN MASIVA - SAGRILAFT LA/FT/FPADM.</p>
            <p style="text-align: justify;">Por lo anterior y con ocasión de su naturaleza (PSAV); la Organización BNC GROUP, aunque NO está obligada a la implementación de un SISTEMA DE AUTOCONTROL Y GESTIÓN DEL RIESGO INTEGRAL DE LAVADO DE ACTIVOS, FINANCIACIÓN DEL TERRORISMO Y FINANCIAMIENTO DE LA PROLIFERACIÓN DE ARMAS DE DESTRUCCIÓN MASIVA - SAGRILAFT LA/FT/FPADM, ha decidido de manera voluntaria implementar dicho sistema, que le permita dar cumplimiento a lo establecido en la Resolución 314 de 2021, del 15 de diciembre de 2021 emanada por la Unidad de Información y Análisis Financiero – UIAF y la Circular_100-000016_de_24_de_diciembre_de_2020 de la Superintendencia de Sociedades.</p>
            <p style="text-align: justify;">Es así, como la Organización BNC GROUP, mediante su MANUAL DEL SISTEMA DE AUTOCONTROL Y GESTIÓN DEL RIESGO INTEGRAL DE LAVADO DE ACTIVOS, FINANCIACIÓN DEL TERRORISMO Y FINANCIAMIENTO DE LA PROLIFERACIÓN DE ARMAS DE DESTRUCCIÓN MASIVA - SAGRILAFT LA/FT/FPADM, estableció medidas, procedimientos y protocolos de “PREVENCIÓN y CONTROL” encaminados a evitar que la Organización sea utilizada por sus grupos de interés para dar imagen de legalidad a dineros provenientes de actividades ilícitas o que dichos recursos financien actividades terroristas.</p>
          </div>
        `,
        confirmButtonText: "Cerrar",
        width: '80%',
        customClass: {
          popup: 'custom-swal-popup'
        }
      });
    };

    return (
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src="/logoBNC.png" alt="BNC Group" className={styles.logoImage} />
          <span className={styles.logoText}>BNC GROUP</span>
        </div>
        <ul className={isMobile ? `${styles.navLinks} ${styles.mobile}` : styles.navLinks}>
          <li>
            <Link smooth to="#inicio" className={styles.navLink}>
              Inicio
            </Link>
          </li>
          <li>
            <Link smooth to="#servicios" className={styles.navLink}>
              Servicios
            </Link>
          </li>
          <li>
            <Link smooth to="#nosotros" className={styles.navLink}>
              Nosotros
            </Link>
          </li>
          <li>
            <Link smooth to="#contacto" className={styles.navLink}>
              Contacto
            </Link>
          </li>
          <li>
            <button className={styles.button} onClick={showSAGRILAFT}>SAGRILAFT</button>
          </li>
        </ul>
        <div className={styles.mobileMenuIcon} onClick={toggleMobileMenu}>
          {isMobile ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    );
  };

  export default Navbar;
