import React, { Component } from 'react';

class GalleryListItem extends Component {
  render() {
    return <img src={this.props.galleryItem.image_path} alt="" />;
  }
}

export default GalleryListItem;
