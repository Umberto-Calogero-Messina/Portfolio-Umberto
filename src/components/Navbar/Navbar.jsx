import { useState } from 'react';
import logo from '../../assets/icons/logo.png';
import { Nav, Container, Logo, LogoImg, Links, LinkA, Hamburger, HamburgerLine } from './Navbar.styles';
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const Navbar = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <Nav>
      <Container>
        <Logo>
          <LogoImg src={logo} alt='Logo' />
        </Logo>
        <Links open={open}>
          <li>
            <LinkA href='#home' onClick={() => setOpen(false)}>
              {t('navbar.home')}
            </LinkA>
          </li>
          <li>
            <LinkA href='#about' onClick={() => setOpen(false)}>
              {t('navbar.about')}
            </LinkA>
          </li>
          <li>
            <LinkA href='#portfolio' onClick={() => setOpen(false)}>
              {t('navbar.projects')}
            </LinkA>
          </li>
          <li>
            <LinkA href='#contact' onClick={() => setOpen(false)}>
              {t('navbar.contact')}
            </LinkA>
          </li>
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
