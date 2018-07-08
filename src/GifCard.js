import React, { Component } from 'react';
import './GifCard.css';

class App extends Component {
  render() {
    const { gif } = this.props;
    return (
      <div className="card-outer">
        <div className="card-inner">
          <div className="img-frame">
            <img src={gif.images.original.url} />
          </div>
          <i className="fas fa-link" />
          <i class="fas fa-comment" />
          <i class="fas fa-heart" />
        </div>
        Name and avatar here
      </div>
    );
  }
}

export default App;
