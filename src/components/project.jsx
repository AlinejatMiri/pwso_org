import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchProjects } from "../api";

function Project() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects()
      .then((data) => setProjects(data.slice(0, 3)))
      .catch(console.error);
  }, []);

  if (projects.length === 0) return null;

  return (
    <section
      id="projects"
      className="w-full rounded-md bg-blue-100 px-4 py-12 md:py-16 lg:py-20"
    >
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <span className="inline-block px-5 py-2 bg-sky-500 text-white rounded-full text-xs md:text-sm font-semibold shadow-lg">
          What We Do
        </span>

        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">
          Our <span className="text-sky-600">Key Focus Areas</span>
        </h2>

        <p className="text-sm md:text-lg text-neutral-600 leading-relaxed">
          From education initiatives to emergency support, we operate across
          various sectors to help every child in Afghanistan grow and succeed.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link
            key={project.slug || project._id}
            to={`/project/${project.slug}`}
            className="relative h-[220px] md:h-[260px] lg:h-[280px] overflow-hidden rounded-lg group block"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 md:p-6">
              <span className="w-fit bg-white/30 backdrop-blur-md px-2 py-1 rounded text-sm mb-2">
                {project.category}
              </span>

              <h3 className="text-white text-lg md:text-xl font-semibold">
                {project.title}
              </h3>

              <p className="text-white/80 text-xs md:text-sm">
                {project.shortDesc || project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Project;
