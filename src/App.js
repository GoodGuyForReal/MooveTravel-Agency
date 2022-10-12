
import './App.css';
import Navbar from './components/navbar/Navbar.jsx';
import Hero from './components/hero/Hero';
import Main from './components/main/Main';
import TextSection from './components/sectiontext/TextSection';
import C from './components/searchcarsec/C';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Main />
      <TextSection/>
      <C/>
    </div>
  );
}

export default App;
