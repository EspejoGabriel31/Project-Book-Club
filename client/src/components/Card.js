import React from 'react';
import styles from './Find.css';

const Card = ({ image, book }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt='/' />
      <p>{book}</p>
    </div>
  );
};

export default Card;