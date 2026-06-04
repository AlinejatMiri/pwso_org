import { useState, useEffect } from "react";
import Seo from "../components/Seo";
import { fetchTeamMembers } from "../api";

function Team() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeamMembers()
      .then(setMembers)
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
      <Seo title="Our Team" description="Meet the dedicated team behind Poor Women Support Organization (PWSO)." path="/team" />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <div className="rounded-3xl bg-gradient-to-r from-sky-50 via-white to-blue-50 px-6 py-8 shadow-sm ring-1 ring-sky-100 sm:px-8 lg:px-12">
          <div className="mb-4 inline-flex items-center rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold tracking-wide text-sky-700">
            Our Team
          </div>
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Meet the dedicated individuals behind our mission.
          </h2>
        </div>

        <p className="max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
          Our team is made up of passionate professionals committed to creating
          positive change in the lives of women and communities across Afghanistan.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <article
              key={member._id || member.name}
              className="flex flex-col items-center rounded-3xl bg-white px-6 py-8 text-center shadow-sm ring-1 ring-slate-200 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 h-28 w-28 overflow-hidden rounded-full ring-4 ring-sky-100">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
              {member.role && (
                <span className="mt-1 inline-block rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-600">
                  {member.role}
                </span>
              )}
              {member.bio && (
                <p className="mt-4 text-sm leading-7 text-slate-600">{member.bio}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
