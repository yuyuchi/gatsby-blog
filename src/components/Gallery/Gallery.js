// @flow
import React from 'react';
// import type { Edges } from '../../types';
import styles from './Gallery.module.scss';

// type Props = {
//   edges: Edges
// };

const Gallery = ({ edges }: Props) => (
  <div className={styles['gallery__row']}>
    <div className={styles['gallery__column']}>
      <img className={styles['gallery__item']} src="https://res.cloudinary.com/dgmzobl6w/image/upload/v1591240478/botanical/%E8%BF%B7%E8%BF%AD%E9%A6%99_hycs9k.jpg" alt="railway" />
      <img className={styles['gallery__item']} src="https://res.cloudinary.com/dgmzobl6w/image/upload/v1591240477/botanical/%E8%B1%90%E9%A6%99%E8%8D%89%E8%8E%93_fjkctk.jpg" alt="railway" />
      <img className={styles['gallery__item']} src="https://res.cloudinary.com/dgmzobl6w/image/upload/v1591240476/botanical/%E7%B4%AB%E8%8A%B1%E8%B2%93%E9%AC%9A%E8%8D%89_itfwg5.jpg" alt="railway" />
    </div>
    <div className={styles['gallery__column']}>
      <img className={styles['gallery__item']} src="https://res.cloudinary.com/dgmzobl6w/image/upload/v1591240475/botanical/%E5%B1%B1%E8%8C%82%E5%A0%85_rzxzal.jpg" alt="railway" />
      <img className={styles['gallery__item']} src="https://res.cloudinary.com/dgmzobl6w/image/upload/v1591240475/botanical/%E8%89%BE%E8%8D%89_yhuwrg.jpg" alt="railway" />
    </div>
  </div>
);

export default Gallery;