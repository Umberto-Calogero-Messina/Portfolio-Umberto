import { useLanguage } from '../../contexts/LanguageContext.jsx';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import {
  Metin2PageContainer,
  HeroSection,
  VideoBackground,
  HeroContent,
  Title,
  Subtitle,
  ExperienceSection,
  WorkItem,
  WorkImage,
  WorkText,
  WorkTitle,
  ShowcaseTitle,
  ShowcaseSection,
  Card,
  CardImage,
  CardText,
  ConclusionSection,
  ConclusionButton,
  WorkSubitle,
  ShowcaseContainer
} from './Metin2Page.styles';

// Placeholder video - can be replaced with a local or remote asset
const placeholderVideo =
  'https://www.youtube.com/embed/IR0akUawX4Y?autoplay=1&mute=1&loop=1&playlist=IR0akUawX4Y&controls=0';

const Metin2Page = () => {
  const { t } = useLanguage();

  // Retrieve data arrays from translation files
  const experienceItems = t('metin2Page.experience.items') || [];
  const cardItems = t('metin2Page.cards.items') || [];
  const showcaseTitle = t('metin2Page.cards.title');

  return (
    <Metin2PageContainer>
      <HeroSection>
        <VideoBackground
          src={placeholderVideo}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
        <HeroContent>
          <Title>{t('metin2Page.video.title')}</Title>
          <Subtitle>{t('metin2Page.video.subtitle')}</Subtitle>
        </HeroContent>
      </HeroSection>

      <ExperienceSection>
        <ShowcaseTitle>{t('metin2Page.experience.title')}</ShowcaseTitle>
        {experienceItems.map((item, index) => (
          <WorkItem key={index}>
            <WorkImage src={item.image} alt={item.title} />
            <WorkText>
              <WorkTitle>{item.title}</WorkTitle>
              <WorkSubitle>{item.description}</WorkSubitle>
            </WorkText>
          </WorkItem>
        ))}
      </ExperienceSection>

      <ShowcaseContainer>
        <ShowcaseTitle>{showcaseTitle}</ShowcaseTitle>
        <ShowcaseSection>
          {cardItems.map((card, index) => (
            <Card key={index}>
              <CardImage src={card.image} alt={card.title} />
              <CardText>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </CardText>
            </Card>
          ))}
        </ShowcaseSection>
      </ShowcaseContainer>

      <ConclusionSection>
        <h2>{t('metin2Page.conclusion.title')}</h2>
        <p>{t('metin2Page.conclusion.text')}</p>
        <Link to='/#work'>
          <ConclusionButton>{t('metin2Page.conclusion.button')}</ConclusionButton>
        </Link>
      </ConclusionSection>
    </Metin2PageContainer>
  );
};

export default Metin2Page;
