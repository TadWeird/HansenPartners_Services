import './App.css'
import './index.css';
import Navibar from './components/navibar';
import Hero from './components/Hero';
import Searchbar from './components/Searchbar';
import CompMarketPlan from './components/CompMarketPlan';
import CompMarketCard from './components/CompMarketCard';
import MyStrategicExp from './components/MyStagingcExp';
import SellingProc from './components/SellingProc';
import BuyingProc from './components/BuyingProc';
import Showcase from './components/Showcase';
import HomeMarket from './components/HomeMarket';
import Partners from './components/Partners';
import Footer from './components/Footer';

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
      <BuyingProc/>
      <Showcase/>
      <HomeMarket/>
      <Partners/>
      <Footer/>
    </div>
  )
}

export default App
