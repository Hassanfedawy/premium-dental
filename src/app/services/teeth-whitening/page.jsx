// app/services/teeth-whitening/page.jsx
import Link from "next/link";
import Image from "next/image";
import { CheckBadgeIcon, ClockIcon, SparklesIcon, BeakerIcon } from '@heroicons/react/24/outline';

export default function TeethWhiteningPage() {
  return (
    <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Hero Section with Background Image */}
      <section className="relative rounded-3xl overflow-hidden mb-16">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Beautiful smile"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-blue-900/90 to-purple-900/80"></div>
        </div>
        <div className="relative z-10 text-center text-white py-20 px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Laser Teeth Whitening
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            At Elite Smile – Your Brightest Smile Starts Here!
          </p>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto mt-4">
            If you're looking for fast, effective, and dramatic teeth whitening results in Cairo, you're in the right place. At Elite Smile, we specialize in advanced LASER teeth whitening that lifts deep stains and restores brilliance to your smile—all in a single visit.
          </p>
        </div>
      </section>


      {/* What Is Laser Whitening with Image */}
      <section className="mb-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">What Is Laser Teeth Whitening?</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Laser teeth whitening is a state-of-the-art cosmetic dental treatment that uses a special whitening gel activated by a dental laser. This technique accelerates the whitening process, delivering noticeably whiter teeth in just one session. It's ideal for removing stubborn stains caused by coffee, tea, wine, tobacco, and natural aging.
          </p>
        </div>
        <div className="relative h-80 rounded-xl overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Laser teeth whitening procedure"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Procedure Gallery */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">The Laser Whitening Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative h-48 rounded-lg overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80"
              alt="Dental consultation"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-trom-black/70 to-transparent p-3">
              <p className="text-white text-sm font-medium">1. Consultation</p>
            </div>
          </div>
          
          <div className="relative h-48 rounded-lg overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Applying protective barriers"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-3">
              <p className="text-white text-sm font-medium">2. Gum Protection</p>
            </div>
          </div>
          
          <div className="relative h-48 rounded-lg overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
              alt="Laser activation"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-3">
              <p className="text-white text-sm font-medium">3. Laser Activation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8">Laser Whitening vs. LED Whitening</h2>
        <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">Feature</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">Laser Teeth Whitening</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">LED Teeth Whitening</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Light Source</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Focused dental laser</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Broad-spectrum LED light</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Whitening Speed</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Faster (30–40 mins)</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Slower (60-90 mins)</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Precision</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">High – targets specific areas</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Moderate – covers wider areas</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Effectiveness</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">More powerful – deeper stain removal</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Effective, but less intense</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Sensitivity Control</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">More controlled, less post-treatment sensitivity</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">May cause more temporary sensitivity</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 mt-3">In short: Laser whitening offers superior results in less time, with better comfort and precision.</p>
      </section>

      {/* Why Choose Us with Image */}
      <section className="mb-20 grid md:grid-cols-2 gap-12 items-center bg-blue-50 p-8 md:p-12 rounded-2xl">
        <div className="relative h-80 rounded-xl overflow-hidden order-2 md:order-1">
          <Image 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80"
            alt="Modern dental clinic"
            fill
            className="object-cover"
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Why Choose Elite Smile?</h2>
          <p className="text-gray-700 text-lg">
            Located in the heart of [Your City], Elite Smile is known for combining the latest technology with personalized, patient-centered care. Our laser teeth whitening procedure is handled by experienced dental professionals who ensure comfort and stunning results every time.
          </p>
        </div>
      </section>

      {/* Step-by-Step Process with Icons */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8">Your Whitening Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { step: 1, title: "Consultation", desc: "We examine your teeth and gums to ensure you're a perfect candidate.", icon: CheckBadgeIcon },
            { step: 2, title: "Preparation", desc: "Protective barriers are applied to shield your gums.", icon: BeakerIcon },
            { step: 3, title: "Whitening Gel", desc: "A professional-grade gel is applied to your teeth.", icon: SparklesIcon },
            { step: 4, title: "Laser Activation", desc: "The laser enhances the whitening effect.", icon: ClockIcon },
            { step: 5, title: "Reveal Your Smile", desc: "You'll leave with a visibly brighter smile!", icon: SparklesIcon },
          ].map((item) => (
            <div key={item.step} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-4">
                {item.step}
              </div>
              <item.icon className="h-6 w-6 text-blue-600 mb-2" />
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
            <Image 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Happy patient"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <svg className="h-8 w-8 text-gray-400 mb-4" fill="currentColor" viewBox="0 0 24 24">"</svg>
            <p className="text-xl italic mb-4">
              "I was amazed at how bright my smile became after just one session! The team at Elite Smile made me feel comfortable the entire time. I haven't stopped smiling since!"
            </p>
            <p className="font-semibold">- Sarah Johnson</p>
            <p className="text-gray-400 text-sm">Actual Elite Smile Patient</p>
          </div>
        </div>
      </section>

      {/* Is It Right for You */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Is Laser Teeth Whitening Right for You?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 text-lg mb-4">This treatment is ideal if you:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
              <li>Have a special occasion coming up</li>
              <li>Want to boost your confidence</li>
              <li>Are looking for a quick and effective solution</li>
              <li>Want to maintain a professional, polished look</li>
            </ul>
          </div>
          <div className="relative h-64 rounded-xl overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Confident smile"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Call to Action with Background */}
      <section className="relative rounded-3xl overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1507525425510-56f1f2f6d4c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
            alt="Beautiful smile background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-blue-600/90 to-purple-600/90"></div>
        </div>
        <div className="relative z-10 text-center text-white py-16 px-6">
          <h2 className="text-3xl font-bold mb-4">Book Your Appointment Today!</h2>
          <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
            Experience the most advanced teeth whitening—delivered with care, precision, and results you'll love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+1234567890" className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              Call us at 123-456-7890
            </a>
            <a href="https://wa.me/1234567890" className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition">
              WhatsApp Us
            </a>
            <Link href="/booking" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
              Book Online
            </Link>
          </div>
          <p className="text-gray-200 mt-6">Your radiant smile is just one visit away!</p>
        </div>
      </section>
    </main>
  );
}