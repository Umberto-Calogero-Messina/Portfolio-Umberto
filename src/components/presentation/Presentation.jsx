import React, { useState, useEffect } from 'react';
import './Presentation.scss';
import presentatioImg from '../../assets/images/foto-profilo.png';

const words = ['Umberto Calogero', 'Front-End Developer', 'Creative', 'Player'];
const TYPING_SPEED = 150;
const DELETING_SPEED = 100;
const PAUSE_TIME = 1000;

const Presentation = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    let timeout;

    if (!isDeleting) {
      if (displayedText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, TYPING_SPEED);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), PAUSE_TIME);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length - 1));
        }, DELETING_SPEED);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex(prev => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWordIndex]);

  return (
    <section id='home' className='presentatio'>
      <div className='presentatio__container'>
        <div className='presentatio__content'>
          <span className='presentatio__eyebrow'>
            Hi, I'm <h1 className='presentatio__title'>{displayedText}</h1>
          </span>

          <p className='presentatio__subtitle'>
            I am a Front-End Web Developer with 8 years of experience in the web and video game industry, specializing
            in system development. I focus on writing clean, scalable, and intuitive code, making collaboration between
            developers easier and ensuring efficient maintenance.
          </p>

          <div className='presentatio__cta'>
            <a className='btn btn--primary' href='src/curriculum/CV-UmbertoCalogeroMessina.pdf' download>
              Download CV
            </a>
          </div>
        </div>

        <div className='presentatio__visual'>
          <div className='presentatio__image-wrap'>
            <img src={presentatioImg} alt='presentatio' className='presentatio__image' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
