import { Link } from "react-router-dom";
import "./practice.css";

function Practice() {
  return (
    <main className="main-practice">
      <Intro />
      <Menu />
    </main>
  );
}

function Intro() {
  return (
    <article>
      <h2 className="practice__heading">Welcome to Practice module!</h2>
      <h3>Please select an option</h3>
    </article>
  );
}

function Menu() {
  return (
    <section>
      <ul className="practice__menu">
        <Link to="/tekken-lab/practice/routines">
          Pre-built practice routines
        </Link>
        <Link to="/tekken-lab/practice/library">Library</Link>
        <Link>Custom routine builder</Link>
      </ul>
    </section>
  );
}
export default Practice;
