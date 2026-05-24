import { useParams, Link } from "react-router-dom";
import Seo from "../components/Seo";
import { getProjectBySlug } from "../data/projects";
import { FaArrowLeft } from "react-icons/fa6";

function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-slate-50 px-4 pt-20">
        <div className="text-center max-w-lg">
          <h1 className="text-4xl font-bold text-slate-900">Project Not Found</h1>
          <p className="mt-4 text-base text-slate-600">The project you are looking for does not exist.</p>
          <Link to="/project" className="mt-6 inline-block rounded-xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-700">
            ← Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  const stats = project.stats || [];

  return (
    <section className="min-h-screen bg-slate-50 px-4 pb-16 pt-28 sm:px-6 lg:px-12">
      <Seo title={project.title} description={project.description} path={`/project/${project.slug}`} />
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <Link
          to="/project"
          className="flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-sky-800"
        >
          <FaArrowLeft /> Back to Projects
        </Link>

        <div className="overflow-hidden rounded-3xl shadow-sm ring-1 ring-slate-200">
          <div className="relative h-64 sm:h-80 lg:h-96">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-semibold text-white backdrop-blur-sm">
                {project.category}
              </span>
              <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                {project.title}
              </h1>
            </div>
          </div>

          <div className="bg-white px-6 py-8 sm:px-8 lg:px-10">
            {stats.length > 0 && (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl bg-sky-50 px-4 py-5 text-center"
                  >
                    <p className="text-2xl font-bold text-sky-700">{stat.value}</p>
                    <p className="mt-1 text-xs font-medium text-slate-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-8">
              <h2 className="text-2xl font-bold text-slate-900">About This Project</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">{project.fullDescription || project.description}</p>
            </div>

            {project.objectives && project.objectives.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-slate-900">Key Objectives</h2>
                <ul className="mt-4 space-y-3">
                  {project.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-600">
                        {i + 1}
                      </span>
                      <span className="text-base leading-7 text-slate-600">{typeof obj === "string" ? obj : obj.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.impact && (
              <div className="mt-8 flex items-center gap-2 rounded-xl bg-sky-50 px-5 py-4">
                <span className="text-sm font-semibold text-sky-700">Impact:</span>
                <span className="text-sm text-sky-600">{project.impact}</span>
              </div>
            )}
          </div>
        </div>

        <div className="rounded-3xl bg-slate-900 px-8 py-10 text-center shadow-sm">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Support This Program
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300">
            Your donation helps us continue and expand this vital work. Every contribution makes a difference.
          </p>
          <Link
            to="/donate"
            className="mt-6 inline-block rounded-xl bg-sky-500 px-8 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetail;
