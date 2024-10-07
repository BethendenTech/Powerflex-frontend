import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full w-full">
        <Image
          className="bg-img"
          src="/images/solar-bg.png"
          alt="powerflex logo"
          width={1500}
          height={100}
        />
      <div className="m-auto p-5">
        <a
          className="m-auto max-w-[380px] btn self-center w-full text-white flex items-center justify-center text-xl sm:text-base px-4 sm:px-5"
          href="/details"
          rel="noopener noreferrer"
        >
          Get a quote
        </a>
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 bg-gray-800 text-white text-xs rounded-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Start your journey to cleaner, more affordable energy.
        </div>
      </div>
      </div>
    </>
  );
}
