import "./header.css";
import githubIcon from "@assets/github-mark.svg";
function Header() {
  return (
    <header>
      <h1>TekkenLab</h1>
      <Nav />
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#">Practice</a>
        </li>
        <li>
          <a href="#">Characters</a>
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
