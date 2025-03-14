import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
// Xoá dòng import FaGlobe, vì không còn dùng react-icons
// import { FaGlobe } from 'react-icons/fa';

export default function Home() {
  return (
    <Layout
      title="Khoa Vo"
      description="Personal page of Khoa Vo"
    >
      {/* Hero Section */}
      <header className={styles.hero}>
        <h1>Hi, I'm Khoa Vo.</h1>
        <p className={styles.intro}>
          Bringing Vietnam to the world.
        </p>
        <div className={styles.social}>
          <a
            href="https://www.instagram.com/khoa.notes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @khoa.notes
          </a>
        </div>
      </header>

      {/* Main content: 1 card (Deutsch.vn) */}
      <main className={styles.main}>
        <div className={styles.card}>
          {/* Thay FaGlobe bằng ảnh */}
          <img
            src="/img/avt.png"  // Đường dẫn đến ảnh trong thư mục static/img
            alt="Deutsch Icon"
            className={styles.iconImg}
          />
          <div className={styles.cardContent}>
            <h3>Deutsch.vn</h3>
            <p>My project to help you learn German effectively.</p>
          </div>
          <a
            className={styles.button}
            href="https://deutsch.vn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit
          </a>
        </div>
      </main>

      {/* Footer tuỳ chỉnh */}
      <footer className={styles.footer}>
        © 2025 Khoa Vo
      </footer>
    </Layout>
  );
}
