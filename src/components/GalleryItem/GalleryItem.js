import React, { Component } from 'react';
import './GalleryItem.css';

class GalleryItem extends Component {
  render() {
    return <img src={this.props.galleryItem.image_path} alt="" />;
  }
}

export default GalleryItem;
