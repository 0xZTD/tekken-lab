import { Link } from "react-router-dom";
import "./header.css";
import githubIcon from "@assets/github-mark.svg";
function Header() {
  return (
    <header>
      <Link to="/tekken-lab">
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
          <Link to="/tekken-lab/practice">Practice</Link>
        </li>
        <li>
          <Link to="/tekken-lab/characters">Characters</Link>
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
