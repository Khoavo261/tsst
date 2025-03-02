import React from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faCreditCard, faCashRegister } from '@fortawesome/free-solid-svg-icons';
import styles from './CardGrids.module.css';

const CardComponent = ({ title, subtitle, description, icon }) => {
  return (
    <div className={clsx('col col--4', styles.card)}>
      <div className={clsx(styles.cardContent)}>
        <div className="text--center">
          <FontAwesomeIcon icon={icon} className={styles.cardIcon} />
        </div>
        <div className={clsx(styles.cardTitle, 'text--center')}>
          <h3>{title}</h3>
          <span className={styles.tag}>{subtitle}</span>
        </div>
        <div className={clsx(styles.cardDescription, 'text--center')}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

const FeatureList = [
  {
    title: 'Automated Payments',
    subtitle: 'ALL-IN-ONE',
    description: 'Secure One-Click Payments with one-time authentication.',
    icon: faDollarSign,
  },
  {
    title: 'Payment Gateway',
    subtitle: 'ALL-IN-ONE',
    description: 'Multiple payment channels in a single integration.',
    icon: faCreditCard,
  },
  {
    title: 'Quick Pay Using Scanners',
    subtitle: 'IoT & AIoT',
    description: 'The quickest QR Code scanning UX for in-store payments.',
    icon: faCashRegister,
  },
];

export default function CardGrids() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <CardComponent key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}


// import React, { useEffect, useRef } from 'react';
// import PropTypes from 'prop-types';

// const CardGrid = ({ cards }) => {
//     return (
//         <div className="card-grid">
//             {cards.map((card, index) => (
//                 <Card key={index} card={card} />
//             ))}
//         </div>
//     );
// };

// const Card = ({ card }) => {
//     const { title, description, icon, number, isAnimatedNumber } = card;
//     const numberRef = useRef();

//     useEffect(() => {
//         if (isAnimatedNumber && numberRef.current) {
//             let start = 0;
//             const end = number;
//             const duration = 2000;
//             const step = () => {
//                 const progress = Math.min(start / duration, 1);
//                 const value = Math.floor(progress * end);
//                 numberRef.current.textContent = value;
//                 if (progress < 1) {
//                     start += 10;
//                     requestAnimationFrame(step);
//                 }
//             };
//             requestAnimationFrame(step);
//         }
//     }, [isAnimatedNumber, number]);

//     return (
//         <div className={`card ${isAnimatedNumber ? 'animated-number' : ''}`}>
//             <div className="icon">{icon}</div>
//             <div className="title">{title}</div>
//             {isAnimatedNumber ? (
//                 <div className="number" ref={numberRef}>
//                     0
//                 </div>
//             ) : (
//                 <div className="description">{description}</div>
//             )}
//         </div>
//     );
// };

// CardGrid.propTypes = {
//     cards: PropTypes.arrayOf(
//         PropTypes.shape({
//             title: PropTypes.string.isRequired,
//             description: PropTypes.string,
//             icon: PropTypes.node.isRequired,
//             number: PropTypes.number,
//             isAnimatedNumber: PropTypes.bool,
//         })
//     ).isRequired,
// };

// Card.propTypes = {
//     card: PropTypes.shape({
//         title: PropTypes.string.isRequired,
//         description: PropTypes.string,
//         icon: PropTypes.node.isRequired,
//         number: PropTypes.number,
//         isAnimatedNumber: PropTypes.bool,
//     }).isRequired,
// };

// export default CardGrid;
