import React, { Component } from 'react';
import GifStats from './GifStats';
import User from './User';
import './GifCard.css';

class GifCard extends Component {
  state = {
    hasError: false
  };
  
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="card-outer">
          <div className="card-inner">
            <div className="img-frame">Something went wrong</div>
          </div>
        </div>
      );
    }

    const { gif, onGifClick, index } = this.props;
    return (
      <div className="card-outer">
        <div className="card-inner">
          <div className="img-frame">
            <img
              src={gif.images.original.url}
              onClick={onGifClick}
              data-index={index}
              alt="Gif load error"
            />
          </div>
          <GifStats url={gif.url} />
        </div>
        {gif.user && <User user={gif.user} />}
      </div>
    );
  }
}

export default GifCard;
