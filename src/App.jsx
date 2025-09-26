import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import Preloader from './components/Preloader/Preloader';
import { PRELOADER_ANIMATION_DURATION, PRELOADER_TEXT_DURATION } from './constants/variables';
import Presentation from './components/presentation/Presentation';
import Education from './components/Education/Education';
import Contact from './components/contact/Contact';
import Footer from './components/Footer/Footer';
import ParallaxEllipseCards from './components/Parallax/Parallax';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';

const AppWrap = styled.div``;
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
    <AppWrap>
      <Navbar />
      <Presentation isLoading={isLoading} />
      <Education />
      <ParallaxEllipseCards />
      <Contact></Contact>
      <Footer />
      <ScrollToTopButton />
      {isLoading && <Preloader hideText={hideText} hidePreloader={hidePreloader} />}
    </AppWrap>
  );
}

export default App;
