import { useState, useEffect } from "react";
import { fetchPartners } from "../api";

function Donors() {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPartners()
      .then(setPartners)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="min-h-screen bg-slate-50 flex items-center justify-center">
        <p className="text-slate-500 text-lg">Loading...</p>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-50 px-4 pb-16 pt-28 sm:px-6 lg:px-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <div className="rounded-3xl bg-gradient-to-r from-sky-50 via-white to-blue-50 px-6 py-8 shadow-sm ring-1 ring-sky-100 sm:px-8 lg:px-12">
          <div className="mb-4 inline-flex items-center rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold tracking-wide text-sky-700">
            Our Partners
          </div>
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Recognized and trusted by leading organizations.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            We proudly collaborate with global leaders, UN agencies, and
            international institutions dedicated to driving impactful and
            lasting change across Afghanistan.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <article
              key={partner._id || partner.name}
              className="flex flex-col items-center rounded-3xl bg-white px-8 py-10 text-center shadow-sm ring-1 ring-slate-200 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-6 flex h-24 w-44 items-center justify-center rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100">
                <img
                  src={partner.logoUrl}
                  alt={`${partner.name} logo`}
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{partner.name}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {partner.description}
              </p>
            </article>
          ))}
        </div>

        <div className="rounded-3xl bg-slate-900 px-8 py-10 text-center shadow-sm">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Become a Partner
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300">
            We are always looking to build new partnerships with organizations
            that share our vision for an educated, healthy, and empowered
            Afghanistan.
          </p>
          <a
            href="mailto:partnerships@pwso.org"
            className="mt-6 inline-block rounded-xl bg-sky-500 px-8 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
          >
            Contact Us About Partnerships
          </a>
        </div>
      </div>
    </section>
  );
}

export default Donors;
