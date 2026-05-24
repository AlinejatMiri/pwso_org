import React from "react";
import { Link } from "react-router-dom";
import Och from "../assets/donors/och.png";
import UnWomen from "../assets/donors/UN-women.png";
import Undp from "../assets/donors/undp.png";
import { FaAngleRight } from "react-icons/fa6";

const images = [Och, UnWomen, Undp];
function Donors() {
  return (
    <section
      id="donors"
      className="w-full px-6 py-10 md:px-10 grid gap-10 justify-items-center"
    >
      <div className="w-full grid gap-6 justify-items-center">
        <span className="inline-block px-4 py-2 bg-sky-500 text-white rounded-full text-xs md:text-sm font-semibold shadow-sm">
          Our Partners
        </span>

        <div className="w-full max-w-3xl space-y-4 text-center">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            <span className="text-sky-500">Recognized and trusted</span> by
            leading organizations.
          </h3>
          <p className="text-slate-500 text-sm md:text-base leading-6">
            We proudly collaborate with global leaders, UN agencies, and
            international institutions dedicated to driving impactful and
            lasting change across Afghanistan.
          </p>
        </div>

        <Link
          to="/donors"
          className="text-sky-500 text-base font-medium hover:text-sky-700 transition flex items-center gap-2"
        >
          View All Partners <FaAngleRight />
        </Link>
      </div>

      <div className="w-[70vw] grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 items-center">
        {images.map((img, index) => {
          return (
            <div key={index} className="shadow-md flex justify-center rounded-md transition-transform duration-150 hover:shadow-xl hover:translate-y-[-8px] ">
              <img
                src={img}
                alt="organization logo"
                className="h-20 w-auto object-contain"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Donors;
