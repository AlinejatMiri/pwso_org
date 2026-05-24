import avatar from "../assets/images/team/avatar.png";
import Seo from "../components/Seo";

const members = [
  {
    name: "Ehsan Mohammadzai",
    role: "Founder & Executive Director",
    image: avatar,
    bio: "Ehsan founded PWSO in 2017 with a vision to empower Afghan women and communities. With over a decade of experience in humanitarian program management, he leads the organization's strategic direction and partnerships."
  },
  {
    name: "Zarmina Haidari",
    role: "Program Manager",
    image: avatar,
    bio: "Zarmina oversees the planning and execution of PWSO's programs across education, health, and economic empowerment."
  },
  {
    name: "Ahmad Naveed",
    role: "Finance & Admin Officer",
    image: avatar,
    bio: "Ahmad manages the financial operations and administrative systems of PWSO, ensuring transparency and accountability."
  },
  {
    name: "Fatima Ahmadi",
    role: "MEAL Officer",
    image: avatar,
    bio: "Fatima leads Monitoring, Evaluation, Accountability, and Learning initiatives across all sectors."
  },
  {
    name: "Mohammad Sharif",
    role: "Health Program Coordinator",
    image: avatar,
    bio: "Mohammad coordinates PWSO's health initiatives, focusing on reproductive health and community health awareness."
  },
  {
    name: "Lailuma Noori",
    role: "Women Empowerment Officer",
    image: avatar,
    bio: "Lailuma works directly with women in communities, facilitating skills training and economic opportunity programs."
  }
];

function Team() {
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
              key={member.name + member.role}
              className="flex flex-col items-center rounded-3xl bg-white px-6 py-8 text-center shadow-sm ring-1 ring-slate-200 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 h-28 w-28 overflow-hidden rounded-full ring-4 ring-sky-100">
                <img
                  src={member.image || avatar}
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
