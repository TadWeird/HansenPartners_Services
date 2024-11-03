import './App.css'
import './index.css';
import Navibar from './components/navibar';
import Hero from './components/Hero';
import { Flowbite } from 'flowbite-react';
import { useEffect } from 'react';


function App() {
  return (
    <div>
      <Navibar/>
      <Hero/>
    </div>
  )
}

export default App
