import React from 'react';
import { FooterEl, Inner, Brand, Links, LinkItem, HoverLetters, LetterSpan, Copy } from './Footer.styles';

const HoverLettersLink = ({ href, text }) => (
  <HoverLetters href={href} aria-label={text}>
    {text.split('').map((ch, i) => (
      <LetterSpan key={i} style={{ '--i': i }} data-char={ch === ' ' ? '\u00A0' : ch} />
    ))}
  </HoverLetters>
);

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <FooterEl id='footer'>
      <Inner>
        <Brand>Umberto Portfolio</Brand>
        <Links>
          <LinkItem>
            <HoverLettersLink href='#' text='Terms & Conditions' />
          </LinkItem>
          <LinkItem>
            <HoverLettersLink href='#' text='Privacy Policy' />
          </LinkItem>
          <LinkItem>
            <HoverLettersLink href='#' text='Site Map' />
          </LinkItem>
        </Links>
        <Copy>© {year} Umberto. All rights reserved.</Copy>
      </Inner>
    </FooterEl>
  );
};

export default Footer;
