import React from 'react';
import './GifViewer.css';

const GifViewer = ({ url, onClose }) => (
  <React.Fragment>
    <div className="background" onClick={onClose} />
    <i className="fas fa-times close" onClick={onClose} />
    <img className="gif" src={url} alt="Gif load error" />
  </React.Fragment>
);
export default GifViewer;
