import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Hero from './components/Hero';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Hero />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;