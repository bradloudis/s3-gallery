import { all } from 'redux-saga/effects';
import galleryImageSaga from './gallery.image.saga';

export default function* rootSaga() {
  yield all([
    galleryImageSaga(),
    // comment for white space peace of mind :-)
  ]);
}
