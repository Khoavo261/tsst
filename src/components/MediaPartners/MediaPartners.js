import React from "react";
import styles from "./MediaPartners.module.css"; // Import CSS riêng

const MediaPartners = ({ partners }) => {
  return (
    <section className={styles.mediaSection}>
      <h2 className={styles.mediaTitle}>Deutsch.vn trên truyền thông</h2>
      <p className={styles.mediaSubtitle}>Hehe! Chưa có nhưng sẽ có sớm thôi.</p>

      {/* Danh sách đối tác truyền thông */}
      <div className={styles.partnersContainer}>
        {partners && partners.length > 0 ? (
          partners.map((partner, index) => (
            <a key={index} href={partner.link} target="_blank" rel="noopener noreferrer" className={styles.partnerCard}>
              <img src={partner.logo} alt={partner.name} className={styles.partnerLogo} />
            </a>
          ))
        ) : (
          <p className={styles.noPartners}>Chưa có dữ liệu đối tác truyền thông.</p>
        )}
      </div>

      {/* Form đăng ký email */}
      <div className={styles.subscribeContainer}>
        <input type="email" placeholder="Enter your email..." className={styles.emailInput} />
        <button className={styles.subscribeButton}>Sign up</button>
      </div>
    </section>
  );
};

export default MediaPartners;
