import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './Gallery.css';

import GalleryListItem from '../GalleryListItem/GalleryListItem';

class Gallery extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_GALLERY_IMAGES',
    });
  }

  render() {
    return (
      <div className="gallery">
        {this.props.store.gallery &&
          this.props.store.gallery.map((item, index) => {
            return <GalleryListItem galleryItem={item} key={index} />;
          })}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Gallery);
