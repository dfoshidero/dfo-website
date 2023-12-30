import React, { useEffect, useRef } from 'react';
import './Card.scss';

function Card({ title, extra, children, onClick, className, style }) {
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) {
        return; // Exit the function if contentRef.current is null
      }
      
      const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
      let maskImage;

      if (scrollHeight > clientHeight) { // Check if scroll bar is present
        if (scrollTop <= 20) {
          maskImage = 'linear-gradient(to bottom, black calc(100% - 20%), transparent 100%)';
        } else if (scrollTop >= scrollHeight - clientHeight - 20) {
          maskImage = 'linear-gradient(to bottom, transparent 0, black 20%)';
        } else {
          maskImage = 'linear-gradient(to bottom, transparent 0, black 20%, black calc(100% - 20%), transparent 100%)';
        }

        contentRef.current.style.maskImage = maskImage;
      } else {
        // No scroll bar, remove mask image
        contentRef.current.style.maskImage = 'none';
      }
    };

    const contentElement = contentRef.current;
    contentElement.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      contentElement.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const cardClasses = `card ${className || ''}`;

  return (
    <div className={cardClasses} onClick={onClick} style={style}>
      <div className="card-header">
        <h2 className="title">{title}</h2>
        <div className="extra">
          {typeof extra === 'string' ? (
            <span>{extra}</span>
          ) : (
            <div>{extra}</div>
          )}
        </div>
      </div>
      <div className='content' ref={contentRef}>
        {children}
      </div>
    </div>
  );
}

export default Card;
