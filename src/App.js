import './App.css';
import Navbar from './pages/Navbar';
import Header from './pages/Header';
import Brand from './pages/Brand';
import WhatGPT3 from './pages/WhatGPT3';
import Features from './pages/Features';
import Possibility from './pages/Possibility';
import CTA from './pages/CTA';
import Blog from './pages/Blog';
import Footer from './pages/Footer';
function App() {
  return (
    <div className='App'>
        <div className='gradient__bg '  >
        <Navbar/>
        <Header/>
        </div>
        <Brand />
        <WhatGPT3/>
        <Features />
        <Possibility />
        <CTA />
        <Blog/>
        <Footer />
    </div>
  );
}

export default App;
