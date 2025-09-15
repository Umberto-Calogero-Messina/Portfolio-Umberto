import React from 'react';
import './Footer.scss';

// Link con animazione delle lettere in hover
const HoverLettersLink = ({ href, text }) => (
  <a className='hover-letters' href={href} aria-label={text}>
    {text.split('').map((ch, i) => (
      <span
        key={i}
        style={{ '--i': i }}
        data-char={ch === ' ' ? '\u00A0' : ch} // spazio → non-breaking space
      ></span>
    ))}
  </a>
);

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='footer' id='footer'>
      <div className='footer-inner'>
        <div className='footer-brand'>Umberto Portfolio</div>

        <ul className='footer-links'>
          <li className='footer-link'>
            <HoverLettersLink href='#' text='Terms & Conditions' />
          </li>
          <li className='footer-link'>
            <HoverLettersLink href='#' text='Privacy Policy' />
          </li>
          <li className='footer-link'>
            <HoverLettersLink href='#' text='Site Map' />
          </li>
        </ul>

        <div className='footer-copy'>© {year} Umberto. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
