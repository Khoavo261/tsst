import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import SubscribeFooter from "../FooterSubscribe/FooterSubscribe";
import styles from "./FooterContact.module.css";

const FooterContact = ({
  logoSrc = "https://learn-anything.vn/img/logo-learn-anything-new-rec_trans.png",
  bio = "Learn Anything. Be Anything. No Limits.",
  socialLinks = [
    { href: "https://facebook.com", icon: faFacebookF },
    { href: "https://twitter.com", icon: faTwitter },
    { href: "https://linkedin.com", icon: faLinkedinIn },
    { href: "https://instagram.com", icon: faInstagram },
  ],
  contactInfo = [
    { icon: faMapMarkerAlt, text: "123 Main St, Hometown, USA" },
    { icon: faEnvelope, text: "contact@example.com", href: "mailto:contact@example.com" },
    { icon: faPhone, text: "+1 555 555 5555", href: "tel:+15555555555" },
  ],
}) => {
  // Filter out empty or invalid contact info entries
  const validContactInfo = contactInfo.filter(({ text }) => text.trim() !== "");

  return (
    <div className={styles.footerContainer}>
      {/* Logo and Bio Section */}
      <div className={styles.section}>
        <div className={styles.logoContainer}>
          <img src={logoSrc} alt="Company Logo" className={styles.logo} />
        </div>
        <p className={styles.bio}>{bio}</p>
        <div className={styles.socialLinks}>
          {socialLinks.map(({ href, icon }, index) => (
            <a key={index} href={href} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={icon} className={styles.icon} />
            </a>
          ))}
        </div>
      </div>

      {/* Conditional Rendering: Contact Info Section */}
      {validContactInfo.length > 0 && (
        <div className={styles.section}>
          <h3 className={styles.contactTitle}>Contact Us</h3>
          <ul className={styles.contactInfo}>
            {validContactInfo.map(({ icon, text, href }, index) => (
              <li key={index}>
                <FontAwesomeIcon icon={icon} className={styles.icon} />
                {href ? (
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {text}
                  </a>
                ) : (
                  <span>{text}</span>
                )}
              </li>
            ))}
          </ul>
          {/* Include SubscribeFooter */}
          <SubscribeFooter title="Đăng ký bản tin của chúng tôi!" />
        </div>
      )}

      {/* If no contact info, still show SubscribeFooter */}
      {validContactInfo.length === 0 && (
        <div className={styles.section}>
          <SubscribeFooter title="Đăng ký bản tin của chúng tôi!" />
        </div>
      )}
    </div>
  );
};

export default FooterContact;
