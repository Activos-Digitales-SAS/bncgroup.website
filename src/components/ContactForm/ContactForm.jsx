import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaGlobe, FaCity, FaEnvelope, FaPhoneAlt, FaQuestionCircle } from 'react-icons/fa';
import styles from './ContactForm.module.css';

const services = [
  'AWS ElastiCache',
  'BaaS',
  'AI y ML',
  'SECaaS',
  'RPA',
  'IoT'
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    whatsapp: '',
    option: '',
    message: '',
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log(formData);
  };

  return (
    <section id='contacto' className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h2 className={styles.heading}>Contáctanos</h2>
          <div className={styles.subheadingContainer}>
            <p className={styles.subheading}>
              ¿Tienes Preguntas? Escríbelas a continuación y te contactaremos
            </p>
          </div>
          <div className={styles.contactDetails}>
            <div className={styles.contactItem}>
              <span className={styles.roundIcon}><FaMapMarkerAlt /></span>
              <p><strong>Dirección:</strong> CL 5 Nro. 13 - 19 - Colsag</p>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.roundIcon}><FaGlobe /></span>
              <p><strong>País:</strong> Colombia</p>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.roundIcon}><FaCity /></span>
              <p><strong>Municipio:</strong> Cúcuta</p>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.roundIcon}><FaEnvelope /></span>
              <p><strong>Correo:</strong> bncgroupsas@gmail.com</p>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.roundIcon}><FaPhoneAlt /></span>
              <p><strong>Teléfono:</strong> 3011376175</p>
            </div>
          </div>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={styles.input}
              placeholder="Nombre"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={styles.input}
              placeholder="Apellido"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              placeholder="Correo"
              required
            />
            <input
              type="text"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              className={styles.input}
              placeholder="WhatsApp"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <select
              name="option"
              value={formData.option}
              onChange={handleChange}
              className={styles.select}
              required
            >
              <option value="">Selecciona una opción</option>
              {services.map((service, index) => (
                <option key={index} value={service}>{service}</option>
              ))}
            </select>
          </div>
          <div className={styles.formGroup}>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={styles.textarea}
              placeholder="Escribe tu mensaje..."
              required
            ></textarea>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                className={styles.checkbox}
                required
              />
              Aceptar términos y condiciones
            </label>
          </div>
          <button type="submit" className={styles.submitButton}>Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
