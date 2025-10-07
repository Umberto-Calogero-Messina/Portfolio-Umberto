import styled from 'styled-components';
import { mq } from '../../Styles/styledSystem';
import heroBanner from '../../assets/images/banner-scaled.jpg';

export const Metin2PageContainer = styled.div`
  background-image: url(${heroBanner});
    background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  color: #333;
  text-align: center;
`;

// --- Hero Section ---
export const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`;

export const VideoBackground = styled.iframe`
background-color: black;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: 0;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  color: white;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  ${mq.laptop} {
    font-size: 4rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  ${mq.laptop} {
    font-size: 1.5rem;
  }
`;

// --- Base Section Styling ---
const BaseSection = styled.section`
  padding: 2rem 1rem;
  max-width: 1400px;
  margin-inline: auto;

${mq.tablet} {
    padding: 2rem 3rem;
  } 

`;

// --- Experience Section ---
export const ExperienceSection = styled(BaseSection)`
  color:var(--color-bg-light);
`;

export const WorkItem = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 4rem;
  align-items: center;


  ${mq.laptop} {
    grid-template-columns: 50% 50%;
    padding-right: 48px;
    gap: 3rem;

    &:nth-child(odd) {
      grid-template-columns: 50% 50%;
      & > *:first-child {
        order: 2;
      }
      & > *:last-child {
        order: 1;
      }
    }
  }
`;

export const WorkText = styled.div`
  grid-column: 1 / -1; // Full width on mobile
  ${mq.laptop} {
    grid-column: auto;
  }
`;

export const WorkTitle = styled.h3`
  font-size: clamp(1.5rem, 3vw + 0.5rem, 2rem);
  margin-bottom: 1rem;
  line-height: 1.2;
`;

export const WorkSubitle = styled.p`
  font-size: clamp(0.9rem, 2vw + 0.2rem, 1.1rem);
  margin-bottom: 1rem;
  text-align: justify;
  line-height: 1.5;
`;

export const WorkImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  grid-column: 1 / -1; // Full width on mobile
   ${mq.laptop} {
    grid-column: auto;
  }
`;

// --- Showcase Section ---
export const ShowcaseContainer = styled.div`
background-color: var(--color-bg-dark);
  padding-block:3rem;
`;

export const ShowcaseSection = styled(BaseSection)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  ${mq.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${mq.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ShowcaseTitle = styled.h2`
text-align: center;
  font-size: clamp(1.5rem, 3vw + 0.5rem, 2.5rem);
  margin-top:0;
   color:white;

  ${mq.laptop} {
  }
`;

export const Card = styled.div`
  background-color: var(--color-bg-darkblue);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border:1px solid var(--color-accent);
  color:var( --color-bg-light);
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const CardText = styled.p`
  padding: 1rem;
`;

// --- Conclusion Section ---
export const ConclusionSection = styled(BaseSection)`
  text-align: center;
  background-color: var(--color-bg-darkblue);
  color:var( --color-bg-light);
`;

export const ConclusionButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
