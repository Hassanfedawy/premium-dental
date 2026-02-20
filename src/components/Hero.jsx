export default function Hero() {
  return (
    <section className="pt-32 pb-24 bg-black text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6">

        <div>
          <h1 className="text-6xl font-light leading-tight mb-6">
            Precision. Luxury. Confidence.
          </h1>

          <p className="text-gray-300 mb-8 text-lg">
            Experience elite cosmetic and restorative dentistry 
            designed for those who value excellence.
          </p>

          <a
            href="#booking"
            className="bg-white text-black px-8 py-4 rounded-full uppercase tracking-wider"
          >
            Book Private Consultation
          </a>
        </div>

        <img
          src="https://images.pexels.com/photos/4269694/pexels-photo-4269694.jpeg"
          alt="Luxury Dentist"
          className="rounded-3xl shadow-2xl"
        />
      </div>
    </section>
  );
}
