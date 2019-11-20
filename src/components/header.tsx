import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logoLight from '../images/q-light.svg';
import logoDark from '../images/q.svg';

import { Link } from 'gatsby';
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
          <Navbar.Brand>
            <Link to="/"><img src={logo} alt="QC Career School" style={{ display: 'block', height: 40 }} /></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => { setMobileMenu(m => !m); }} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto mr-3">
              <NavDropdown title="Programs" id="basic-nav-dropdown">
                <Link to="/programs/" className="dropdown-item">Overview</Link>
                <NavDropdown.Divider />
                <Link to="/programs/#makeup-artistry" className="dropdown-item">Makeup Artistry</Link>
                <Link to="/programs/#interior-decorating" className="dropdown-item">Interior Decorating</Link>
                <Link to="/programs/#event-planning" className="dropdown-item">Event Planning</Link>
                <Link to="/programs/#dog-grooming" className="dropdown-item">Dog Grooming</Link>
              </NavDropdown>
              <Link to="/admissions/" data-rb-event-key="/admissions/" className="nav-link">Admissions</Link>
              <Link to="/contact/" data-rb-event-key="/contact/" className="nav-link">Contact</Link>
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
