import React from "react";

function Donate() {
  return (
    <section className="min-h-screen bg-slate-50 px-4 pb-16 pt-28 sm:px-6 lg:px-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <div className="rounded-3xl bg-gradient-to-r from-sky-50 via-white to-blue-50 px-6 py-8 shadow-sm ring-1 ring-sky-100 sm:px-8 lg:px-12">
          <div className="mb-4 inline-flex items-center rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold tracking-wide text-sky-700">
            Support Our Work
          </div>
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Your donation helps us deliver critical programs across Afghanistan.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Every contribution — no matter the size — makes a real difference in
            the lives of women, children, and communities in need.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-white px-6 py-8 shadow-sm ring-1 ring-slate-200 sm:px-8 lg:px-10">
            <h3 className="text-2xl font-bold text-slate-900">Bank Transfer</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              You can make a direct bank transfer to the following account:
            </p>
            <div className="mt-6 space-y-4 rounded-2xl bg-slate-50 p-5 text-sm">
              <div className="flex justify-between border-b border-slate-200 pb-3">
                <span className="font-semibold text-slate-500">Bank</span>
                <span className="text-slate-900">Afghanistan International Bank</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-3">
                <span className="font-semibold text-slate-500">Account Name</span>
                <span className="text-slate-900">Poor Women Support Organization</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-3">
                <span className="font-semibold text-slate-500">Account Number</span>
                <span className="text-slate-900">1000 1234 5678 9012</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-3">
                <span className="font-semibold text-slate-500">IBAN</span>
                <span className="text-slate-900">AF 38 0012 3456 7890 1234</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-slate-500">Swift Code</span>
                <span className="text-slate-900">AFIBKABL</span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white px-6 py-8 shadow-sm ring-1 ring-slate-200 sm:px-8 lg:px-10">
            <h3 className="text-2xl font-bold text-slate-900">Other Ways to Give</h3>
            <div className="mt-6 space-y-6">
              <div className="rounded-2xl bg-sky-50 p-5">
                <h4 className="font-bold text-sky-700">Mobile Money</h4>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Send your donation via mobile money transfer:
                </p>
                <p className="mt-2 text-lg font-bold text-slate-900">+93 (0) 795 666 304</p>
              </div>

              <div className="rounded-2xl bg-sky-50 p-5">
                <h4 className="font-bold text-sky-700">In-Kind Donations</h4>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  We also accept in-kind contributions such as educational
                  materials, medical supplies, and food items. Contact us to
                  coordinate delivery.
                </p>
                <a
                  href="mailto:donate@pwso.org"
                  className="mt-3 inline-block text-sm font-semibold text-sky-600 hover:text-sky-800"
                >
                  donate@pwso.org
                </a>
              </div>

              <div className="rounded-2xl bg-sky-50 p-5">
                <h4 className="font-bold text-sky-700">Monthly Giving</h4>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Become a monthly donor and provide sustained support for our
                  programs. Set up a recurring donation through your bank or
                  contact us for assistance.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-slate-900 px-8 py-10 text-center shadow-sm">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Every Contribution Counts
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300">
            Your generosity powers our mission. Whether you make a one-time gift
            or become a recurring supporter, you are helping build a better
            future for Afghan women and children.
          </p>
          <a
            href="mailto:donate@pwso.org"
            className="mt-6 inline-block rounded-xl bg-sky-500 px-8 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
          >
            Questions About Donating?
          </a>
        </div>
      </div>
    </section>
  );
}

export default Donate;
