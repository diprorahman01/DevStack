import { useState } from "react";

import hamburger from "./assets/hamburger.png";
import hero from "./assets/banner-stack.png";

import Technologies from "./components/Technologies";
import Footer from "./components/Footer";


function App() {

  const [menuOpen, setMenuOpen] = useState(false);


  return (

    <>

      {/* NAVBAR */}

      <nav className="navBar">

        <div className="navbar-container">


          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >

            <img
              src={hamburger}
              alt="Menu"
            />

          </button>


          <div className="brand">

            <div className="brand-logo">
              DS
            </div>


            <h2>
              Dev <span>Stack</span>
            </h2>

          </div>


          <ul className="nav-links">

            <li>
              <a
                className="active"
                href="#home"
              >
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



      {/* HERO SECTION */}

      <section
        className="hero-section"
        id="home"
      >

        <div className="hero-container">


          <div className="hero-content">

            <h1>

              Build Your Ideal

              <br />

              <span className="hero-gradient">
                Development Stack
              </span>

            </h1>


            <p>

              Explore frontend, backend, database, and tooling options,

              <br className="desktop-break" />

              compare them side by side, and put together the stack that fits your

              <br className="desktop-break" />

              next project.

            </p>


            <div className="hero-buttons">

              <a
                className="explore-btn"
                href="#technologies"
              >
                Explore Technologies
              </a>


              <a
                className="learn-btn"
                href="#about"
              >
                Learn More
              </a>

            </div>

          </div>


          <div className="hero-image">

            <img
              src={hero}
              alt="Development Stack"
            />

          </div>

        </div>

      </section>



      {/* TECHNOLOGIES SECTION */}

      <Technologies />



      {/* FOOTER */}

      <Footer />


    </>

  );
}


export default App;