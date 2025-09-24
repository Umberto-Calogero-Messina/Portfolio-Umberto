import { useState, useEffect } from 'react';
import presentatioImg from '../../assets/images/foto-profilo.png';
import cvUrl from '../../curriculum/CV-UmbertoCalogeroMessina.pdf';
import {
  Section,
  Container,
  Content,
  Eyebrow,
  Title,
  Subtitle,
  Cta,
  ButtonPrimary,
  Visual,
  ImageWrap,
  Image
} from './Presentation.styles';

const words = ['Umberto Calogero', 'Front-End Developer', 'Creative', 'Player'];
const TYPING_SPEED = 150;
const DELETING_SPEED = 100;
const PAUSE_TIME = 900;

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
    <Section id='home'>
      <Container>
        <Content>
          <Eyebrow>
            <span>Hi, I'm</span>
            <Title>{displayedText}</Title>
          </Eyebrow>
          <Subtitle>
            I am a Front-End Web Developer with 8 years of experience in the web and video game industry, specializing
            in system development. I focus on writing clean, scalable, and intuitive code, making collaboration between
            developers easier and ensuring efficient maintenance.
          </Subtitle>
          <Cta>
            <ButtonPrimary href={cvUrl} download>
              Download CV
            </ButtonPrimary>
          </Cta>
        </Content>
        <Visual>
          <ImageWrap>
            <Image src={presentatioImg} alt='profile' />
          </ImageWrap>
        </Visual>
      </Container>
    </Section>
  );
};

export default Presentation;
