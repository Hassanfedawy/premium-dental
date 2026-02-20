// app/services/dental-implants/page.jsx
import Link from "next/link";
import { CheckBadgeIcon, ClockIcon, ShieldCheckIcon, BeakerIcon, WrenchScrewdriverIcon, HeartIcon , SparklesIcon } from '@heroicons/react/24/outline';

export default function DentalImplantsPage() {
  return (
    <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Hero Section with Background Image */}
      <section className="relative rounded-3xl overflow-hidden mb-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Dental implant procedure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-blue-900/80"></div>
        </div>
        <div className="relative z-10 text-center text-white py-20 px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Dental Implants
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            At Elite Smile – Restore Your Smile, Confidence, and Quality of Life!
          </p>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto mt-4">
            If you're looking for a permanent solution to missing teeth in [Your City], you're in the right place. At Elite Smile, we specialize in advanced dental implant procedures that look, feel, and function just like natural teeth.
          </p>
        </div>
      </section>

      {/* What Are Dental Implants */}
      <section className="mb-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">What Are Dental Implants?</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Dental implants are the gold standard for replacing missing teeth. They consist of a titanium post that is surgically placed into your jawbone, acting as an artificial tooth root. Once healed, a custom-made crown is attached, creating a restoration that looks, feels, and functions just like a natural tooth.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Unlike dentures or bridges, implants preserve bone structure, prevent facial sagging, and allow you to eat, speak, and smile with complete confidence.
          </p>
        </div>
        <div className="relative h-80 rounded-xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80"
            alt="Dental implant structure"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Types of Implants Comparison */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8">Types of Dental Implants – Which One Is Right for You?</h2>
        <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">Type</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">Best For</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">Procedure Time</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">Healing Period</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Single Tooth Implant</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">One missing tooth</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">60-90 minutes</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">3-4 months</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Implant-Supported Bridge</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Multiple missing teeth in a row</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">90-120 minutes</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">4-6 months</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">All-on-4 / Full Arch</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Full upper or lower arch</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">2-3 hours</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">4-6 months</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 mt-3">During your consultation, we'll help determine which option is best for your specific needs.</p>
      </section>

      {/* Benefits Section with Icons */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Why Choose Dental Implants?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheckIcon className="h-8 w-8" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Permanent Solution</h3>
            <p className="text-gray-600 text-sm">With proper care, implants can last a lifetime – no more denture adhesives or replacements</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <HeartIcon className="h-8 w-8" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Preserve Bone Health</h3>
            <p className="text-gray-600 text-sm">Implants stimulate bone growth, preventing the bone loss that occurs with missing teeth</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckBadgeIcon className="h-8 w-8" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Natural Look & Feel</h3>
            <p className="text-gray-600 text-sm">Custom-crafted to match your natural teeth in color, shape, and function</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <WrenchScrewdriverIcon className="h-8 w-8" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Eat What You Love</h3>
            <p className="text-gray-600 text-sm">Implants restore up to 90% of your chewing power – enjoy all your favorite foods again</p>
          </div>
        </div>
      </section>

      {/* Procedure Gallery */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">The Implant Procedure: Step by Step</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative h-48 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80"
              alt="Consultation and planning"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
              <p className="text-white text-sm font-medium">1. Consultation & 3D Imaging</p>
            </div>
          </div>
          
          <div className="relative h-48 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Implant placement surgery"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
              <p className="text-white text-sm font-medium">2. Implant Placement</p>
            </div>
          </div>
          
          <div className="relative h-48 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1584017911766-451b3d0e8431?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
              alt="Healing period"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
              <p className="text-white text-sm font-medium">3. Osseointegration (Healing)</p>
            </div>
          </div>
          
          <div className="relative h-48 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80"
              alt="Final crown placement"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
              <p className="text-white text-sm font-medium">4. Crown Placement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us with Image */}
      <section className="mb-20 grid md:grid-cols-2 gap-12 items-center bg-teal-50 p-8 md:p-12 rounded-2xl">
        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Why Elite Smile for Dental Implants?</h2>
          <p className="text-gray-700 text-lg mb-4">
            Located in the heart of [Your City], Elite Smile combines cutting-edge technology with compassionate, patient-centered care. Our implant specialists have placed thousands of successful implants using the latest 3D imaging and guided surgery techniques.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <CheckBadgeIcon className="h-6 w-6 text-teal-600 flex-shrink-0" />
              <span className="text-gray-700">Board-certified implant surgeons with advanced training</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckBadgeIcon className="h-6 w-6 text-teal-600 flex-shrink-0" />
              <span className="text-gray-700">Same-day teeth options available for qualified candidates</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckBadgeIcon className="h-6 w-6 text-teal-600 flex-shrink-0" />
              <span className="text-gray-700">Premium implant brands with lifetime warranties</span>
            </li>
          </ul>
        </div>
        <div className="relative h-80 rounded-xl overflow-hidden order-2 md:order-1">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80"
            alt="Modern dental implant surgery room"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Step-by-Step Process with Icons */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8">Your Journey to a New Smile</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { step: 1, title: "Consultation", desc: "Comprehensive exam and 3D imaging to create your treatment plan", icon: CheckBadgeIcon },
            { step: 2, title: "Preparation", desc: "Any necessary pre-procedures like bone grafting or extractions", icon: BeakerIcon },
            { step: 3, title: "Implant Surgery", desc: "Precise, comfortable placement of your implant posts", icon: WrenchScrewdriverIcon },
            { step: 4, title: "Healing Period", desc: "3-6 months for the implant to fuse with your bone", icon: ClockIcon },
            { step: 5, title: "Final Restoration", desc: "Your beautiful new custom crown is attached", icon: SparklesIcon },
          ].map((item) => (
            <div key={item.step} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold mb-4">
                {item.step}
              </div>
              <item.icon className="h-6 w-6 text-teal-600 mb-2" />
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section with Image */}
      <section className="mb-20 bg-gray-900 text-white p-8 md:p-12 rounded-2xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-64 rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Happy patient with dental implants"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <svg className="h-8 w-8 text-gray-400 mb-4" fill="currentColor" viewBox="0 0 24 24">"</svg>
            <p className="text-xl italic mb-4">
              "I was so nervous about getting implants, but Dr. [Name] and the team made the process completely painless and stress-free. Now I can eat steak again and smile without hesitation. It's changed my life!"
            </p>
            <p className="font-semibold">- Michael Thompson</p>
            <p className="text-gray-400 text-sm">Actual Elite Smile Patient</p>
          </div>
        </div>
      </section>

      {/* Am I a Candidate? */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Are You a Candidate for Dental Implants?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 text-lg mb-4">You may be a good candidate if you:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
              <li>Have one or more missing teeth</li>
              <li>Have sufficient bone density (or qualify for bone grafting)</li>
              <li>Are in good overall health (non-smokers preferred)</li>
              <li>Want a permanent solution to tooth loss</li>
              <li>Are tired of uncomfortable dentures</li>
            </ul>
            <p className="mt-4 text-gray-600">Not sure if you qualify? Schedule a consultation – we'll evaluate your specific situation and discuss all available options.</p>
          </div>
          <div className="relative h-64 rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Confident smile after implants"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Cost & Insurance Info */}
      <section className="mb-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white p-8 md:p-12 rounded-2xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Investment in Your Smile</h2>
            <p className="text-lg text-gray-100 mb-4">
              Dental implants are an investment in your health, confidence, and quality of life. We offer:
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckBadgeIcon className="h-5 w-5 flex-shrink-0" />
                <span>Flexible payment plans starting at $0 down</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckBadgeIcon className="h-5 w-5 flex-shrink-0" />
                <span>Accept most major dental insurance plans</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckBadgeIcon className="h-5 w-5 flex-shrink-0" />
                <span>CareCredit and third-party financing available</span>
              </li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <p className="text-2xl font-bold mb-2">Free Consultation</p>
            <p className="mb-4">Includes 3D imaging and personalized treatment plan ($250 value)</p>
            <p className="text-sm text-gray-200">Mention this offer when booking</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative rounded-3xl overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1507525425510-56f1f2f6d4c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80"
            alt="Beautiful smile background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600/90 to-blue-600/90"></div>
        </div>
        <div className="relative z-10 text-center text-white py-16 px-6">
          <h2 className="text-3xl font-bold mb-4">Start Your Smile Journey Today!</h2>
          <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
            Experience the life-changing benefits of dental implants – delivered with care, precision, and results you'll love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+1234567890" className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              Call us at 123-456-7890
            </a>
            <a href="https://wa.me/1234567890" className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition">
              WhatsApp Us
            </a>
            <Link href="/booking" className="bg-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition">
              Book Free Consultation
            </Link>
          </div>
          <p className="text-gray-200 mt-6">Your new smile is just one visit away!</p>
        </div>
      </section>
    </main>
  );
}