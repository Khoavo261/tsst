import React from 'react';
import styles from './styles.module.css';

function BlogHeader() {
  return (
    <header className={styles.blogHeader}>
      <h1>
        Chào mừng bạn đến với <span className={styles.highlight}>Awesome Docusaurus Blog</span>
      </h1>
      <p>Khám phá các bài chia sẻ chất lượng về làm website cá nhân với Docusaurus!</p>
      {/* <button className={styles.ctaButton}>Đăng ký</button> */}
    </header>
  );
}

export default BlogHeader;
