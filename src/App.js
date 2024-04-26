import './App.css';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Footer from './components/Footer/Footer';
import Teastimonials from './assets/Teastimonials/Teastimonials';
import Plans from './components/Plans/Plans';
import Reasons from './components/Reasons/Reasons';
import Programs from './components/Programs/Programs';
function App() {
  return (
    <div className="App">
          <Hero/>
          <Programs/>
          <Reasons/>
          <Plans/>
          <Teastimonials/>
          <Join/>
          <Footer/>
    </div>
  );
}
export default App;
