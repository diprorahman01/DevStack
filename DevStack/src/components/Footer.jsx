const Footer = () => {

  return (

    <footer className="footer">

      <div className="footer-container">


        {/* TOP FOOTER */}

        <div className="footer-top">


          {/* BRAND SECTION */}

          <div className="footer-brand">

            <div className="footer-brand-title">

              <div className="footer-logo">
                DS
              </div>

              <h2>
                Dev <span>Stack</span>
              </h2>

            </div>


            <p>
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>


            <div className="footer-socials">

              <a href="#">
                GitHub
              </a>

              <a href="#">
                Twitter
              </a>

              <a href="#">
                LinkedIn
              </a>

            </div>

          </div>



          {/* PRODUCT LINKS */}

          <div className="footer-links">

            <h3>
              PRODUCT
            </h3>

            <a href="#home">
              Home
            </a>

            <a href="#technologies">
              Technologies
            </a>

            <a href="#projects">
              Projects
            </a>

          </div>



          {/* COMPANY LINKS */}

          <div className="footer-links">

            <h3>
              COMPANY
            </h3>

            <a href="#about">
              About
            </a>

            <a href="#contact">
              Contact
            </a>

            <a href="#">
              Careers
            </a>

          </div>



          {/* LEGAL LINKS */}

          <div className="footer-links">

            <h3>
              LEGAL
            </h3>

            <a href="#">
              Privacy Policy
            </a>

            <a href="#">
              Terms of Service
            </a>

          </div>

        </div>



        {/* BOTTOM FOOTER */}

        <div className="footer-bottom">

          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>


          <div className="footer-bottom-links">

            <a href="#">
              Privacy
            </a>

            <a href="#">
              Terms
            </a>

          </div>

        </div>


      </div>

    </footer>

  );
};


export default Footer;