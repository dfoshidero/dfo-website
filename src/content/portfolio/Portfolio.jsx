import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { ModalContext } from '../../utils/modalContext';

import './Portfolio.scss';

function PortfolioCard() {
  const { openModal } = useContext(ModalContext);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const response = await axios.get('https://z3mlw599i2.execute-api.eu-west-2.amazonaws.com/test/fetchInstagramData');
        const tokens = response.data.data;
        return [tokens.secret1, tokens.secret2];
      } catch (error) {
        setError(error); // Set the error state
        return [];
      }
    };

    const fetchImages = async (accessTokens) => {
      try {
        const allImages = [];
        for (const accessToken of accessTokens) {
          const response = await axios.get(`https://graph.instagram.com/me/media`, {
            params: {
              fields: 'id,caption,media_type,media_url,timestamp,children{media_type,media_url}',
              access_token: accessToken,
            },
          });

          // Rest of your code for fetching and processing images

          setIsLoading(false); // Set loading to false when data is fetched
        }
      } catch (error) {
        console.error('Error fetching data from Instagram:', error);
        setError(error); // Set the error state
        setIsLoading(false); // Set loading to false in case of an error
      }
    };

    fetchTokens().then((tokens) => {
      if (tokens.length > 0) {
        fetchImages(tokens).then(setImages);
      }
    });
  }, []);

  return (
    <div className="portfolio-container">
      {isLoading ? (
        <p>Awaiting Data from Instagram API...</p>
      ) : error ? (
        <p>Unable to pull images from Instagram. Please select the links above to view portfolio.</p>
      ) : (
        <div>
          <p>Pulled using Instagram API...</p>
          <div className="portfolio-grid">
            {/* Render images once data is available */}
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
                          <p>{image.children[0].caption}</p>
                        )}
                      </div>
                    );
                  }}
                >
                  <img
                    src={image.media_url}
                    alt={image.caption}
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default PortfolioCard;
