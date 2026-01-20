"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import logoImage from "../../public/Images/logo_jq_panjang.png";
import { FaLinkedin } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const navLink = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300`}
    >
      <div
        className={`w-full max-w-6xl rounded-full px-4 py-2
        border transition-all duration-300
        ${
          scrolled
            ? "bg-lime-400/20 backdrop-blur-xl border-lime-400/40 shadow-[0_0_40px_rgba(163,230,53,0.35)]"
            : "bg-black/30 backdrop-blur-md border-white/15"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <Image src={logoImage} alt="Logo" className="h-8 w-auto" priority />

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-6 font-medium text-white">
            {navLink.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-lime-400 transition"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-2">
            {/* LINKEDIN */}
            <button
              onClick={() =>
                window.open(
                  "https://id.linkedin.com/in/mochammad-dzaky-azzam-55011431b",
                  "_blank",
                )
              }
              className="hidden md:flex items-center 
              bg-lime-400 text-black h-10 px-5 rounded-full
              font-bold hover:bg-lime-300 transition"
            >
              Linked
              <FaLinkedin />
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-white text-2xl"
            >
              {open ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div
            className="md:hidden mt-4 rounded-2xl
            bg-black/60 backdrop-blur-xl
            border border-lime-400/30 p-4 space-y-4"
          >
            {navLink.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-white hover:text-lime-400 transition"
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={() =>
                window.open(
                  "https://id.linkedin.com/in/mochammad-dzaky-azzam-55011431b",
                  "_blank",
                )
              }
              className="w-full flex items-center justify-center gap-2
              bg-lime-400 text-black py-2 rounded-full font-bold"
            >
              Linked <FaLinkedin />
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
