import { useState } from "react";
import hamburger from "./assets/hamburger.png";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navBar">
        <div className="navbar-container">

          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <img src={hamburger} alt="Menu" />
          </button>

          <div className="brand">
            <div className="brand-logo">DS</div>

            <h2>
              Dev <span>Stack</span>
            </h2>
          </div>

          <ul className="nav-links">
            <li>
              <a className="active" href="#home">
                Home
              </a>
            </li>

            <li>
              <a href="#technologies">
                Technologies
              </a>
            </li>

            <li>
              <a href="#projects">
                Projects
              </a>
            </li>

            <li>
              <a href="#about">
                About
              </a>
            </li>

            <li>
              <a href="#contact">
                Contact
              </a>
            </li>
          </ul>

          <div className="auth-buttons">
            <button className="sign-in">
              Sign In
            </button>

            <button className="sign-up">
              Sign Up
            </button>
          </div>

        </div>

        {menuOpen && (
          <div className="mobile-menu">

            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>

            <a
              href="#technologies"
              onClick={() => setMenuOpen(false)}
            >
              Technologies
            </a>

            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>

          </div>
        )}
      </nav>
    </>
  );
}

export default App;