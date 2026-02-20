const services = [
  {
    title: "Dental Implants",
    desc: "Permanent, natural-looking replacement for missing teeth.",
  },
  {
    title: "Porcelain Veneers",
    desc: "Achieve a flawless Hollywood smile.",
  },
  {
    title: "Professional Whitening",
    desc: "Noticeably brighter smile in one visit.",
  },
  {
    title: "Orthodontics",
    desc: "Clear aligners and modern braces solutions.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-4xl font-semibold mb-16">
          Premium Dental Services
        </h3>

        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-10 border rounded-3xl hover:shadow-xl transition"
            >
              <h4 className="text-2xl font-semibold mb-4">
                {service.title}
              </h4>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
