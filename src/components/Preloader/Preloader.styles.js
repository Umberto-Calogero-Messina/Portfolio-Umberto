import styled, { keyframes } from 'styled-components';

export const PreloaderWrap = styled.div`
  background-color: var(--color-bg-dark);
  z-index: var(--z-preloader);
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.7s;
  opacity: 1;
  transform: translateY(${p => (p.hide ? '-100vh' : '0')});
`;

const move = keyframes`
  0% { clip-path: circle(80px at -80px 50%); }
  100% { clip-path: circle(80px at calc(100% + 80px) 50%); }
`;

export const LoadingText = styled.h5`
  font-size: clamp(2.5rem, 10vw, 6.25rem);
  font-weight: bold;
  position: relative;
  margin: 0;
  color: var(--color-text-dark);
  opacity: ${p => (p.hide ? 0 : 1)};
  transition: opacity 0.7s;

  &::after {
    content: 'Loading';
    position: absolute;
    left: 0;
    top: 0;
    animation: ${move} 2s infinite alternate;
    color: var(--color-accent);
  }
`;
