
import './App.css';

import Hero from './components/hero/Hero';
import Main from './components/main/Main';
import TextSection from './components/sectiontext/TextSection';
import C from './components/searchcarsec/C';
import Mobile from './components/mobileapp/Mobile';
import Footer from './components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import MNavbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
     <MNavbar/>
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
