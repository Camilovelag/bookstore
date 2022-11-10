import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './BookProgress.css';

const BookProgress = () => {
  const percentage = 64;

  return (
    <div className="bookProgress-container">
      <div style={{ width: '4.25rem', height: '4.25rem' }}>
        <CircularProgressbar value={percentage} />
      </div>
      <div className="bookProgress-text">
        <p className="bookProgress-info">
          {percentage}
          %
        </p>
        <p className="bookProgress-status">Completed</p>
      </div>
    </div>
  );
};

export default BookProgress;
