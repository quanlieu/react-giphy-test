import React, { Component } from 'react';
import GifCard from './components/GifCard';
import GifViewer from './components/GifViewer';
import BottomListener from './components/BottomListener';
import './App.css';

const GIF_EACH_LOAD = 20;

class App extends Component {
  state = {
    gifs: [],
    isOpenViewer: false,
    currentGifIndex: -1,
    nextPage: 0,
    loading: false
  };

  componentDidMount() {
    this.handleLoad();
  }

  handleLoad = () => {
    if (this.state.loading) {
      return;
    }

    const API_KEY = process.env.REACT_APP_API_KEY;
    const { nextPage } = this.state;
    let url = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`;
    url += `&limit=${GIF_EACH_LOAD}&offset=${nextPage * GIF_EACH_LOAD}`;

    this.setState({ loading: true });
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error');
        }
      })
      .then(json =>
        this.setState((prevState, props) => ({
          gifs: [...prevState.gifs, ...json.data],
          loading: false,
          nextPage: prevState.nextPage + 1
        }))
      )
      .catch(err => {});
  };

  handleGifClick = event => {
    this.setState({
      isOpenViewer: true,
      currentGifIndex: event.currentTarget.dataset.index
    });
  };

  handleClose = event => {
    this.setState({ isOpenViewer: false });
  };

  render() {
    const { gifs, isOpenViewer, currentGifIndex } = this.state;
    return (
      <React.Fragment>
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
            url={gifs[currentGifIndex].images.original.url}
            onClose={this.handleClose}
          />
        )}
        <BottomListener onBottom={this.handleLoad} />
      </React.Fragment>
    );
  }
}

export default App;
