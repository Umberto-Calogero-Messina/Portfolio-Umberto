import { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import presentatioImg from '../../assets/images/foto-profilo.png';
import cvUrl from '../../curriculum/CV-UmbertoCalogeroMessina.pdf';
import ScrollDownArrow from '../ScrollDownArrow/ScrollDownArrow';
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

const TYPING_SPEED = 150;
const DELETING_SPEED = 100;
const PAUSE_TIME = 900;

const Presentation = ({ isLoading = false }) => {
  const { t } = useLanguage();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const words = useMemo(() => t('presentation.roles', { returnObjects: true }) || [], [t]);

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
  }, [displayedText, isDeleting, currentWordIndex, words]);

  return (
    <Section id='home'>
      <Container>
        <Content>
          <Eyebrow>
            <span>{t('presentation.greeting')}</span>
            <Title>{displayedText}</Title>
          </Eyebrow>
          <Subtitle>{t('presentation.description')}</Subtitle>
          <Cta>
            <ButtonPrimary href={cvUrl} download>
              {t('presentation.downloadCV')}
            </ButtonPrimary>
          </Cta>
        </Content>
        <Visual>
          <ImageWrap>
            <Image src={presentatioImg} alt='profile' />
          </ImageWrap>
        </Visual>
      </Container>
      <ScrollDownArrow isLoading={isLoading} />
    </Section>
  );
};

export default Presentation;
