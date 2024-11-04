import './App.css'
import './index.css';
import Navibar from './components/navibar';
import Hero from './components/Hero';
import Searchbar from './components/Searchbar';
import CompMarketPlan from './components/CompMarketPlan';
import CompMarketCard from './components/CompMarketCard';
import MyStrategicExp from './components/MyStagingcExp';
import SellingProc from './components/SellingProc';

function App() {
  return (
    <div>
      <Navibar/>
      <Hero/>
      <Searchbar/>
      <CompMarketPlan/>
      <CompMarketCard/>
      <MyStrategicExp/>
      <SellingProc/>
    </div>
  )
}

export default App
