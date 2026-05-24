import React, { useEffect, useState } from "react";
import img1 from "../assets/heroimages/img1.jpeg";
import img2 from "../assets/heroimages/img2.jpeg";
import img3 from "../assets/heroimages/img3.jpeg";
import { Link } from "react-router-dom";

const images = [img1, img2, img3];

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  function handleLearnMore(e) {
    e.preventDefault();
    const el = document.getElementById("about");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="w-full h-[110dvh] md:h-[85vh] lg:h-screen relative">
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="w-full h-full bg-linear-to-l from-gray-500/20 to-gray-500/20 flex flex-col justify-center px-4 md:px-10 lg:px-20 py-10 gap-4">
            <span className="w-fit px-4 py-2 bg-sky-500 text-white rounded-full text-xs md:text-sm font-semibold shadow-lg">
              Bring Changes Today
            </span>

            <h3 className="font-bold flex flex-col leading-tight text-white">
              <span className="text-2xl md:text-4xl lg:text-5xl">
                Everyone deserves a chance for a
              </span>
              <span className="italic text-3xl md:text-5xl lg:text-6xl">
                better future
              </span>
            </h3>

            <p className="text-white text-sm md:text-lg lg:text-xl max-w-xl [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">
              Be part of making a difference by supporting education,
              healthcare, and emergency aid. Together, we can bring meaningful,
              lasting change to children and families throughout Afghanistan.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <Link
                to="/donate"
                className="px-5 py-3 text-blue-100 rounded-md bg-gradient-to-b from-blue-500 to-blue-600 hover:text-white transition duration-200 text-center"
              >
                Donate Now
              </Link>

              <button
                onClick={handleLearnMore}
                className="px-5 py-3 text-black bg-blue-50 rounded-md text-center cursor-pointer"
              >
                Learn More
              </button>
            </div>

            <div className="border-t border-white/30 mt-6 text-white font-bold pt-4 flex flex-wrap gap-6">
              <div className="flex flex-col items-center">
                <span className="text-2xl md:text-4xl font-bold">3M+</span>
                <span className="text-sm md:text-lg">People Helped</span>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-2xl md:text-4xl font-bold">4</span>
                <span className="text-sm md:text-lg">Provinces</span>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-2xl md:text-4xl font-bold">15+</span>
                <span className="text-sm md:text-lg">Years Service</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Hero;
