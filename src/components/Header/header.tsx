//import { Container StyledLink } from './header.style'
import { Link } from "react-router-dom";

export const Header = (): JSX.Element => {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/"} className="nav-link">
              <h2>Cadastro</h2>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/leads"} className="nav-link">
              <h2>Leads</h2>
            </Link>
          </li>
        </div>
      </nav>
    </div>
  );
}