
import './App.css';
import { Button, PrButton } from './components/button/Button.jsx';
import Navbar from './components/navbar/Navbar.jsx';


function App() {
  return (
    <div className="App">
      <Navbar />
      <section className='hero'>
        <div className='hero content'>
          <h1>ADVANTURE AWAITS</h1>
          <h4>What are you waiting for?</h4>
          <div className='btns'>
            <Button />
            <PrButton />
          </div>
        </div>
      </section>


    </div>
  );
}

export default App;
