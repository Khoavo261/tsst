import React from 'react';
import styles from './FounderProfile.module.css';

const FounderProfile = ({ image, name, role, bio }) => (
  <section className={styles.profileSection}>
    <div className={styles.profileContainer}>
      <div className={styles.profileImageWrapper}>
        <img src={image} alt={name} className={styles.profileImage} />
      </div>

      <div className={styles.profileInfo}>
        <h1 className={styles.profileName}>{name}</h1>
        <p className={styles.profileRole}>{role}</p>
        <p className={styles.profileBio}>{bio}</p>
      </div>
    </div>

    {/* 3 Ô ghi chú viết thủ công */}
    <div className={styles.profileHighlights}>
      <div className={styles.highlightCard}>
        <h3 className={styles.highlightTitle}>5 Năm Khởi Nghiệp</h3>
        <p className={styles.highlightDescription}>
          Kinh nghiệm phát triển dự án và xây dựng kế hoạch.
        </p>
      </div>

      <div className={styles.highlightCard}>
        <h3 className={styles.highlightTitle}>Xây Dựng Cộng Đồng</h3>
        <p className={styles.highlightDescription}>
          Sáng lập cộng đồng tiếng Đức và nhiều dự án giáo dục.
        </p>
      </div>

      <div className={styles.highlightCard}>
        <h3 className={styles.highlightTitle}>Du Học Sinh</h3>
        <p className={styles.highlightDescription}>
          Hiện đang là du học sinh tại Wien (Áo).
        </p>
      </div>
    </div>
  </section>
);

export default FounderProfile;
