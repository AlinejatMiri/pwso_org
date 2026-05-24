import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import projectsData from "../data/projects";

function Projects() {
  const projects = projectsData;

  return (
    <section className="min-h-screen bg-slate-50 px-4 pb-16 pt-28 sm:px-6 lg:px-12">
      <Seo title="Projects" description="Explore PWSO's projects across education, health, economic empowerment, and humanitarian relief." path="/project" />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <div className="rounded-3xl bg-gradient-to-r from-sky-50 via-white to-blue-50 px-6 py-8 shadow-sm ring-1 ring-sky-100 sm:px-8 lg:px-12">
          <div className="mb-4 inline-flex items-center rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold tracking-wide text-sky-700">
            Our Work
          </div>
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Our Key Focus Areas
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            From education initiatives to emergency support, we operate across
            various sectors to help every child in Afghanistan grow and succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug || project.title}
              to={`/project/${project.slug}`}
              className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition-transform duration-300 hover:-translate-y-1 block"
            >
              <div className="relative h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  {project.category}
                </span>
              </div>
              <div className="px-6 py-6">
                <h3 className="text-lg font-bold text-slate-900">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {project.description}
                </p>
                {project.impact && (
                  <div className="mt-4 flex items-center gap-2 rounded-xl bg-sky-50 px-4 py-2">
                    <span className="text-sm font-semibold text-sky-700">Impact:</span>
                    <span className="text-sm text-sky-600">{project.impact}</span>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
