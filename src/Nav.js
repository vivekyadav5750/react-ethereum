import React, { useState } from 'react';
import './Nav.css';

const IconButtonWithBadge = ({ icon, onClick }) => {
  const [notificationCount, setNotificationCount] = useState(0);

  const handleButtonClick = () => {
    onClick();
    // Clear notification count on button click
    setNotificationCount(0);
  };

  return (
    <div className="icon-button" onClick={handleButtonClick}>
       
      <span className="icon">{icon}</span>
      {notificationCount > 0 && <span className="badge">{notificationCount}</span>}
      <span className="icon-button__badge">2</span>
    </div>
  );
};

export default IconButtonWithBadge;
