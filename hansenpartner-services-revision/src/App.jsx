import './App.css'
import './index.css';
import Navibar from './components/navibar';
import Hero from './components/Hero';
import Searchbar from './components/Searchbar';
import CompMarketPlan from './components/CompMarketPlan';
import { Flowbite } from 'flowbite-react';
import { useEffect } from 'react';
import CompMarketCard from './components/CompMarketCard';

function App() {
  return (
    <div>
      <Navibar/>
      <Hero/>
      <Searchbar/>
      <CompMarketPlan/>
      <CompMarketCard/>
    </div>
  )
}

export default App
