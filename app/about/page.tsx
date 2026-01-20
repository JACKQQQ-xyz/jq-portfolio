interface InfoRowProps {
  title: string;
  value: string | number;
}

function InfoRow({ title, value }: InfoRowProps) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-white/60 text-sm">{title}</span>
      <span className="text-white font-medium text-right">{value}</span>
    </div>
  );
}

export default function AboutPage() {
  return (
    <section className="relative mt-32 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* LEFT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            About{" "}
            <span className="text-lime-400 drop-shadow-[0_0_15px_rgba(163,230,53,0.8)]">
              Me
            </span>
          </h1>

          <p className="mt-6 text-white/70 leading-relaxed">
            I’m{" "}
            <span className="text-lime-400 font-semibold">M. Dzaky Azzam</span>,
            a{" "}
            <span className="text-white font-medium">
              Software Engineering (RPL)
            </span>{" "}
            student at{" "}
            <span className="text-white font-medium">SMK Telkom Malang</span>,
            currently in grade 11 with a focus on{" "}
            <span className="text-lime-400 font-medium">
              Fullstack Development
            </span>
            .
          </p>

          <p className="mt-4 text-white/70 leading-relaxed">
            In addition to software development, I am actively involved in{" "}
            <span className="text-white">
              photography, videography, and broadcasting
            </span>
            , and I am experienced in using various multimedia tools to support
            creative and technical projects.
          </p>

          <p className="mt-4 text-white/70 leading-relaxed">
            Through my role as a{" "}
            <span className="text-white">
              student council (OSIS) board member
            </span>
            , I have developed strong skills in{" "}
            <span className="text-white">
              teamwork, leadership, and communication
            </span>
            , enabling me to collaborate effectively in diverse environments.
          </p>

          {/* HIGHLIGHTS */}
          <div className="mt-8 flex flex-wrap gap-4">
            {[
              "Fullstack Student",
              "UI-Focused Development",
              "Creative Media",
              "Team Leadership",
            ].map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full text-sm
                border border-lime-400/30 text-lime-400
                backdrop-blur-md"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT CARD */}
        <div
          className="relative rounded-3xl p-8
          bg-gradient-to-b from-lime-400/15 to-black
          border border-lime-400/30
          shadow-[0_0_60px_rgba(163,230,53,0.25)]"
        >
          <div className="space-y-6">
            <InfoRow title="Education" value="SMK Telkom Malang (RPL)" />
            <InfoRow title="Grade" value="11th Grade" />
            <InfoRow title="Focus" value="Fullstack Development" />
            <InfoRow
              title="Tech Stack"
              value="Next.js, React, Tailwind, Node.js"
            />
            <InfoRow
              title="Interests"
              value="Web Development, UI Design, Creative Media"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
