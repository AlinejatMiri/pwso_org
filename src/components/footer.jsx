import React from "react";
import logo from "../assets/pwso-logo.png";
import { Link } from "react-router-dom";
import {
  FaSquareFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaXTwitter,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-neutral-300">
      <div className="mx-auto max-w-7xl px-5 py-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-6">
            <img src={logo} alt="PWSO logo" className="h-40 w-auto" />
            <p className="max-w-md text-sm leading-relaxed text-slate-300">
              We are committed to humanitarian service and improving lives.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-2xl text-slate-300">
              <a
                href="https://facebook.com/pwsoafg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-blue-700 transition"
              >
                <FaSquareFacebook />
              </a>
              <a
                href="https://instagram.com/pwso_afg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-blue-700 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com/company/pwso"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-blue-700 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://youtube.com/@pwso"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-blue-700 transition"
              >
                <FaYoutube />
              </a>
              <a
                href="https://twitter.com/pwso_afg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X Twitter"
                className="hover:text-blue-700 transition"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h4 className="mb-4 text-lg font-semibold text-white">
                About us
              </h4>
              <ul className="space-y-3 text-sm text-slate-300">
                <li>
                  <Link to="/about" className="hover:text-blue-700 transition">
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-blue-700 transition">
                    Effect
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="hover:text-blue-700 transition">
                    Team
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-blue-700 transition">
                    News & Updates
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="hover:text-blue-700 transition">
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-lg font-semibold text-white">
                Get Involved
              </h4>
              <ul className="space-y-3 text-sm text-slate-300">
                <li>
                  <Link to="/donate" className="hover:text-blue-700 transition">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link to="/donors" className="hover:text-blue-700 transition">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-blue-700 transition">
                    Volunteer
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="hover:text-blue-700 transition">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div className="sm:col-span-2">
              <h4 className="mb-4 text-lg font-semibold text-white">
                Resource
              </h4>
              <ul className="space-y-3 text-sm text-slate-300">
                <li>
                  <Link to="/contact" className="hover:text-blue-700 transition">
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="hover:text-blue-700 transition">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-blue-700 transition">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Contact us</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex gap-3 items-start">
                <span className="mt-1 shrink-0 text-xl text-cyan-400">
                  <FaLocationDot />
                </span>
                <address className="not-italic leading-relaxed">
                  Gul Sorkh Quare, 4th district, Zadran Plaza, 4th floor, AP#
                  106. Kabul, Afghanistan.
                </address>
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-xl text-cyan-400">
                  <FaPhone />
                </span>
                <span>+93 (0) 795 666 304</span>
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-xl text-cyan-400">
                  <FaEnvelope />
                </span>
                <span>info@pwso.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-700 pt-6 text-center text-sm text-slate-500 md:text-left">
          © 2026 Poor Women Support Organization (PWSO). All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
