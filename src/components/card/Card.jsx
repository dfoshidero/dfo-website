import React, { useEffect, useRef } from 'react';
import './Card.scss';

function Card({ title, extra, children, onClick, className, style }) {
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
      let maskImage;

      if (scrollTop <= 20) {
        maskImage = 'linear-gradient(to bottom, black calc(100% - 30%), transparent 100%)';
      } else if (scrollTop >= scrollHeight - clientHeight - 20) {
        maskImage = 'linear-gradient(to bottom, transparent 0, black 30%)';
      } else {
        maskImage = 'linear-gradient(to bottom, transparent 0, black 30%, black calc(100% - 30%), transparent 100%)';
      }

      contentRef.current.style.maskImage = maskImage;
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
        <h2 className="extra">{extra}</h2>
      </div>
      <div className='content' ref={contentRef}>
        {children}
      </div>
    </div>
  );
}

export default Card;
