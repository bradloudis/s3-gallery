const galleryReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_GALLERY_IMAGES':
      return action.payload;
    default:
      return state;
  }
};

export default galleryReducer;
