import styled from 'styled-components';
import { mq } from '../../Styles/styledSystem';

export const Container = styled.section`
    padding: 80px 16px 80px;
    overflow: visible;
    background-color: var(--color-bg-darkblue);
    position: relative;

${mq.tablet} { 
  overflow: hidden;

 }
`;

export const Heading = styled.h2`
  text-align: center;
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 70px;
  color: var(--color-bg-light);
  ${mq.laptop} { 
   margin-bottom: 0px;

 }
`;

export const RevealWrap = styled.div`
  opacity: ${p => (p.$revealed ? 1 : 1)};
  transform: translate3d(
    ${p => (p.$dir === 'left' ? '-24px' : p.$dir === 'right' ? '24px' : '0')},
    ${p => (p.$dir === 'bottom' ? '24px' : '0')},
    0
  );
  transition: opacity var(--transition-normal) ${p => p.$delay || 0}ms,
              transform var(--transition-normal) ${p => p.$delay || 0}ms;
`;

export const EllipseContainer = styled.div`
  position: relative;
  width: 100%;
  height: 800px; /* scale to 90% of viewport height */
  perspective: 1200px;
  overflow: visible;
`;

export const CardLink = styled.a`
  color: inherit;
  text-decoration: none;
`;

export const Card = styled.div`
  position: absolute;
  width: 300px;
  height: 420px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;

  /* Glass + border glow */
  background-color: linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02));
  border: 1px solid rgba(255,255,255,0.12);
  box-shadow: 0 10px 30px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.04);

  transition: box-shadow 0.35s ease, filter 0.35s ease; // removed transform transition to avoid sliding off ellipse
  z-index: ${props => props.zIndex};

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: radial-gradient(800px circle at var(--x,50%) var(--y,50%), rgba(255,255,255,0.08), transparent 40%);
    transition: opacity 0.35s ease;
    opacity: 0;
    pointer-events: none;
  }

  &:hover {
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.24),
              0 0 0 1px rgba(255, 255, 255, 0.17),
              0 0 20px var(--color-accent);
              transform: box-shadow 0.35s ease;
    filter: brightness(1.04);
} 
  &:hover:before { opacity: 1; }
`;

export const ImageWrapper = styled.div`
  flex: 1 1 auto;
  overflow: hidden;
  border-radius:29px 20px 0 0;
  user-select: none;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${Card}:hover & img { transform: scale(1.1); }
`;

export const Content = styled.div`
  padding: 16px 20px;
  background-color: linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.75));
  border: 0 0 20px 20px;
`;

export const Title = styled.h3`
  margin: 0 0 8px;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-bg-light);
`;

export const Description = styled.p`
  margin: 0;
  font-weight: 300;
  font-size: 0.95rem;
  line-height: 1.3;
  color: var(--color-text-grey);
`;

// Grid layout for mobile/tablet (no parallax)
export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 30px;
  margin-inline:40px;
  ${mq.tablet} { 
    padding-bottom:70px;
  }
`;

export const GridCard = styled.div`
  position: relative;
  width: 100%;
  border-radius: 20px;
  color: #fff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;

  background-color: linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02));
  border: 1px solid rgba(255,255,255,0.12);
  box-shadow: 0 10px 30px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.04);
  transition: box-shadow 0.35s ease, filter 0.35s ease, transform 0.35s ease;

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: radial-gradient(800px circle at var(--x,50%) var(--y,50%), rgba(255,255,255,0.08), transparent 40%);
    transition: opacity 0.35s ease;
    opacity: 0;
    pointer-events: none;
  }

  &:hover {
    box-shadow: 0 25px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06), 0 0 18px var(--color-accent);
    transform: translateY(-6px) scale(1.01);
    filter: brightness(1.04);
  }
  &:hover:before { opacity: 1; }
`;

export const GridImageWrapper = styled.div`
  width: 100%;
  height: clamp(180px, 28vw, 260px);
  overflow: hidden;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  user-select: none;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.45s ease;
    transform-origin: center;
  }

  ${GridCard}:hover & img { transform: scale(1.08); }
`;
