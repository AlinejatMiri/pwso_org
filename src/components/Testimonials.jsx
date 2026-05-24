import { FaStar, FaQuoteLeft } from "react-icons/fa6";

const testimonials = [
  {
    name: "Fatima A.",
    role: "Beneficiary, Balkh Province",
    quote: "PWSO's education program gave my daughter the chance to attend school for the first time. Today, she can read and write — something I never thought possible for her.",
  },
  {
    name: "Ahmad R.",
    role: "Community Leader, Kabul",
    quote: "The health clinic PWSO established in our district has saved lives. Women in our community now have access to maternal care that was previously unavailable.",
  },
  {
    name: "Zahra H.",
    role: "Graduate, Empowerment Program",
    quote: "After completing PWSO's vocational training, I started my own tailoring business. I can now support my family and send my children to school.",
  },
  {
    name: "Mohammad N.",
    role: "Partner Organization",
    quote: "PWSO's professionalism and dedication to community-led development make them one of the most effective NGOs working in Afghanistan today.",
  },
];

function Testimonials() {
  return (
    <section className="w-full bg-white px-4 py-16 md:px-10 lg:px-20 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl text-center">
        <span className="inline-block rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold tracking-wide text-sky-700 md:text-sm">
          Testimonials
        </span>
        <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
          Voices from the community
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
          Hear from the people whose lives have been touched by your support.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="relative flex flex-col rounded-3xl bg-slate-50 px-6 py-8 text-left shadow-sm ring-1 ring-slate-200"
          >
            <FaQuoteLeft className="mb-4 text-2xl text-sky-200" />
            <p className="text-sm leading-7 text-slate-600">&ldquo;{t.quote}&rdquo;</p>
            <div className="mt-4 flex items-center gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-xs" />
              ))}
            </div>
            <div className="mt-4 border-t border-slate-200 pt-4">
              <p className="text-sm font-bold text-slate-900">{t.name}</p>
              <p className="text-xs text-slate-500">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
