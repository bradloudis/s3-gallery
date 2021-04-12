import './App.css';

// Components
import ImageUpload from '../ImageUpload/ImageUpload';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        AWS S3 Gallery
        <ImageUpload />
      </header>
    </div>
  );
}

export default App;
