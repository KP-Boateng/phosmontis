import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-purple-700 text-white py-24 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
          We Innovate. We Shine. We Transform.
        </h1>
        <p className="text-xl md:text-2xl font-light mb-4">
          Christian-Based Technology Excellence
        </p>
        <p className="text-base md:text-lg mb-8 leading-relaxed opacity-95 max-w-3xl mx-auto">
          At PhosMontis Technologies, we believe in being the light on the
          mountain. We create innovative solutions that illuminate the path
          forward, combining cutting-edge technology with timeless values.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-yellow-400 text-blue-900 font-bold px-8 py-4 rounded-lg hover:bg-yellow-300 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
