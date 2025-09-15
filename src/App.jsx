import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Preloader from './components/Preloader/Preloader';
import { PRELOADER_ANIMATION_DURATION, PRELOADER_TEXT_DURATION } from './constants/variables';
import Presentation from './components/presentation/presentation';
import Education from './components/Education/Education';
import Footer from './components/Footer/Footer';
import ParallaxEllipseCards from './components/Parallax/Parallax';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [hideText, setHideText] = useState(false);
  const [hidePreloader, setHidePreloader] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setHideText(true);
      setTimeout(() => {
        setHidePreloader(true);
        setTimeout(() => setIsLoading(false), PRELOADER_ANIMATION_DURATION);
      }, PRELOADER_ANIMATION_DURATION);
    }, PRELOADER_TEXT_DURATION);

    return () => clearTimeout(textTimer);
  }, []);

  return (
    <div className='App'>
      <Navbar />
      <Presentation />
      <Education />
      <ParallaxEllipseCards />
      <div className='page-content'>{/* Qui il resto del tuo contenuto */}</div>
      <Footer />
      {isLoading && <Preloader hideText={hideText} hidePreloader={hidePreloader} />}
    </div>
  );
}

export default App;
