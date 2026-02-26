import Image from "next/image";

export default function Gallery() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-3xl sm:text-4xl font-light text-center mb-16">
          Inside Our Clinic
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="relative w-full h-87.5">
            <Image
              src="/Images/beforeAfter1.jpg"
              alt="Before and After Treatment 1"
              fill
              className="rounded-3xl shadow-lg object-cover"
              loading="lazy"
            />
          </div>

          <div className="relative w-full h-87.5">
            <Image
              src="/Images/Hero.jpg"
              alt="Clinic Interior"
              fill
              className="rounded-3xl shadow-lg object-cover"
              loading="lazy"
            />
          </div>

          <div className="relative w-full h-87.5">
            <Image
              src="/Images/beforeAfter2.jpg"
              alt="Before and After Treatment 2"
              fill
              className="rounded-3xl shadow-lg object-cover"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
}