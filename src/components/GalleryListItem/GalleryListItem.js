import React, { Component } from 'react';

class GalleryListItem extends Component {
  render() {
    return <img src={this.props.galleryItem} alt="" />;
  }
}

export default GalleryListItem;
