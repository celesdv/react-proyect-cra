import NavBar from "./NavBar";
import Navbar from "react-bootstrap/Navbar";
import ImageBrand from "./ImageBrand";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <ImageBrand />
      <Navbar.Brand>
        <h3>Skill Factory</h3>
      </Navbar.Brand>
      <NavBar />
    </Navbar>
  );
};

export default Header;
