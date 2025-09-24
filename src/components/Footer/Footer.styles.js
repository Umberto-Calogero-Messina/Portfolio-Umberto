import styled from 'styled-components';
import { mq } from '../../Styles/styledSystem';

export const FooterEl = styled.footer`
  background: #0b1020;
  color: var(--color-bg-light);
`;

export const Inner = styled.div`
  padding: 40px 24px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  align-items: center;
  ${mq.laptop} {
    grid-template-columns: 1fr auto 1fr;
    gap: 32px;
    max-width: 1280px;
    margin-inline: auto;
  }
`;

export const Brand = styled.div`
  font-weight: 700;
  letter-spacing: 0.6px;
  color: var(--color-bg-light);
`;

export const Links = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 16px 24px;
  justify-content: flex-start;
  ${mq.laptop} { justify-content: center; }
`;

export const LinkItem = styled.li`
  list-style: none;
`;

export const HoverLetters = styled.a`
  position: relative;
  display: inline-flex;
  gap: 0.02em;
  color: var(--color-bg-light);
  text-decoration: none;
  overflow: hidden;
`;

export const LetterSpan = styled.span`
  position: relative;
  display: inline-block;
  overflow: hidden;

  &::before {
    content: attr(data-char);
    display: inline-block;
    color: var(--color-bg-light);
    white-space: pre;
    transform: translateY(0);
    transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
    transition-delay: calc(var(--i) * 40ms);
  }

  &::after {
    content: attr(data-char);
    position: absolute;
    inset: 0;
    color: var(--color-accent);
    white-space: pre;
    transform: translateY(100%);
    transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
    transition-delay: calc(var(--i) * 40ms);
  }

  ${HoverLetters}:hover &::before { transform: translateY(-100%); }
  ${HoverLetters}:hover &::after { transform: translateY(0); }
`;

export const Copy = styled.div`
  font-size: 14px;
  color: var(--color-text-grey);
  ${mq.laptop} { justify-self: end; }
`;
