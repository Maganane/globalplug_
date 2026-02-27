'use client';

import React from 'react';
import styles from './ImigonoPattern.module.css';

interface ImigonoPatternProps {
  opacity?: number;
}

const ImigonoPattern: React.FC<ImigonoPatternProps> = ({ opacity = 0.15 }) => {
  return (
    <div className={styles.patternContainer}>
      {/* Use the tribal vector pattern image */}
      <div 
        className={styles.tribalPattern}
        style={{
          backgroundImage: 'url(/images/imigongo/tribal-pattern.jpg)',
        }}
      />
    </div>
  );
};

export default ImigonoPattern;
