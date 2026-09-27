import { NavLink } from "react-router-dom";

function NavBar() {
  const definirClasseDoLink = ({ isActive }) => {
    return isActive ? "meu-link link-ativo" : "meu-link";
  };

  return (
    <nav className="navbar-container">
      <ul>
        <li>
          <NavLink to="/" className={definirClasseDoLink}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/busca" className={definirClasseDoLink}>
            Busca
          </NavLink>
        </li>
        <li>
          <NavLink to="/favoritos" className={definirClasseDoLink}>
            Favoritos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
