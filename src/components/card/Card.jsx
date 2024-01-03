import React, { useEffect, useRef, useState } from 'react';
import './Card.scss';

function Card({ title, extra, children, onClick, className, style, scroll }) {
  const contentRef = useRef(null);
  const scrollDirection = useRef(1); // 1 for down, -1 for up
  const scrollSpeed = 0.05; // Speed of scroll in pixels per millisecond
  const [isHovering, setIsHovering] = useState(false);
  const animationFrameId = useRef(null);
  const lastFrameTime = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) {
        return;
      }

      const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
      let maskImage;

      if (scrollHeight > clientHeight) {
        const topOpacity = Math.min((scrollHeight - scrollTop - clientHeight) / 20, 1);
        const bottomOpacity = Math.min(scrollTop / 20, 1);
        maskImage = `linear-gradient(to bottom, rgba(0, 0, 0, ${topOpacity}) 0%, black 20%, black 80%, rgba(0, 0, 0, ${bottomOpacity}) 100%)`;
        contentRef.current.style.maskImage = maskImage;
      } else {
        contentRef.current.style.maskImage = 'none';
      }
    };

    const autoScroll = (time) => {
      if (lastFrameTime.current !== null && contentRef.current && scroll && !isHovering) {
        const deltaTime = time - lastFrameTime.current;
        const scrollTop = contentRef.current.scrollTop;
        const clientHeight = contentRef.current.clientHeight;
        const scrollHeight = contentRef.current.scrollHeight;
        const scrollCenter = scrollTop + clientHeight / 2; // Calculate scroll center

        let newScrollCenter = scrollCenter + scrollDirection.current * scrollSpeed * deltaTime;
        let newScrollTop = newScrollCenter - clientHeight / 2;

        // Adjust boundary check for scroll center
        if (newScrollTop <= 0) {
          newScrollTop = 0;
          scrollDirection.current = 1;
        } else if (newScrollTop >= scrollHeight - clientHeight) {
          newScrollTop = scrollHeight - clientHeight;
          scrollDirection.current = -1;
        }

        contentRef.current.scrollTop = newScrollTop;
        handleScroll();
      }
      lastFrameTime.current = time;
      animationFrameId.current = requestAnimationFrame(autoScroll);
    };

    const contentElement = contentRef.current;
    contentElement.addEventListener('scroll', handleScroll);
    handleScroll();

    if (scroll && window.innerWidth > 768) {
      animationFrameId.current = requestAnimationFrame(autoScroll);
    }

    return () => {
      contentElement.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId.current);
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