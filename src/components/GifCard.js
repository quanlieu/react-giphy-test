import React, { Component } from 'react';
import GifStats from './GifStats';
import User from './User';
import './GifCard.css';

class GifCard extends Component {
  render() {
    const { gif, onGifClick, index } = this.props;
    return (
      <div className="card-outer">
        <div className="card-inner">
          <div className="img-frame">
            <img
              src={gif.images.original.url}
              onClick={onGifClick}
              data-index={index}
            />
          </div>
          <GifStats url={gif.url} />
        </div>
        <User user={gif.user} />
      </div>
    );
  }
}

export default GifCard;
