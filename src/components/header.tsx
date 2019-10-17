import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logoLight from '../images/q-light.svg';
import logoDark from '../images/q.svg';

import { ScreenWidthContext } from '../providers/screen-width';
import { ScrollPositionContext } from '../providers/scroll-position';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {

  const screenWidth = useContext(ScreenWidthContext);
  const scrollPosition = useContext(ScrollPositionContext);
  const [ mobileMenu, setMobileMenu ] = useState(false);

  const maxPosition = 20;

  const logo = scrollPosition > maxPosition ? logoDark : logoLight;
  const mobile = screenWidth < 768;

  return (
    <Navbar
      id="main-nav"
      bg={scrollPosition > maxPosition ? 'light' : undefined}
      variant={scrollPosition > maxPosition ? undefined : 'dark'}
      expand="md"
      className={`${mobileMenu && mobile ? 'opened' : 'closed'} ${mobile ? 'mobile' : 'desktop'} ${className}`}
    >
      <Container>
        <div id="nav-wrapper">
          <Navbar.Brand href="/">
            <img src={logo} alt="QC Career School" style={{ display: 'block', height: 20 }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => { setMobileMenu(m => !m); }} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto mr-3">
              <NavDropdown title="Programs" id="basic-nav-dropdown">
                <NavDropdown.Item href="/programs/">Overview</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/programs/#makeup-artistry">Makeup Artistry</NavDropdown.Item>
                <NavDropdown.Item href="/programs/#interior-decorating">Interior Decorating</NavDropdown.Item>
                <NavDropdown.Item href="/programs/#event-planning">Event Planning</NavDropdown.Item>
                <NavDropdown.Item href="/programs/#dog-grooming">Dog Grooming</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/admissions/">Admissions</Nav.Link>
              <Nav.Link href="/contact/">Contact</Nav.Link>
            </Nav>
            <a href="https://enroll.qcmakeupacademy.com">
              {mobile
                ? <Button variant="link" className="p-0">Student Login</Button>
                : <Button size="sm">Student Login</Button>
              }
            </a>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};
