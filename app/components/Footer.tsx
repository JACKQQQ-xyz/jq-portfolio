"use client";

import Image from "next/image";
import logoImage from "../../public/Images/logo_jq_panjang.png";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative mt-24">
      {/* GLOW */}
      <div className="absolute inset-x-0 -top-20 h-40 bg-lime-400/20 blur-3xl pointer-events-none" />

      <div
        className="relative mx-auto max-w-6xl
        rounded-t-3xl border border-lime-400/30
        bg-black/60 backdrop-blur-xl
        shadow-[0_0_50px_rgba(163,230,53,0.25)]
        px-6 pt-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* LEFT */}
          <div>
            <Image src={logoImage} alt="Logo" className="h-8 w-auto" />
            <p className="mt-4 text-white/70 text-sm leading-relaxed">
              Personal portfolio of{" "}
              <span className="text-lime-400 font-semibold">
                M. Dzaky Azzam
              </span>
              . Student of SMK Telkom Malang, focused on Fullstack Development,
              UI, and Multimedia.
            </p>
          </div>

          {/* NAV */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase()}`}
                    className="hover:text-lime-400 transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/dzaky.mdaaaa"
                target="_blank"
                className="p-3 rounded-full
                border border-lime-400/30
                text-lime-400 hover:bg-lime-400 hover:text-black
                transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://id.linkedin.com/in/mochammad-dzaky-azzam-55011431b"
                target="_blank"
                className="p-3 rounded-full
                border border-lime-400/30
                text-lime-400 hover:bg-lime-400 hover:text-black
                transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/JACKQQQ-xyz"
                target="_blank"
                className="p-3 rounded-full
                border border-lime-400/30
                text-lime-400 hover:bg-lime-400 hover:text-black
                transition"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center pb-4">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} by.jackqqq. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
