import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { ModalContext } from '../../utils/modalContext';

import './Portfolio.scss';

function PortfolioCard() {
  const { openModal } = useContext(ModalContext);
  const [images, setImages] = useState([]);

  const accessTokens = [
    process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN_UNTITLEDFVR,
    process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN_FARCHIVED,
    // Add more access tokens as needed
  ];

  const fetchImages = async () => {
    try {
      const allImages = [];
      for (const accessToken of accessTokens) {
        const response = await axios.get(`https://graph.instagram.com/me/media`, {
          params: {
            fields: 'id,caption,media_type,media_url,timestamp,children{media_type,media_url}',
            access_token: accessToken,
          },
        });

        const mediaData = response.data.data;

        for (const mediaItem of mediaData) {
          if (mediaItem.media_type === 'IMAGE') {
            allImages.push(mediaItem);
          } else if (mediaItem.media_type === 'CAROUSEL_ALBUM') {
            // Filter and add only the images from the carousel children
            const carouselImages = mediaItem.children.data.filter(
              (child) => child.media_type === 'IMAGE'
            );

            carouselImages.forEach((carouselImage) => {
              carouselImage.caption = mediaItem.caption; // Assign the carousel album caption
            });

            allImages.push(...carouselImages);
          }
        }
      }

      // Sort the images by date (timestamp)
      const sortedImages = allImages.sort(
        (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
      );

      console.log(sortedImages); // Inspect the sorted images
      return sortedImages;
    } catch (error) {
      alert('Error fetching data from Instagram:', error);
      return [];
    }
  };

  useEffect(() => {
    fetchImages().then(setImages);
  }, []);

  return (
    <div className="portfolio-container">
      <p>Pulled using Instagram API...</p>
      <div className="portfolio-grid">
        {images.map((image, index) => {
          return (
            <div
              key={image.id}
              className={`portfolio-item ${index % 3 === 0 ? 'left' : index % 3 === 2 ? 'right' : ''}`}
              onClick={() => {
                openModal(
                  <div className="portfolio-modal-content">
                    <img src={image.media_url} alt={image.caption} style={{ opacity: 1 }}
                    />
                    <p>{image.caption}</p>
                    {image.media_type === 'CAROUSEL_ALBUM' && (
                      <p>{image.children[0].caption}</p> // Display the carousel caption if available
                    )}
                  </div>
                );
              }}
            >
              <img
                src={image.media_url}
                alt={image.caption}
                style={{ maxWidth: '100%', maxHeight: '100%' }} // Set max-width and max-height to 100%
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PortfolioCard;
