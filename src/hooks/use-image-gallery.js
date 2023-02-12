// @flow strict
import { useStaticQuery, graphql } from 'gatsby';

const useImageGallery = () => {
  const { allCloudinaryMedia } = useStaticQuery(
    graphql`
      query CloudinaryImage {
        allCloudinaryMedia (
          filter: {public_id: {glob: "gatsby-blog/botanical/*"}}){
          edges {
            node {
              secure_url
              context {
                custom {
                  alt
                }
              }
            }
          }
        }
      }`
  );
  console.log('allCloudinaryMedia.edges', allCloudinaryMedia);
  return allCloudinaryMedia.edges;
};

export default useImageGallery;
