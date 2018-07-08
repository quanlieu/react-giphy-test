import React, { Component } from 'react';
import GifCard from './components/GifCard';
import GifViewer from './components/GifViewer';

class App extends Component {
  state = {
    gifs: [],
    isOpenViewer: false
  };

  componentDidMount() {
    const API_KEY = process.env.REACT_APP_API_KEY;
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=20`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error');
        }
      })
      .then(json => this.setState((prevState, props) => ({ gifs: json.data })))
      .catch(err => {});
  }

  handleGifClick = event => {
    this.setState({
      isOpenViewer: true,
      currentGif: event.currentTarget.dataset.index
    });
  };

  handleClose = (event) => {
    this.setState({ isOpenViewer: false });
  };

  render() {
    const { gifs, isOpenViewer, currentGif } = this.state;
    return (
      <div>
        <div className="card-container">
          {gifs.map((gif, index) => (
            <GifCard
              gif={gif}
              key={gif.id}
              index={index}
              onGifClick={this.handleGifClick}
            />
          ))}
        </div>
        {isOpenViewer && (
          <GifViewer
            url={gifs[currentGif].images.original.url}
            onClose={this.handleClose}
          />
        )}
      </div>
    );
  }
}

export default App;
