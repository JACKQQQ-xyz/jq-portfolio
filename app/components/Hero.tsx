"use client";

import { FaGithub, FaInstagram } from "react-icons/fa";
import ProfileCard from "./ProfileCard";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="relative bg-black flex items-center my-5 mt-22">
      <div className="max-w-7xl mx-auto px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-5xl font-bold text-white leading-tight">
              Hi, I’m{" "}
              <span className="text-lime-400 [0_0_15px_rgba(157, 255, 0, 0.8)]">
                Dzaky
              </span>
              <br />
              <TypeAnimation
                sequence={[
                  "Photography",
                  2000,
                  "Videography",
                  2000,
                  "Broadcasting",
                  2000,
                  "Event Documentation",
                  2000,
                  "Fullstack Developer",
                  2000,
                  "Drone Pilot",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>

            <p className="mt-6 text-white/70 max-w-xl">
              Fullstack-focused Software Engineering student with a strong
              interest in creative media and modern web development.
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-3 mt-6 hover:cursor-pointer">
              {["Next.js", "React", "Tailwind CSS", "Node.js", "Fullstack"].map(
                (item) => (
                  <span
                    key={item}
                    className="px-4 py-1 rounded-full
                border border-lime-400/40
                text-lime-400 text-sm hover:bg-lime-400/20"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>

            {/* BUTTON */}
            <div className="flex items-center justify-start hover:cursor-pointer gap-4 mt-8">
              <button className="py-3 bg-lime-400 text-black h-12 rounded-full px-4 font-medium transition flex gap-0.5 items-center hover:bg-lime-300 ">
                View Projects
              </button>

              <button
                onClick={() =>
                  window.open("https://github.com/jackqqq-xyz", "_blank")
                }
                className="text-white hover:text-lime-400 transition flex items-center gap-1"
              >
                Github <FaGithub size={24} />
              </button>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex justify-end">
            <ProfileCard />
          </div>
        </div>
      </div>
    </section>
  );
}
