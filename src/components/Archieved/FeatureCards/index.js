// Cách sử dụng component: Copy 2 dòng code dứoi đây vào trang muốn sử dụng
// import FeatureCards from '../components/FeatureCards';
// <FeatureCards />

import React, { useState } from 'react';
import styles from './index.module.css';

const cards = [
  {
    title: 'Centralize',
    description: 'Easily manage all of your application logic and states in a central place.',
    to: '/docs/introduction#centralize',
    imagePath: '/img/open-source.png',
  },
  {
    title: 'Flexible',
    description: 'Works with nearly any UI-Layer and isn’t bound to any specific workflow.',
    to: '/docs/introduction#flexible',
    imagePath: '/img/resizing.png',
  },
  {
    title: 'Easy to Use',
    description: 'Learn the tools of AgileTs in a short amount of time.',
    to: '/docs/introduction#easy-to-use',
    imagePath: '/img/easy.png',
  },
  {
    title: 'Well Tested',
    description: 'Over 600 jest tests to ensure everything works as expected.',
    to: 'https://coveralls.io/github/agile-ts/agile?branch=master',
    imagePath: '/img/data_access.png',
  },
  {
    title: 'Typescript',
    description: 'AgileTs is almost 100% typesafe and provides type inference.',
    to: '/docs/introduction#typescript',
    imagePath: '/img/automation.png',
  },
];

const FeatureCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <div className={styles.Container}>
      <div className={styles.CardsWrapper}>
        {cards.map((card, index) => {
          const positionIndex = (index - currentIndex + cards.length) % cards.length;

          let zIndex = 0; // Initialize zIndex
          let translateX = 0;
          let scale = 1;
          let opacity = 1;

          if (positionIndex === 0) {
            // Focused card in the center
            translateX = '0%';
            scale = 1;
            zIndex = 3; // Highest zIndex for the center card
            opacity = 1;
          } else if (positionIndex === 1 || positionIndex === cards.length - 1) {
            // First layer (left and right of the focused card)
            translateX = positionIndex === 1 ? '-30%' : '30%';
            scale = 0.9; // 90% width
            zIndex = 2; // Middle zIndex for first layer
            opacity = 1;
          } else if (positionIndex === 2 || positionIndex === cards.length - 2) {
            // Second layer (outermost cards)
            translateX = positionIndex === 2 ? '-60%' : '60%';
            scale = 0.8; // 80% width
            zIndex = 1; // Lowest zIndex for second layer
            opacity = 1;
          }

          return (
            <div
              key={index}
              className={`${styles.Card} ${positionIndex === 0 ? styles.center : ''}`}
              style={{
                zIndex,
                transform: `translateX(${translateX}) scale(${scale})`,
                opacity: opacity,
              }}
              onClick={() => setCurrentIndex(index)} // Clicking a card brings it into focus
            >
              <img src={card.imagePath} alt={card.title} className={styles.CardImage} />
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <a href={card.to} className={styles.CardLink}>
                Learn more
              </a>
            </div>
          );
        })}
      </div>

      <div className={styles.NavigationDots}>
        {cards.map((_, index) => (
          <span
            key={index}
            className={`${styles.Dot} ${index === currentIndex ? styles.activeDot : ''}`}
            onClick={() => setCurrentIndex(index)} // Clicking a dot selects the corresponding card
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
