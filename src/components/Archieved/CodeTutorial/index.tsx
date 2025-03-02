// Hướng dẫn sử dụng: Copy các dòng code dưới đây vào trang muốn hiển thị component dù là page hay trang tài liệu
// import CodeTutorial from '@site/src/components/CodeTutorial'; 
{/* <CodeTutorial /> */}

import React, { useState } from 'react';
import styles from './index.module.css';
import { FiDownload, FiSettings, FiDatabase, FiDownloadCloud, FiSave } from 'react-icons/fi'; // Updated import for FiDownloadCloud

const sections = [
  {
    title: 'Cài đặt thư viện',
    description: 'Chạy câu lệnh dưới đây trong ứng dụng Terminal trên máy tính hoặc ô chứa code trong Google Colab/Jupyter Notebook',
    code: `pip install vnstock3`,
    icon: <FiDownload className={styles.MenuItemIcon} />, // Download icon for installing the library
  },
  {
    title: 'Nạp chương trình',
    description: 'Nạp thư viện Vnstock3 vào môi trường Python bạn sử dụng',
    code: `from vnstock3 import Vnstock`,
    icon: <FiSettings className={styles.MenuItemIcon} />, // Settings icon for loading the library
  },
  {
    title: 'Khai báo biến',
    description: 'Tạo một biến lưu trữ cài đặt chương trình đọc dữ liệu theo mã chứng khoán bạn phân tích và nguồn dữ liệu tương ứng',
    code: `stock = Vnstock().stock(symbol='ACB', source='VCI')`,
    icon: <FiDatabase className={styles.MenuItemIcon} />, // Database icon for variable declaration
  },
  {
    title: 'Đọc dữ liệu từ API',
    description: 'Đọc dữ liệu từ API theo khoảng thời gian và khung thời gian phân tích',
    code: `df = stock.quote.history(start='2024-01-01', end='2024-06-21', interval='1D')
df.head() # Hiển thị 5 dòng dữ liệu đầu tiên`,
    icon: <FiDownloadCloud className={styles.MenuItemIcon} />, // Cloud download icon for reading data from API
  },
  {
    title: 'Lưu trữ dữ liệu',
    description: 'Sử dụng các hàm Pandas như to_csv, to_excel, vv để lưu trữ dữ liệu theo định dạng tương ứng',
    code: `df.to_excel('gia_lich_su_ohlcv_ACB.xlsx', index=False)`,
    icon: <FiSave className={styles.MenuItemIcon} />, // Save icon for saving data
  },
];

const CodeTutorial: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(sections[0]);
  const [fade, setFade] = useState(false);

  const handleSectionClick = (section: any) => {
    setFade(true);
    setTimeout(() => {
      setCurrentSection(section);
      setFade(false); // Disable fade once the new section is set
    }, 300); // Animation delay for smooth transition
  };

  return (
    <div className={styles.Container}>
      <div className={styles.Menu}>
        {sections.map((section, index) => (
          <button
            key={index}
            onClick={() => handleSectionClick(section)}
            className={`${styles.MenuItem} ${
              currentSection.title === section.title ? styles.selected : ''
            }`}
          >
            {section.icon} {section.title}
          </button>
        ))}
      </div>
      <div className={`${styles.CodeContainer} ${fade ? styles.fadeOut : styles.fadeIn}`}>
        <p className={styles.Description}>{currentSection.description}</p>
        <pre className={`${styles.CodeBlock} language-python`}>
          <code>{currentSection.code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeTutorial;
