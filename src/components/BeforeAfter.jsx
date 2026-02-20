export default function BeforeAfter() {
  return (
    <section id="results" className="py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-4xl font-semibold mb-12">
          Smile Transformations
        </h3>

        <div className="grid md:grid-cols-2 gap-10">
          <img
            src="https://images.pexels.com/photos/6528908/pexels-photo-6528908.jpeg"
            alt="Before After 1"
            className="rounded-3xl shadow-lg"
          />
          <img
            src="https://images.pexels.com/photos/6528909/pexels-photo-6528909.jpeg"
            alt="Before After 2"
            className="rounded-3xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
