import { useLanguage } from '../../contexts/LanguageContext';
import useRevealOnScroll from '../../hooks/useRevealOnScroll';
import {
  Section,
  Title,
  Subtitle,
  Grid,
  Item,
  ItemTitle,
  ItemDesc,
  ItemSub,
  SkillsGrid,
  SkillCard,
  SkillHeader,
  SkillIcon,
  SkillName,
  Bar,
  BarFill
} from './Education.styles';

const SkillsItems = [
  { id: 1, name: 'HTML', score: 80, icon: 'html' },
  { id: 2, name: 'CSS', score: 80, icon: 'css' },
  { id: 3, name: 'JavaScript', score: 85, icon: 'javascript' },
  { id: 4, name: 'React', score: 65, icon: 'react' },
  { id: 5, name: 'Python', score: 55, icon: 'python' },
  { id: 6, name: 'C++', score: 60, icon: 'c++' }
];

import htmlIcon from '../../assets/icons/html.png';
import cssIcon from '../../assets/icons/css.png';
import jsIcon from '../../assets/icons/javascript.png';
import pythonIcon from '../../assets/icons/python.png';
import reactIcon from '../../assets/icons/react.png';
import cppIcon from '../../assets/icons/c++.png';

const icons = {
  html: htmlIcon,
  css: cssIcon,
  javascript: jsIcon,
  react: reactIcon,
  python: pythonIcon,
  'c++': cppIcon
};

const Education = () => {
  const titleReveal = useRevealOnScroll();
  const subtitleReveal = useRevealOnScroll();
  const gridReveal = useRevealOnScroll();
  const skillsReveal = useRevealOnScroll();
  const { t } = useLanguage();

  // Recupera gli items tradotti dal contesto
  const educationItems = t('education.items', { returnObjects: true }) || [];

  return (
    <Section id='about'>
      <Title ref={titleReveal.ref} $revealed={titleReveal.isVisible}>
        {t('education.title')}
      </Title>
      <Subtitle ref={subtitleReveal.ref} $revealed={subtitleReveal.isVisible}>
        {t('education.subtitle')}
      </Subtitle>

      <Grid ref={gridReveal.ref}>
        {educationItems.map(({ title, description, subtitle }, idx) => (
          <Item key={idx} $revealed={gridReveal.isVisible} $delay={idx * 90} $dir={idx % 2 === 0 ? 'left' : 'right'}>
            <ItemTitle>{title}</ItemTitle>
            <ItemDesc>{description}</ItemDesc>
            <ItemSub>{subtitle}</ItemSub>
          </Item>
        ))}
      </Grid>

      <SkillsGrid ref={skillsReveal.ref}>
        {SkillsItems.map(({ id, name, score, icon }, idx) => (
          <SkillCard key={id} $revealed={skillsReveal.isVisible} $delay={idx * 90}>
            <SkillHeader>
              <SkillIcon src={icons[icon]} alt={`${name} icon`} />
              <SkillName>{name}</SkillName>
            </SkillHeader>
            <Bar role='progressbar' aria-valuemin={0} aria-valuemax={100} aria-valuenow={score}>
              <BarFill $width={skillsReveal.isVisible ? score : 0} />
            </Bar>
          </SkillCard>
        ))}
      </SkillsGrid>
    </Section>
  );
};

export default Education;
