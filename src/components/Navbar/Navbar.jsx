import { useState } from 'react';
import logo from '../../assets/icons/logo.png';
import { Nav, Container, Logo, LogoImg, Links, LinkA, Hamburger, HamburgerLine } from './Navbar.styles';

const Navbar = () => {
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
              Home
            </LinkA>
          </li>
          <li>
            <LinkA href='#about' onClick={() => setOpen(false)}>
              About
            </LinkA>
          </li>
          <li>
            <LinkA href='#portfolio' onClick={() => setOpen(false)}>
              Projects
            </LinkA>
          </li>
          <li>
            <LinkA href='#contact' onClick={() => setOpen(false)}>
              Contact
            </LinkA>
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
