import React, { Component } from 'react';
import Lightbox from 'react-images';
import GifCard from './components/GifCard';

class App extends Component {
  state = {
    gifs: []
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

  handleClickImage = (event) => {
    console.log(event);
  };

  render() {
    return (
      <div>
        <div className="card-container">
          {this.state.gifs.map(gif => (
            <GifCard
              gif={gif}
              key={gif.id}
              onImageClick={this.handleClickImage}
            />
          ))}
        </div>
        {/* <Lightbox /> */}
      </div>
    );
  }
}

export default App;
