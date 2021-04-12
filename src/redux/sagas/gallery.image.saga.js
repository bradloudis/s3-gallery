import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addImage(action) {
  try {
    // add s3 URL to DB
    yield axios.post('/api/gallery/', action.payload);
    // force client refresh
    yield put({
      type: 'FETCH_GALLERY_IMAGES',
    });
  } catch (err) {
    console.log('something went wrong with gallery image saga', err);
  }
}

function* galleryImageSaga() {
  yield takeLatest('SET_IMAGE_URL', addImage);
}

export default galleryImageSaga;
