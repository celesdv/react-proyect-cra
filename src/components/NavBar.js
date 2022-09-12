import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Nav>
      <Nav.Item>
        <Link to="/" className="listNav">
          <h5>Home</h5>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/users" className="listNav">
          <h5>Users</h5>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/characters" className="listNav">
          <h5>Characters</h5>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/contactUs" className="listNav">
          <h5>Contact Us</h5>
        </Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavBar;
