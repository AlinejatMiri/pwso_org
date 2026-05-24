import { useState } from "react";
import Seo from "../components/Seo";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const faqs = [
  { question: "What is PWSO and what does it do?", answer: "The Poor Women Support Organization (PWSO) is a non-profit, non-governmental organization established in 2017 and registered with Afghanistan's Ministry of Economy. We work across education, health, economic empowerment, agriculture, and research to support women, children, and vulnerable communities in Afghanistan." },
  { question: "How can I donate to PWSO?", answer: "You can donate via bank transfer, mobile money, or in-kind contributions. Visit our Donate page for full details including bank account information." },
  { question: "How are donations used?", answer: "Donations directly fund our programs in education, health, economic empowerment, and emergency relief. We maintain transparent financial reporting." },
  { question: "How can I volunteer with PWSO?", answer: "We welcome volunteers with relevant skills and experience. Please reach out through our Contact page or email info@pwso.org." },
  { question: "Where does PWSO operate?", answer: "PWSO operates across multiple provinces in Afghanistan, focusing on underserved communities with the greatest need." },
  { question: "Can I sponsor a specific program or project?", answer: "Yes. We welcome targeted support for specific programs. Contact partnerships@pwso.org to discuss." },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(index) {
    setOpenIndex(openIndex === index ? null : index);
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
              key={faq.id || index}
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
