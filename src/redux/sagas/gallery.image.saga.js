import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addImage(action) {
  try {
    // add s3 URL to DB
    yield axios.post('/api/gallery', action.payload);
    // get up to date data from DB
    yield put({
      type: 'FETCH_GALLERY_IMAGES',
    });
  } catch (err) {
    console.log('something went wrong with gallery image saga', err);
  }
}

function* getGallery() {
  try {
    const response = yield axios.get('/api/gallery/all');

    // send response to gallery reducer
    yield put({
      type: 'SET_GALLERY',
      payload: response.data,
    });
  } catch (err) {
    console.log('could not get gallery', err);
  }
}

function* galleryImageSaga() {
  yield takeLatest('SET_IMAGE_URL', addImage);
  yield takeLatest('FETCH_GALLERY_IMAGES', getGallery);
}

export default galleryImageSaga;
