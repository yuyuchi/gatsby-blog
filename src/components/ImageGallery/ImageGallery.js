// @flow strict
import React from 'react';
import { useImageGallery } from '../../hooks';
import styles from './ImageGallery.module.scss';

const _ = require('lodash');

const ImageGallery = () => {
  const clImages = useImageGallery();

  return (
        <div>
          <div className={styles['image-grid']}>
            {clImages.map((image, index) => (
                  <div className={styles['image-item']} key={`${index}-cl`}>
                    <img src={image.node.secure_url} alt={_.get(image, 'node.context.custom.alt', 'no alt :(')} />
                  </div>
            ))
            }
          </div>
        </div>
  );
};
export default ImageGallery;
