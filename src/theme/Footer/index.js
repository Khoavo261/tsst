import React from "react";
import OriginalFooter from "@theme-original/Footer";
import FooterContact from "@site/src/components/FooterContact/FooterContact";
import { faFacebookF, faLinkedinIn, faYoutube, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faEnvelope, faPhone, faBookmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css";

export default function Footer(props) {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerContent}>
        {/* Logo and Bio Section */}
        <div className={styles.footerColumn}>
          <FooterContact
            logoSrc="https://learn-anything.vn/img/logo-learn-anything-new-rec_trans.png"
            bio="Learn Anything. Be Anything. No Limits."
            socialLinks={[
              { href: "https://facebook.com", icon: faFacebookF },
              { href: "https://youtube.com", icon: faYoutube },
              { href: "https://substack.com", icon: faBookmark },
              { href: "https://linkedin.com", icon: faLinkedinIn },
              { href: "https://github.com", icon: faGithub },
            ]}
            contactInfo={[
              { icon: faMapMarkerAlt, text: "" },
              { icon: faEnvelope, text: "info@example.com", href: "mailto:info@example.com" },
              { icon: faPhone, text: "", href: "tel:+15555555555" },
            ]}
          />
        </div>

        {/* Footer Navigation Links Section */}
        <div className={styles.footerNavigation}>
          <OriginalFooter {...props} />
        </div>
      </div>

      {/* Copyright Section */}
      <div className={styles.copyright}>
        <p>Copyright © {new Date().getFullYear()} Learn Anything. Built with Docusaurus.</p>
      </div>
    </footer>
  );
}
