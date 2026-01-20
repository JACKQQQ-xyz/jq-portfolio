import Image from "next/image";
import Profile from "../../public/Images/Profile.png";
import { GoDotFill } from "react-icons/go";
import { FaSquareInstagram } from "react-icons/fa6";

export default function ProfileCard() {
  return (
    <div className="flex justify-center bg-black">
      <div
        className="relative w-[360px] h-[560px]  overflow-hidden
        shadow-md rounded-4xl shadow-lime-400"
      >
        {/* OVERLAY LIME */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-lime-400/40 via-lime-400/20 to-lime-400/40
          backdrop-blur-x shadow-xl border border-white/10 shadow-lime-400 rounded-4xl"
        />

        {/* FOTO FULL */}
        <Image
          src={Profile}
          alt="Profile Photo"
          fill
          priority
          className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
        />
        {/* HEADER */}
        <div className="absolute top-8 left-0 right-0 z-10 text-center">
          <h1 className="text-2xl font-bold text-white ">M. Dzaky Azzam</h1>
          <p className="text-sm text-white/80 shadow-2xl">Software Engineer</p>
        </div>

        {/* FOOTER */}
        <div
          className="absolute bottom-6 left-4 right-4 z-10
          rounded-2xl bg-lime-400/20 backdrop-blur-xl
          border border-lime-400/30 px-4 py-3
          flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            {/* Avatar kecil */}
            <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-lime-400">
              <Image src={Profile} alt="Avatar" fill className="object-cover" />
            </div>

            <div>
              <p className="text-sm font-semibold text-white">@dzaky.mdaaaa</p>
              <p className="text-xs text-lime-400 flex items-center">
                <GoDotFill className="animate-pulse" /> Online
              </p>
            </div>
          </div>

          <button
            onClick={() =>
              window.open("https://instagram.com/dzaky.mdaaaa", "_blank")
            }
            className="rounded-full bg-lime-400 px-4 py-2 text-xs 
            font-semibold text-black hover:bg-lime-300 transition flex items-center gap-1"
          >
            <FaSquareInstagram /> Instagram
          </button>
        </div>
      </div>
    </div>
  );
}
