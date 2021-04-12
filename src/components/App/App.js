import './App.css';

// Components
import ImageUpload from '../ImageUpload/ImageUpload';
import Gallery from '../Gallery/Gallery';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        AWS S3 Gallery
        <ImageUpload />
      </header>
      <Gallery />
    </div>
  );
}

export default App;
