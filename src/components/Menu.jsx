import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const activeClass = ({ isActive }) => (isActive ? "active" : undefined);

  const linkStyle = {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "blue",
    marginRight: "10px",
  };

  return (
    <Navbar
      className="d-flex px-5"
      variant="light"
      style={{ background: "#FFD700" }}
    >
      <Navbar.Brand>
        <img width="50" src="/src/assets/icons/icon.svg" alt="" />
      </Navbar.Brand>
      <div>
        <NavLink style={linkStyle} to="/">
          Home
        </NavLink>
        <NavLink style={linkStyle} to="/pokemons">
          Pokemones
        </NavLink>
      </div>
    </Navbar>
  );
};

export default Menu;
