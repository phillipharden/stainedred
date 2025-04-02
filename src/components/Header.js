import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import Logo from "../assets/images/logo.png";
import "../css/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Navbar expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <NavDropdown
                title={
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                }
                id="home-dropdown">
                <NavDropdown.Item as={Link} to="/bio">
                  Bio
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/music">
                  Music
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/photos">
                  Photos
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/videos">
                  Videos
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/online-store">
                Online Store
              </Nav.Link>

              {/* <NavDropdown
                title={
                  <Link to="/presskit" className="nav-link">
                    Press Kit
                  </Link>
                }
                id="presskit-dropdown">
                <NavDropdown.Item as={Link} to="/sampletrack">
                  Sample Track
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/samplevideo">
                  Sample Video
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/inquiries">
                  Inquiries
                </NavDropdown.Item>
              </NavDropdown> */}

              <Nav.Link as={Link} to="/ministry-support">
                Ministry Support
              </Nav.Link>

              <NavDropdown
                title={
                  <Link to="/calendar" className="nav-link">
                    Calendar
                  </Link>
                }
                id="calendar-dropdown">
                <NavDropdown.Item as={Link} to="/past-shows">
                  Past Shows
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/prayer-requests">
                Prayer Requests
              </Nav.Link>

              <Nav.Link as={Link} to="/community">
                Community
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="p-5 d-flex justify-content-center align-items-center">
        <img src={Logo} alt="Stained Red Logo" className="logo" />
      </Container>
    </header>
  );
};

export default Header;
