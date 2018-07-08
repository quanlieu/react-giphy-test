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
          <i class="fas fa-link" />
        </a>
      </div>
      <div className="other">
        <i class="fas fa-eye" /> {viewCount.toLocaleString()}
        <i class="fas fa-comment" /> {commentCount.toLocaleString()}
        <i class="fas fa-heart" /> {likeCount.toLocaleString()}
      </div>
    </div>
  );
};

export default GifStats;
