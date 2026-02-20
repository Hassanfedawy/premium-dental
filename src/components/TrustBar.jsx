export default function Hero() {
  return (
    <section className="pt-32 pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16 px-6">
        
        <div>
          <h2 className="text-5xl font-bold leading-tight mb-6">
            Redefining Modern Dentistry
          </h2>

          <p className="text-lg text-gray-600 mb-8">
            Experience world-class cosmetic and restorative dentistry 
            designed to give you confidence, comfort, and a flawless smile.
          </p>

          <div className="flex gap-4">
            <a
              href="#booking"
              className="bg-black text-white px-8 py-4 rounded-full text-sm uppercase tracking-wider"
            >
              Schedule Consultation
            </a>

            <a
              href="tel:+201000000000"
              className="border border-black px-8 py-4 rounded-full text-sm uppercase tracking-wider"
            >
              Call Now
            </a>
          </div>
        </div>

        <img
          src="https://images.pexels.com/photos/3845752/pexels-photo-3845752.jpeg"
          alt="Luxury Dental Clinic"
          className="rounded-3xl shadow-2xl"
        />
      </div>
    </section>
  );
}
