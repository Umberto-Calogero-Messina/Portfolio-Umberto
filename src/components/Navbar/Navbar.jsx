import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/icons/logo.png';
import { Nav, Container, Logo, LogoImg, Links, LinkA, Hamburger, HamburgerLine } from './Navbar.styles';
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const Navbar = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = () => setOpen(false);

  // Helper to decide whether to use Link or <a>
  const getLink = (path, text, isPageLink = false) => {
    if (isPageLink || location.pathname !== '/') {
      return (
        <LinkA as={Link} to={path} onClick={handleLinkClick}>
          {text}
        </LinkA>
      );
    }
    return (
      <LinkA href={path} onClick={handleLinkClick}>
        {text}
      </LinkA>
    );
  };

  return (
    <Nav>
      <Container>
        <Logo>
          <Link to='/'>
            <LogoImg src={logo} alt='Logo' />
          </Link>
        </Logo>
        <Links open={open}>
          <li>{getLink('/#home', t('navbar.home'))}</li>
          <li>{getLink('/#about', t('navbar.about'))}</li>
          <li>{getLink('/#project', t('navbar.projects'))}</li>
          <li>{getLink('/#contact', t('navbar.contact'))}</li>
          <li>
            <LanguageSelector />
          </li>
        </Links>
        <Hamburger onClick={() => setOpen(!open)} aria-label='Toggle menu'>
          <HamburgerLine open={open} />
        </Hamburger>
      </Container>
    </Nav>
  );
};

export default Navbar;
