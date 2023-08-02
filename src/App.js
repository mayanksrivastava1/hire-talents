
import './App.css';
import Navbar from './components/Navbar';
import Main_section from './components/Main_section';
import Clients from './components/Clients';
import Footer from './components/Footer';
import Slider from './components/Slider';
import Submission from './components/Submission';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main_section />
      <Clients/>
      <Submission/>
      <Slider />
      
      <Footer/>
      
    </div>
  );
}

export default App;
