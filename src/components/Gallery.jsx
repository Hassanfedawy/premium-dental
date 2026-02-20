export default function Gallery() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-light text-center mb-16">
          Inside Our Clinic
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <img
            src="https://images.pexels.com/photos/3845752/pexels-photo-3845752.jpeg"
            className="rounded-3xl shadow-lg"
          />
          <img
            src="https://images.pexels.com/photos/6528908/pexels-photo-6528908.jpeg"
            className="rounded-3xl shadow-lg"
          />
          <img
            src="https://images.pexels.com/photos/6627565/pexels-photo-6627565.jpeg"
            className="rounded-3xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
