import React from 'react';
import './GifStats.css';

const GifStats = ({ url }) => {
  // Honestly dont know how to get these statitics so faked one is used
  const viewCount = Math.floor(Math.random() * 10000 + 1);
  const commentCount = Math.floor(Math.random() * 100 + 1);
  const likeCount = Math.floor(Math.random() * 1000 + 1);
  return (
    <div className="stats">
      <div className="link">
        <a href={url}>
          <i className="fas fa-link" />
        </a>
      </div>
      <div className="other">
        <i className="fas fa-eye" /> {viewCount.toLocaleString()}
        <i className="fas fa-comment" /> {commentCount.toLocaleString()}
        <i className="fas fa-heart" /> {likeCount.toLocaleString()}
      </div>
    </div>
  );
};

export default GifStats;
