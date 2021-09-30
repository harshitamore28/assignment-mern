import {
  Container,
  Nav,
  Navbar
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <>
      <Navbar bg="primary" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">Food Discovery</Link>
          </Navbar.Brand>
          <Nav>
            <Nav.Link>
              <Link to="/discovery">Discover Food Joints</Link>
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                localStorage.removeItem("userInfo");
                alert("Logged out successfully");
                history.push("/");
              }}
            >
              Logout
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;