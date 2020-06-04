import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styles from './ImageGallery.module.scss';

const ImageGallery = () => {
  const data = useStaticQuery(graphql`query CloudinaryImage {
            allCloudinaryMedia {
              edges {
                node {
                  secure_url
                }
              }
            }
          }`);
  const clImages = data.allCloudinaryMedia.edges;
  return (
        <div>
          <div className={styles['image-grid']}>
            {clImages.map((image, index) => (
                  <div className={styles['image-item']} key={`${index}-cl`}>
                    <img src={image.node.secure_url} alt={'no alt :('} />
                  </div>
            ))
            }
          </div>
        </div>
  );
};
export default ImageGallery;
