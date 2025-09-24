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

const EducationItems = [
  {
    id: 1,
    title: '2014 - 2018',
    description: 'Short description of project 1.',
    subtitle:
      'Nemo Lorem ipsum dolor sit amet, consectetur adipiscing elit.dolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipisc'
  },
  {
    id: 2,
    title: '2012 - 2014',
    description: 'Short description of project 2.',
    subtitle:
      'Nemo Lorem ipsum dolor sit amet, consectetur adipiscing elit.dolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipisc'
  },
  {
    id: 3,
    title: '2012 - 2014',
    description: 'Short description of project 2.',
    subtitle: 'Nemo Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 4,
    title: '2012 - 2014',
    description: 'Short description of project 2.',
    subtitle: 'Nemo Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
];

const SkillsItems = [
  { id: 1, name: 'HTML', score: 90, icon: 'html' },
  { id: 2, name: 'CSS', score: 85, icon: 'css' },
  { id: 3, name: 'JavaScript', score: 80, icon: 'javascript' },
  { id: 4, name: 'Python', score: 70, icon: 'python' },
  { id: 5, name: 'Photoshop', score: 60, icon: 'photoshop' },
  { id: 6, name: 'C++', score: 50, icon: 'c++' }
];

import htmlIcon from '../../assets/icons/html.png';
import cssIcon from '../../assets/icons/css.png';
import jsIcon from '../../assets/icons/javascript.png';
import pythonIcon from '../../assets/icons/python.png';
import photoshopIcon from '../../assets/icons/photoshop.png';
import cppIcon from '../../assets/icons/c++.png';

const icons = {
  html: htmlIcon,
  css: cssIcon,
  javascript: jsIcon,
  python: pythonIcon,
  photoshop: photoshopIcon,
  'c++': cppIcon
};

const Education = () => {
  const titleReveal = useRevealOnScroll();
  const subtitleReveal = useRevealOnScroll();
  const gridReveal = useRevealOnScroll();
  const skillsReveal = useRevealOnScroll();

  return (
    <Section id='about'>
      <Title ref={titleReveal.ref} $revealed={titleReveal.isVisible}>
        Education & skill
      </Title>
      <Subtitle ref={subtitleReveal.ref} $revealed={subtitleReveal.isVisible}>
        Showcasing your talent amplifying your impact
      </Subtitle>

      <Grid ref={gridReveal.ref}>
        {EducationItems.map(({ id, title, description, subtitle }, idx) => (
          <Item key={id} $revealed={gridReveal.isVisible} $delay={idx * 90} $dir={idx % 2 === 0 ? 'left' : 'right'}>
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
