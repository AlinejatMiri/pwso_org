import { useState, useEffect } from "react";
import Seo from "../components/Seo";
import { fetchFAQs } from "../api";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

function FAQ() {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    fetchFAQs()
      .then(setFaqs)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  function toggle(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  if (loading) {
    return (
      <section className="min-h-screen bg-slate-50 flex items-center justify-center">
        <p className="text-slate-500 text-lg">Loading...</p>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-50 px-4 pb-16 pt-28 sm:px-6 lg:px-12">
      <Seo title="FAQ" description="Frequently asked questions about PWSO, donations, volunteering, and our programs." path="/faq" />
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-10">
        <div className="rounded-3xl bg-gradient-to-r from-sky-50 via-white to-blue-50 px-6 py-8 shadow-sm ring-1 ring-sky-100 sm:px-8 lg:px-12">
          <div className="mb-4 inline-flex items-center rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold tracking-wide text-sky-700">
            FAQ
          </div>
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Find answers to common questions about our work, donations, and how you can get involved.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={faq._id || index}
              className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200"
            >
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left text-base font-semibold text-slate-900 transition hover:bg-slate-50 sm:text-lg"
                aria-expanded={openIndex === index}
              >
                {faq.question}
                <span className="ml-4 shrink-0 text-sky-600">
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              <div
                className={`px-6 transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-96 pb-6 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm leading-7 text-slate-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
