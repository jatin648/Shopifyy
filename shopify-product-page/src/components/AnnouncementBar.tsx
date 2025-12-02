import React, { useState, useEffect } from 'react';
import '../styles/announcement-bar.css';

interface AnnouncementBarProps {
  text?: string;
  isVisible?: boolean;
}

const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ 
  text = "🎉 Free shipping on all orders over $100! Limited time offer. Shop now!",
  isVisible = true 
}) => {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    setDisplayText(text + " • " + text);
  }, [text]);

  if (!isVisible) return null;

  return (
    <div className="announcement-bar">
      <div className="announcement-container">
        <div className="announcement-content">
          <p className="announcement-text">{displayText}</p>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
