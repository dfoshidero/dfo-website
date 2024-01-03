import React, { useEffect, useRef, useState } from 'react';
import './Card.scss';

function Card({ title, extra, children, onClick, className, style, scroll }) {
  const contentRef = useRef(null);
  const maxSpeed = 1; // Maximum speed limit
  const [isHovering, setIsHovering] = useState(false);

  const isScrollingDown = useRef(true);

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
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

        if (contentRef.current) {
          contentRef.current.style.transition = 'scroll-behavior 0.001s'; // Add smooth transition
          contentRef.current.scrollTop = newScrollTop;
          handleScroll(); // Update mask image during auto-scroll

          // Reset transition after a delay to allow for smooth scrolling effect
          setTimeout(() => {
            if (contentRef.current) {
              contentRef.current.style.transition = 'none';
            }
          }, 500);
        }
      }
    };

    const contentElement = contentRef.current;

    if (contentElement) {
      contentElement.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check

      if (scroll && window.innerWidth > 768 && !isHovering) {
        const framesPerSecond = 60; // You can adjust this value as needed
        const interval = 2800 / framesPerSecond;
        const autoScrollInterval = setInterval(handleAutoScroll, interval);

        return () => {
          clearInterval(autoScrollInterval);
          contentElement.removeEventListener('scroll', handleScroll);
        };
      }
    }

    return () => {
      if (contentElement) {
        contentElement.removeEventListener('scroll', handleScroll);
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
