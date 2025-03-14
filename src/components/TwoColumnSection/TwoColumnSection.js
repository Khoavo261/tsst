import React from 'react';
import styles from './TwoColumnSection.module.css';

const TwoColumnSection = ({ image, altText, heading, description }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Hình ảnh bên trái */}
        <div className={styles.imageWrapper}>
          <img src={image} alt={altText} className={styles.image} />
        </div>

        {/* Văn bản bên phải */}
        <div className={styles.text}>
          <h3 className={styles.heading}>{heading}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default TwoColumnSection;
