import { useState } from "react";
import { FaLocationDot, FaPhone, FaRegEnvelope } from "react-icons/fa6";
import { submitContact } from "../api";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState({ type: "", text: "" });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ type: "loading", text: "Sending..." });

    try {
      await submitContact(formData);
      setStatus({ type: "success", text: "Message sent successfully!" });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      setStatus({ type: "error", text: err.message || "Failed to send message." });
    }
  }

  return (
    <section className="w-full min-h-[100dvh] bg-slate-50">
      <div className="mt-20 flex flex-col flex-wrap min-h-[30vh] w-full items-start justify-center gap-5 px-6 py-10">
        <h3 className="text-2xl bg-blue-500/90 rounded-md font-bold text-white sm:text-3xl lg:text-5xl px-4 py-2">
          Contact us
        </h3>
        <p className="text-slate-700 text-xl">
          Send us a message, ask questions, or learn more about our work.
          We&apos;d love to hear from you.
        </p>
      </div>

      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:px-10 lg:py-16">
        <div className="rounded-3xl grid-cols-1 bg-white px-6 py-8 shadow-lg sm:px-8 w-full md:w-full">
          <div className="mb-8">
            <h4 className="font-bold text-xl">Contact Information</h4>
            <p className="mt-4 text-base leading-7 text-slate-700">
              Have questions or want to learn more about our work? We&apos;re here to
              help.
            </p>
          </div>
          <ul className="flex list-none flex-col gap-8">
            <li className="flex justify-center items-center gap-4 h-fit">
              <span className="px-2 py-2 bg-sky-200 rounded-md">
                <FaLocationDot className="text-2xl text-sky-600" />
              </span>
              <address className="not-italic flex flex-col gap-1">
                <span>Address</span>
                <span className="text-base text-slate-700 text-[14px]">
                  Gul Sorkh Quare, 4th district, Zadran Plaza, 4th floor, AP#
                  106. Kabul, Afghanistan.
                </span>
              </address>
            </li>
            <li className="flex items-center gap-4">
              <span className="px-2 py-2 bg-sky-200 rounded-md">
                <FaPhone className="text-2xl text-sky-600" />
              </span>
              <span className="flex flex-col">
                <span>Phone</span>
                <a
                  href="tel:+93795666304"
                  className="text-slate-700 text-[14px]"
                >
                  +93 (0) 795 666 304
                </a>
              </span>
            </li>

            <li className="flex items-center gap-4">
              <span className="px-2 py-2 bg-sky-200 rounded-md">
                <FaRegEnvelope className="text-2xl text-sky-600" />
              </span>
              <span className="flex flex-col">
                <span>Email</span>
                <a
                  href="mailto:info@pwso.org"
                  className="text-slate-700 text-[14px]"
                >
                  info@pwso.org
                </a>
              </span>
            </li>
          </ul>
        </div>

        <div className="grid col-span-2 justify-items-center rounded-3xl bg-white px-6 py-8 shadow-lg sm:px-8">
          <div className="mb-8 w-full col-span-full">
            <h4 className="font-bold text-xl">Send us a message</h4>
          </div>

          <form className="grid w-full grid-cols-1 gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
            <div className="w-full">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Name <sup className="text-red-500 text-[16px]">*</sup>
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Email <sup className="text-red-500 text-[16px]">*</sup>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Phone <span className="text-sm text-gray-500">(optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Subject{' '}
                <span className="text-sm text-gray-500">(optional)</span>
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              />
            </div>

            <div className="w-full md:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Message <sup className="text-red-500 text-[16px]">*</sup>
              </label>
              <textarea
                id="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 resize-none"
                required
              ></textarea>
            </div>
            <div className="w-full md:col-span-2">
              <input
                type="submit"
                id="submit"
                value={status.type === "loading" ? "Sending..." : "Send Message"}
                className="w-full cursor-pointer rounded-xl bg-sky-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-700 sm:w-auto sm:min-w-[180px] disabled:opacity-50"
                disabled={status.type === "loading"}
              />
              {status.type === "success" && (
                <span className="ml-4 text-sm font-semibold text-green-600">{status.text}</span>
              )}
              {status.type === "error" && (
                <span className="ml-4 text-sm font-semibold text-red-600">{status.text}</span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
