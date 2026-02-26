import Image from "next/image";

export default function BeforeAfter() {
  return (
    <section id="results" className="py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-4xl font-semibold mb-12">
          Smile Transformations
        </h3>

        <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
        <div className="grid md:grid-cols-3 gap-10">
       <Image
            src="/Images/beforeAfter1.jpg"
            alt="Before After 1"
            fill
            loading="lazy"
            className="rounded-3xl shadow-lg"
          />
       <Image
            src="/Images/Hero.jpg"
            alt="Before After 1"
            fill
            loading="lazy"
            className="rounded-3xl shadow-lg"
          />
       <Image
            src="/Images/beforeAfter2.jpg"
            alt="Before After 1"
            fill
            loading="lazy"
            className="rounded-3xl shadow-lg"
          />
        </div>
        </div>
      </div>
    </section>
  );
}
