import React, { useEffect, useRef, useState } from 'react';
import './Card.scss';

function Card({ title, extra, children, onClick, className, style, scroll }) {
  const contentRef = useRef(null);
  const scrollDirection = useRef(1); // 1 for down, -1 for up
  const maxSpeed = 1; // Maximum speed limit
  const [isHovering, setIsHovering] = useState(false);
  const intervalId = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) {
        return;
      }
      
      const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
      let maskImage;

      if (scrollHeight > clientHeight) {
        // Calculate the opacity based on scroll position
        const topOpacity = Math.min((scrollHeight - scrollTop - clientHeight) / 20, 1);
        const bottomOpacity = Math.min(scrollTop / 20, 1);

        // Adjust the mask images with the calculated opacity
        maskImage = `linear-gradient(to bottom, rgba(0, 0, 0, ${topOpacity}) 0%, black 20%, black 80%, rgba(0, 0, 0, ${bottomOpacity}) 100%)`;

        contentRef.current.style.maskImage = maskImage;
      } else {
        contentRef.current.style.maskImage = 'none';
      }
    };

    const autoScroll = () => {
      if (contentRef.current && scroll && !isHovering) {
        let newScrollTop = contentRef.current.scrollTop + scrollDirection.current * maxSpeed;

        if (newScrollTop <= 0 || newScrollTop >= contentRef.current.scrollHeight - contentRef.current.clientHeight) {
          scrollDirection.current *= -1;
        }

        contentRef.current.scrollTop = newScrollTop;
        handleScroll(); // Update mask image during auto scroll
      }
    };

    const contentElement = contentRef.current;
    contentElement.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    if (scroll && window.innerWidth > 768) { // Check both scroll prop and viewport width
      intervalId.current = setInterval(autoScroll, 50); // Adjust interval as needed
    }

    return () => {
      contentElement.removeEventListener('scroll', handleScroll);
      clearInterval(intervalId.current);
    };
  }, [isHovering, scroll]);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  const cardClasses = `card ${className || ''}`;

  return (
    <div 
      className={cardClasses} 
      onClick={onClick} 
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
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
