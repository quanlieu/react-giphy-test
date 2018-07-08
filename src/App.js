import React, { Component } from 'react';
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

  render() {
    return (
      <div className="card-container">
        {this.state.gifs.map(gif => (
          <GifCard gif={gif} />
        ))}
      </div>
    );
  }
}

export default App;
