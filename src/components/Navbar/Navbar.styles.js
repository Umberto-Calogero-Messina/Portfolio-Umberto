import styled from 'styled-components';
import { mq } from '../../Styles/styledSystem';

export const Nav = styled.nav`
  background-color: var(--color-bg-dark);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  ${mq.tablet} {
    padding-inline: var(--spacing-xl);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: var(--spacing-md);
  ${mq.desktop} {
    max-width: 1440px;
    margin-inline: auto;
  }
`;

export const Logo = styled.div``;
export const LogoImg = styled.img``;

export const Links = styled.ul`
  border-block: 4px solid var(--color-accent);
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  background: var(--color-bg-dark);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  transform-origin: top;
  transform: scaleY(${p => (p.open ? 1 : 0)});
  opacity: ${p => (p.open ? 1 : 0)};
  transition: transform var(--transition-normal), opacity var(--transition-normal);
  padding: ${p => (p.open ? 'var(--spacing-md) 0' : '0')};

  ${mq.laptop} {
    position: static;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    background: transparent;
    padding: 0;
    transform: none;
    opacity: 1;
    pointer-events: auto;
    transition: none;
    border-block: none;
  }
`;

export const LinkA = styled.a`
  color: #fff;
  font-size: var(--font-size-base);
  font-weight: 500;
  padding: 0.25rem 0.75rem;
  transition: color var(--transition-fast);
  padding-inline: var(--spacing-lg);

  ${mq.tablet} {
    padding-inline: var(--spacing-2xl);
  }
  ${mq.laptop} {
    padding-inline: var(--spacing-xs);
  }

  @media (hover: hover) {
    &:hover { color: var(--color-accent); }
  }
`;

export const Hamburger = styled.div`
  background-color: var(--color-accent);
  width: 80px;
  height: 80px;
  position: relative;
  transition: all var(--transition-normal);
  cursor: pointer;
  ${mq.laptop} { display: none; }
`;

export const HamburgerLine = styled.span`
  position: absolute;
  top: 38px;
  left: 24px;
  width: 32px;
  height: 4px;
  background-color: var(--color-bg-light);
  border-radius: 2px;
  transition: all var(--transition-normal);

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 32px;
    height: 4px;
    left: 0;
    border-radius: 2px;
    background-color: var(--color-bg-light);
    transition: all var(--transition-normal);
  }
  &::before { top: -12px; }
  &::after { top: 12px; }

  ${p =>
    p.open &&
    `
    background-color: transparent;
    &::before { transform: translateY(12px) rotate(45deg); }
    &::after { transform: translateY(-12px) rotate(-45deg); }
  `}
`;
