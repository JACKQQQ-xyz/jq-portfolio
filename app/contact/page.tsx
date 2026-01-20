"use client";

import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `
      mailto:dzakyazzam86@gmail.com
      ?subject=Portfolio Contact from ${encodeURIComponent(name)}
      &body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      )}
    `;

    window.location.href = mailtoLink;
  };

  return (
    <section className="px-6 mt-32 flex items-center justify-center">
      <div
        className="w-full max-w-2xl rounded-3xl
        bg-black/60 backdrop-blur-xl
        border border-lime-400/30
        shadow-[0_0_60px_rgba(163,230,53,0.25)]
        p-8"
      >
        {/* TITLE */}
        <h1 className="text-4xl font-bold text-white text-center">
          Contact{" "}
          <span className="text-lime-400 drop-shadow-[0_0_15px_rgba(163,230,53,0.8)]">
            Me
          </span>
        </h1>

        <p className="mt-4 text-center text-white/70">
          Feel free to reach out for collaboration, projects, or just a friendly
          chat.
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl bg-black/40 border border-white/10
            px-4 py-3 text-white placeholder-white/40
            focus:outline-none focus:border-lime-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl bg-black/40 border border-white/10
            px-4 py-3 text-white placeholder-white/40
            focus:outline-none focus:border-lime-400"
          />

          <textarea
            rows={5}
            placeholder="Your Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-xl bg-black/40 border border-white/10
            px-4 py-3 text-white placeholder-white/40
            focus:outline-none focus:border-lime-400"
          />

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2
            rounded-full bg-lime-400 py-3 font-bold text-black
            hover:bg-lime-300 transition"
          >
            Send Message <FaPaperPlane />
          </button>
        </form>
      </div>
    </section>
  );
}
