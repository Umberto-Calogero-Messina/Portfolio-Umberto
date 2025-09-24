import styled, { keyframes } from 'styled-components';
import { mq } from '../../Styles/styledSystem';
import heroBanner from '../../assets/images/banner-scaled.jpg';
import bannerShape from '../../assets/images/banner_shape.png';

export const Section = styled.section`
  background-image: url(${heroBanner});
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 180px;

  ${mq.laptop} {
    background-position: center;
    padding-bottom: 100px;
  }
  ${mq.desktop} {
    padding-top: 0;
    height: 100vh;
    display: grid;
  }
`;

export const Container = styled.div`
  display: grid;
  gap: var(--spacing-2xl);
  align-items: center;
  padding-inline: var(--spacing-xl);
  padding-bottom: var(--spacing-2xl);

  ${mq.tablet} { 
    padding-top: var(--spacing-2xl);

   }
  ${mq.laptop} {
    max-width: 1500px;
    margin-inline: auto;
    padding-inline: var(--spacing-3xl);
    padding-bottom: 0;
    grid-template-columns: 1.5fr 0.5fr;
  }
`;

export const Content = styled.div`
  order: 1; /* testo prima dell'immagine su mobile */
  ${mq.laptop} {
    padding-block: var(--spacing-xl);
    order: 0; /* testo prima dell'immagine su desktop */
  }
`;

export const Eyebrow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  line-height: 1.15;
  font-weight: 800;
  color: var(--color-accent);
  ${mq.tablet} { font-size: 30px; }
  ${mq.desktop} { font-size: 50px; }
`;

export const Title = styled.h1`
  color: var(--color-accent);
  height: 1.15em;
  font-size: 20px;
  line-height: 1.15;
  font-weight: 800;
  ${mq.tablet} { font-size: 30px; }
  ${mq.desktop} { font-size: 50px; }
`;

export const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.75);
  font-size: 15px;
  margin-bottom: 30px;
  ${mq.tablet} {
    font-size: 20px;
    margin-bottom: 60px;
  }
  ${mq.desktop} { font-size: 25px; }
`;

export const Cta = styled.div`
  display: flex;
  justify-content: center;
  ${mq.tablet} { justify-content: flex-start; }
`;

export const Button = styled.a`
  padding: 0.85rem 1.25rem;
  border-radius: var(--radius-lg);
  font-weight: 600;
  transition: opacity var(--transition-fast);
  @media (hover: hover) {
    &:hover { opacity: 0.75; }
  }
`;

export const ButtonPrimary = styled(Button)`
  background: var(--color-accent);
  color: #111;
`;

export const Visual = styled.div`
  ${mq.laptop} {
    display: grid;
    place-items: center;
  }
`;

export const ImageWrap = styled.div`
  position: relative;
  width: clamp(220px, 40vw, 520px);
  aspect-ratio: 1/1;
  display: grid;
`;

export const bounceRombo = keyframes`
  0% { transform: translate(0, 0); }
  25% { transform: translate(20px, -20px); }
  50% { transform: translate(60px, 0); }
  75% { transform: translate(20px, 20px); }
  100% { transform: translate(0, 0); }
`;

export const Image = styled.img`
  width: 70%;
  background-image: url(${bannerShape});
  background-position: center top;
  background-repeat: no-repeat;
  background-size: contain;
  padding: 15px;
  position: absolute;
  top: -30px;
  left: 0;
  ${mq.laptop} {
    position: static; /* rientra nel flusso */
    display: block;
    width: 100%;
    padding: 35px;
    animation: ${bounceRombo} 4s infinite linear;
  }
`;
