import React, { useEffect, useRef, useState } from 'react';
import './Card.scss';

function Card({ title, extra, children, onClick, className, style, scroll }) {
  const contentRef = useRef(null);
  const maxSpeed = 1; // Maximum speed limit
  const [isHovering, setIsHovering] = useState(false);

  const autoScroll = useRef(null);
  const isScrollingDown = useRef(true);

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

    const handleAutoScroll = () => {
      if (contentRef.current && scroll && !isHovering) {
        let newScrollTop;

        if (isScrollingDown.current) {
          newScrollTop = contentRef.current.scrollTop + maxSpeed;

          if (newScrollTop >= contentRef.current.scrollHeight - contentRef.current.clientHeight) {
            isScrollingDown.current = false;
          }
        } else {
          newScrollTop = contentRef.current.scrollTop - maxSpeed;

          if (newScrollTop <= 0) {
            isScrollingDown.current = true;
          }
        }

        contentRef.current.scrollTop = newScrollTop;
        handleScroll(); // Update mask image during auto scroll

        autoScroll.current = requestAnimationFrame(handleAutoScroll);
      }
    };

    const contentElement = contentRef.current;
    contentElement.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    if (scroll && window.innerWidth > 768) {
      autoScroll.current = requestAnimationFrame(handleAutoScroll);
    }

    return () => {
      contentElement.removeEventListener('scroll', handleScroll);
      if (autoScroll.current) {
        cancelAnimationFrame(autoScroll.current);
      }
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
