
import './App.css';
import Navbar from './components/navbar/Navbar.jsx';
import Hero from './components/hero/Hero';
import Main from './components/main/Main';
import TextSection from './components/sectiontext/TextSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Main />
      <TextSection/>
    </div>
  );
}

export default App;
