import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-gray-700 lg:hidden"
        >
          ☰
        </button>

        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-xs font-bold text-white">
            DS
          </div>

          <h1 className="text-xl font-bold text-gray-900">
            Dev{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Stack
            </span>
          </h1>
        </div>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 text-sm font-medium text-gray-600 lg:flex">
          <li>
            <a href="#home" className="text-pink-500">
              Home
            </a>
          </li>

          <li>
            <a href="#technologies" className="hover:text-pink-500">
              Technologies
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-pink-500">
              Projects
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-pink-500">
              About
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-pink-500">
              Contact
            </a>
          </li>
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button className="text-sm font-medium text-gray-700">
            Sign In
          </button>

          <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-5 py-2 text-sm font-semibold text-white">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-4 text-sm font-medium text-gray-700">
            <li>
              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="text-pink-500"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#technologies"
                onClick={() => setMenuOpen(false)}
              >
                Technologies
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;