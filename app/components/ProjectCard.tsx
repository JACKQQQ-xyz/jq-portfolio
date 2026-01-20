import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";


export default function ProjectsPage() {
  return (
    <section className="min-h-screen bg-black px-8 py-24">
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
            A collection of projects I have worked on, including web
            development, UI/UX design, creative media, and digital art.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {listProyek.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-3xl overflow-hidden
              bg-gradient-to-b from-lime-400/15 to-black
              border border-lime-400/30
              hover:shadow-[0_0_60px_rgba(163,230,53,0.35)]
              transition"
            >
              {/* IMAGE */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.gambar}
                  alt={project.nama}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">
                  {project.nama}
                </h3>

                <p className="mt-3 text-sm text-white/70 line-clamp-3">
                  {project.desk}
                </p>

                {/* TOOLS */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full
                      border border-lime-400/30 text-lime-400"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* ACTION */}
                <div className="mt-6 flex items-center gap-4">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      className="flex items-center gap-2 text-sm
                      bg-lime-400 text-black px-4 py-2 rounded-full
                      hover:bg-lime-300 transition"
                    >
                      <FaExternalLinkAlt size={12} />
                      Demo
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-2 text-sm
                      border border-white/20 text-white px-4 py-2 rounded-full
                      hover:border-lime-400 hover:text-lime-400 transition"
                    >
                      <FaGithub />
                      Code
                    </a>
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
