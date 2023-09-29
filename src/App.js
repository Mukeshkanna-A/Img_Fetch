import './App.css';
import ImageGallery from './components/Main';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ImageGallery />
      <Footer />
    </div>
  );
}

export default App;
