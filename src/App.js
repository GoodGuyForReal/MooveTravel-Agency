
import './App.css';
import Navbar from './components/navbar/Navbar.jsx';
import Hero from './components/hero/Hero';
import Main from './components/main/Main';
import TextSection from './components/sectiontext/TextSection';
import C from './components/searchcarsec/C';
import Mobile from './components/mobileapp/Mobile';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Main />
      <TextSection/>
      <C/>
      <Mobile/>
      <Footer/>
    </div>
  );
}

export default App;
