import { Link } from "react-router-dom";
import "./header.css";
import githubIcon from "@assets/github-mark.svg";
function Header() {
  return (
    <header>
      <Link to="/tekkenLab">
        <h1>TekkenLab</h1>
      </Link>
      <Nav />
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/tekkenLab/practice">Practice</Link>
        </li>
        <li>
          <Link to="/tekkenLab/characters">Characters</Link>
        </li>
        <li className="github">
          <a href="https://github.com/zestx5" target="_blank">
            <img src={githubIcon} alt="github icon" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
