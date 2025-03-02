import React, { useState } from "react";
import styles from "./TabbedDropdown.module.css";

const TabbedDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={styles.navItem}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className={styles.navLink}>SDKs</div>
      {isOpen && (
        <div className={styles.dropdownMenu}>
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>
              <span className={styles.icon}>💻</span> Web
            </h4>
            <ul>
              <li>Guides and API Reference</li>
              <li>Developer Tools</li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>
              <span className={styles.icon}>📱</span> Mobile
            </h4>
            <ul>
              <li>Android SDK</li>
              <li>iOS SDK</li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>
              <span className={styles.icon}>🛠️</span> Core SDK
            </h4>
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>Livestreaming APIs</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default TabbedDropdown;
