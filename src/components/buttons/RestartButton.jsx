import React, { useRef } from 'react';

const RestartButton = () => {
  const restartButtonRef = useRef(null);

  const handleRestartClick = () => {
    window.location.reload(); 
  };

  return (
    <button className='btn' onClick={handleRestartClick} ref={restartButtonRef}>
      Restart Button
    </button>
  );
};

export  default RestartButton;