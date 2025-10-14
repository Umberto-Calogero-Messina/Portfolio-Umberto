import { useLanguage } from '../../contexts/LanguageContext.jsx';
import { Link } from 'react-router-dom';

import {
  FrontPageContainer,
  HeroSection,
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
} from './FrontPage.styles';

// Placeholder video - can be replaced with a local or remote asset
const placeholderVideo =
  'https://www.youtube.com/embed/IR0akUawX4Y?autoplay=1&mute=1&loop=1&playlist=IR0akUawX4Y&controls=0';

const FrontPage = () => {
  const { t } = useLanguage();

  // Retrieve data arrays from translation files
  const experienceItems = t('frontPage.experience.items') || [];
  const cardItems = t('frontPage.cards.items') || [];
  const showcaseTitle = t('frontPage.cards.title');

  return (
    <FrontPageContainer>
      <HeroSection>
        <HeroContent>
          <Title>{t('frontPage.video.title')}</Title>
          <Subtitle>{t('frontPage.video.subtitle')}</Subtitle>
        </HeroContent>
      </HeroSection>

      <ExperienceSection>
        <ShowcaseTitle>{t('frontPage.experience.title')}</ShowcaseTitle>
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
        <h2>{t('frontPage.conclusion.title')}</h2>
        <p>{t('frontPage.conclusion.text')}</p>
        <Link to='/#work'>
          <ConclusionButton>{t('frontPage.conclusion.button')}</ConclusionButton>
        </Link>
      </ConclusionSection>
    </FrontPageContainer>
  );
};

export default FrontPage;
