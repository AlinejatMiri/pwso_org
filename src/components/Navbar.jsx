import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import pwsoLogo from "./../assets/pwso-logo.png";
import { FaBars, FaXmark } from "react-icons/fa6";

const navLinks = [
  { to: "/about", label: "Our History" },
  { to: "/project", label: "Projects" },
  { to: "/blog", label: "News" },
  { to: "/gallery", label: "Gallery" },
  { to: "/faq", label: "FAQ" },
  { to: "/donors", label: "Donors" },
  { to: "/contact", label: "Contact us" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="w-full h-20 bg-slate-100 shadow-lg fixed top-0 left-0 z-50">
      <div className="w-full max-w-[2000px] mx-auto flex items-center justify-between h-full px-5 md:px-10 lg:px-20">
        <Link to="/" className="h-full w-32 flex items-center">
          <img
            src={pwsoLogo}
            alt="pwso logo"
            className="h-full object-contain"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-5 xl:gap-7 font-semibold text-sm xl:text-base">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                className={`px-2 py-2 rounded-md transition ${
                  location.pathname === link.to
                    ? "bg-sky-100 text-sky-700"
                    : "hover:bg-blue-100"
                }`}
                to={link.to}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/donate"
          className="hidden lg:block px-5 py-3 text-white bg-gradient-to-b from-blue-500 to-blue-600 rounded-md hover:opacity-90 transition text-sm"
        >
          Donate Now
        </Link>

        <button
          className="lg:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      <div
        className={`absolute lg:hidden top-20 left-0 w-full bg-white flex flex-col items-center gap-4 font-semibold text-lg shadow-lg z-50
        transition-all duration-300 ease-in-out
        ${
          isMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            onClick={() => setIsMenuOpen(false)}
            className={`w-full text-center py-4 transition ${
              location.pathname === link.to
                ? "bg-sky-100 text-sky-700"
                : "hover:bg-sky-400 hover:text-white"
            }`}
          >
            {link.label}
          </Link>
        ))}
        <Link
          to="/donate"
          onClick={() => setIsMenuOpen(false)}
          className="mb-4 px-6 py-3 text-white bg-gradient-to-b from-blue-500 to-blue-600 rounded-md"
        >
          Donate Now
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
