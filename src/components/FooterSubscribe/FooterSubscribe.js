import React, { useEffect } from 'react';
import styles from './FooterSubscribe.module.css';

const FooterSubscribe = ({
  title = "Đăng ký bản tin Substack của chúng tôi!",
  placeholder = "Nhập email của bạn",
  buttonText = "Đăng ký",
}) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://substackapi.com/widget.js';
    script.async = true;
    document.body.appendChild(script);

    window.CustomSubstackWidget = {
      substackUrl: "learnanything.substack.com",
      placeholder: placeholder,
      buttonText: buttonText,
      theme: "custom",
      colors: {
        primary: "var(--ifm-color-primary)", // Matches theme primary color
        input: "#ffffff", // Input field background color
        email: "#808080", // Placeholder text color
        text: "#ffffff", // CTA text color
        buttonText: "#ffffff", // Button text color
      },
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [placeholder, buttonText]);

  return (
    <div className={styles.FooterSubscribe}>
      <span className={styles.subscribeTitle}>{title}</span>
      <div id="custom-substack-embed" className={styles.subscribeInputContainer}></div>
    </div>
  );
};

export default FooterSubscribe;
