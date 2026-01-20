import Image from "next/image";
import Link from "next/link";
import { projects } from "../lib/data";

export default function ProjectsPage() {
  return (
    <section className="px-8 py-24 mt-12">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            My{" "}
            <span className="text-lime-400 drop-shadow-[0_0_15px_rgba(163,230,53,0.8)]">
              Projects
            </span>
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl">
            A collection of projects I’ve worked on, ranging from web
            development, UI/UX design, to creative digital works.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-3xl overflow-hidden
              border border-lime-400/20
              bg-gradient-to-b from-lime-400/10 to-black
              hover:shadow-[0_0_40px_rgba(163,230,53,0.35)]
              transition-all duration-300"
            >
              {/* IMAGE */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col gap-4">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="text-sm text-white/70 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* ACTIONS */}
                <div className="mt-auto flex gap-4 pt-4">
                  <Link
                    href={project.demo}
                    target="_blank"
                    className="flex-1 text-center px-4 py-2 rounded-full text-sm
                    bg-lime-400 text-black font-medium
                    hover:bg-lime-300 transition"
                  >
                    Live Demo
                  </Link>

                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      className="flex-1 text-center px-4 py-2 rounded-full text-sm
                      border border-white/20 text-white
                      hover:border-lime-400 hover:text-lime-400 transition"
                    >
                      GitHub
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
