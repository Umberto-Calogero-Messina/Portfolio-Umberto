import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar/Navbar';
import Preloader from './components/Preloader/Preloader';
import { PRELOADER_ANIMATION_DURATION, PRELOADER_TEXT_DURATION } from './constants/variables';
import Footer from './components/Footer/Footer';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
import HomePage from './pages/HomePage';
import Metin2Page from './pages/Metin2Page/Metin2Page';
import FrontPage from './pages/FrontPage/FrontPage';

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
    <BrowserRouter>
      <LanguageProvider>
        <AppWrap>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage isLoading={isLoading} />} />
            <Route path='/metin2' element={<Metin2Page />} />
            <Route path='/frontpage' element={<FrontPage />} />
          </Routes>
          <Footer />
          <ScrollToTopButton />
          {isLoading && <Preloader hideText={hideText} hidePreloader={hidePreloader} />}
        </AppWrap>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
