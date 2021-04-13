import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ImageUpload.css';

// import s3 image uploader
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';

const dropStyles = {
  width: '100px',
  height: '60px',
  border: '2px solid #EF4E23',
  'border-radius': '10px',
  transition: '0.3s',
};

const dropStylesHover = {
  width: '100px',
  height: '60px',
  border: '2px solid #C3161C',
  'border-radius': '10px',
  transition: '0.3s',
};

class ImageUpload extends Component {
  state = {
    hover: false,
  };

  toggleState = () => {
    if (this.state.hover) {
      this.setState({ hover: false });
    } else {
      this.setState({ hover: true });
    }
  };

  handleFinishedUpload = (info) => {
    // console.log('File upload with filename', info.filename);
    // console.log('Access it on s3 at', info.fileUrl);

    // sending fileUrl (string) to be saved in User table
    this.props.dispatch({
      type: 'SET_IMAGE_URL',
      payload: { imagePath: info.fileUrl },
    });
  };

  render() {
    let uploadOptions = {
      server: 'http://localhost:5000',
    };

    // if deployed change the server url
    if (process.env.DATABASE_URL) {
      uploadOptions.server = 'https://s3-gallery.herokuapp.com';
    }

    const s3Url = 'https://kontomo-test.s3.amazonaws.com';

    const innerDropElement = (
      <div class="inner-drop">
        <p>Click or Drop File Here!</p>
      </div>
    );

    return (
      <DropzoneS3Uploader
        onFinish={this.handleFinishedUpload}
        s3Url={s3Url}
        maxSize={1024 * 1024 * 5}
        upload={uploadOptions}
        style={this.state.hover ? dropStylesHover : dropStyles}
        children={innerDropElement}
        onMouseEnter={this.toggleState}
        onMouseLeave={this.toggleState}
      />
    );
  }
}

export default connect()(ImageUpload);
