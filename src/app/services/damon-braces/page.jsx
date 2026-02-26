// app/services/damon-braces/page.jsx
import Link from "next/link";
import Image from "next/image";
import { CheckBadgeIcon, ClockIcon, SparklesIcon, BeakerIcon, HeartIcon, BoltIcon } from '@heroicons/react/24/outline';

export default function DamonBracesPage() {
  return (
    <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Hero Section with Background Image */}
      <section className="relative rounded-3xl overflow-hidden mb-16">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/Images/protectiveLayer.jpg"
            alt="Beautiful smile with braces"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-pink-800/80"></div>
        </div>
        <div className="relative z-10 text-center text-white py-20 px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Damon Braces
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            At Elite Smile – Faster, More Comfortable Orthodontic Treatment!
          </p>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto mt-4">
            If you're looking for a revolutionary approach to straightening teeth in Cairo, you're in the right place. At Elite Smile, we specialize in Damon System braces that deliver beautiful results in less time with greater comfort.
          </p>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Real Transformations with Damon Braces</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="relative h-64">
              <Image 
                src="/Images/laser.jpg"
                alt="Before and after Damon braces"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-gray-600 text-sm">Case #1: 14 months treatment time</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="relative h-64">
              <Image 
                src="/Images/Clinic.jpg"
                alt="Happy patient after Damon braces"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-gray-600 text-sm">Case #2: 16 months - no extractions needed</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="relative h-64">
              <Image 
                src="/Images/testimonel.jpg"
                alt="Perfect smile after treatment"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-gray-600 text-sm">Case #3: Adult patient, 18 months result</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Are Damon Braces */}
      <section className="mb-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">What Are Damon Braces?</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            The Damon System is a revolutionary orthodontic treatment that uses innovative self-ligating brackets. Unlike traditional braces that use elastic ties to hold the wire in place, Damon braces have a built-in sliding mechanism that allows teeth to move more freely, quickly, and comfortably.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            This passive slide technology reduces friction and pressure, allowing your teeth to respond naturally to gentle forces. The result? Faster treatment times, fewer adjustments, and a more comfortable experience overall.
          </p>
        </div>
        <div className="relative h-80 rounded-xl overflow-hidden">
          <Image 
            src="/Images/laser.jpg"
            alt="Damon braces close-up"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Comparison Table: Damon vs Traditional Braces */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8">Damon System vs. Traditional Braces</h2>
        <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">Feature</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">Damon Braces</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">Traditional Braces</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Treatment Time</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">6-12 months faster on average</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">18-36 months typical</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Adjustment Appointments</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Every 10-12 weeks</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Every 4-6 weeks</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Comfort Level</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Gentle, less pressure</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">More discomfort after adjustments</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Friction</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Low friction - teeth move freely</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">High friction from elastic ties</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Extractions Needed</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Often fewer or none</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">May require more extractions</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Oral Hygiene</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Easier to clean</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">More difficult with elastic ties</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 mt-3">The Damon System offers significant advantages for most patients, from teens to adults.</p>
      </section>

      {/* Benefits Section with Icons */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Why Choose Damon Braces?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <ClockIcon className="h-8 w-8" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Faster Results</h3>
            <p className="text-gray-600 text-sm">Treatment time reduced by up to 6-12 months compared to traditional braces</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <HeartIcon className="h-8 w-8" />
            </div>
            <h3 className="font-semibold text-lg mb-2">More Comfort</h3>
            <p className="text-gray-600 text-sm">Gentle, low-friction forces mean less pain and fewer emergency visits</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <BoltIcon className="h-8 w-8" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Fewer Appointments</h3>
            <p className="text-gray-600 text-sm">Adjustments every 10-12 weeks instead of monthly – less time in our chair</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <SparklesIcon className="h-8 w-8" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Better Aesthetics</h3>
            <p className="text-gray-600 text-sm">Sleek, smaller brackets with optional clear brackets for a discreet look</p>
          </div>
        </div>
      </section>

      {/* Damon System Showcase */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">The Damon System Difference</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="relative h-56">
              <Image 
                src="/Images/Clinic.jpg"
                alt="Damon brackets close-up"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg mb-2">Self-Ligating Technology</h3>
              <p className="text-gray-600 text-sm">No elastic ties means less friction and faster tooth movement</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="relative h-56">
              <Image 
                src="/Images/protectiveLayer.jpg"
                alt="Damon wire system"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg mb-2">High-Tech Wires</h3>
              <p className="text-gray-600 text-sm">Copper nickel-titanium wires provide gentle, continuous forces</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="relative h-56">
              <Image 
                src="/Images/laser.jpg"
                alt="Treatment progress"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg mb-2">Predictable Results</h3>
              <p className="text-gray-600 text-sm">Proven system with millions of successfully treated patients worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Procedure Timeline */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8">Your Damon Braces Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative h-48 rounded-lg overflow-hidden">
            <Image 
              src="/Images/Clinic.jpg"
              alt="Initial consultation"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
              <p className="text-white text-sm font-medium">1. Consultation & 3D Scan</p>
            </div>
          </div>
          
          <div className="relative h-48 rounded-lg overflow-hidden">
            <Image 
              src="/Images/laser.jpg"
              alt="Bonding appointment"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
              <p className="text-white text-sm font-medium">2. Bonding Day (1-2 hours)</p>
            </div>
          </div>
          
          <div className="relative h-48 rounded-lg overflow-hidden">
            <Image 
              src="/Images/protectiveLayer.jpg"
              alt="Progress check"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
              <p className="text-white text-sm font-medium">3. Adjustment Visits (Every 10-12 weeks)</p>
            </div>
          </div>
          
          <div className="relative h-48 rounded-lg overflow-hidden">
            <Image 
              src="/Images/teeth-whitening.jpg"
              alt="Final result"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
              <p className="text-white text-sm font-medium">4. Debond & Retainers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us with Image */}
      <section className="mb-20 grid md:grid-cols-2 gap-12 items-center bg-purple-50 p-8 md:p-12 rounded-2xl">
        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Why Elite Smile for Damon Braces?</h2>
          <p className="text-gray-700 text-lg mb-4">
            As a certified Damon System provider, Elite Smile brings this advanced technology to [Your City] with expertise and personalized care. Our orthodontic team has completed advanced training in the Damon Method and stays current with the latest techniques.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <CheckBadgeIcon className="h-6 w-6 text-purple-600 flex-shrink-0" />
              <span className="text-gray-700">Certified Damon System providers with hundreds of successful cases</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckBadgeIcon className="h-6 w-6 text-purple-600 flex-shrink-0" />
              <span className="text-gray-700">Digital 3D scanning - no messy impressions</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckBadgeIcon className="h-6 w-6 text-purple-600 flex-shrink-0" />
              <span className="text-gray-700">Adult and teen orthodontic specialists</span>
            </li>
          </ul>
        </div>
        <div className="relative h-80 rounded-xl overflow-hidden order-2 md:order-1">
          <Image 
            src="/Images/Clinic.jpg"
            alt="Elite Smile orthodontic team"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Who Is It For */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Is Damon Braces Right for You?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 text-lg mb-4">Damon braces are ideal for patients who want:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
              <li>Faster treatment time than traditional braces</li>
              <li>More comfortable orthodontic experience</li>
              <li>Fewer dental visits and adjustments</li>
              <li>Excellent results for complex cases</li>
              <li>Treatment without extractions (when possible)</li>
            </ul>
            <p className="mt-4 text-gray-600">Damon works for all ages – from teens to adults in their 60s and 70s!</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative h-32 rounded-lg overflow-hidden">
              <Image 
                src="/Images/testimonel.jpg"
                alt="Teen patient"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-2">
                <p className="text-white text-xs font-medium">Teens</p>
              </div>
            </div>
            <div className="relative h-32 rounded-lg overflow-hidden">
              <Image 
                src="/Images/teeth-whitening.jpg"
                alt="Adult patient"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-2">
                <p className="text-white text-xs font-medium">Adults</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="mb-20 bg-gray-900 text-white p-8 md:p-12 rounded-2xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-64 rounded-xl overflow-hidden">
            <Image 
              src="/Images/testimonel.jpg"
              alt="Happy patient after Damon braces"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <svg className="h-8 w-8 text-gray-400 mb-4" fill="currentColor" viewBox="0 0 24 24">"</svg>
            <p className="text-xl italic mb-4">
              "I was dreading getting braces as an adult, but my friend recommended Damon braces at Elite Smile. The difference was incredible – barely any pain, and my treatment was done in just 14 months! My smile has never looked better."
            </p>
            <p className="font-semibold">- Jennifer Martinez, age 34</p>
            <p className="text-gray-400 text-sm">Actual Elite Smile Patient</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-100">
            <h3 className="font-semibold text-lg mb-2">Are Damon braces painful?</h3>
            <p className="text-gray-600">Most patients report significantly less discomfort compared to traditional braces. The low-friction system applies gentler forces, so you'll feel pressure but rarely sharp pain.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100">
            <h3 className="font-semibold text-lg mb-2">How long does treatment take?</h3>
            <p className="text-gray-600">Average treatment time is 12-24 months, which is 6-12 months faster than traditional braces. Complex cases may take longer.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100">
            <h3 className="font-semibold text-lg mb-2">Can adults get Damon braces?</h3>
            <p className="text-gray-600">Absolutely! About 40% of our Damon patients are adults. The system works great for all ages.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100">
            <h3 className="font-semibold text-lg mb-2">Will I need to have teeth removed?</h3>
            <p className="text-gray-600">Often, Damon braces can create space without extractions. We'll evaluate your specific case during consultation.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative rounded-3xl overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/Images/testimonel.jpg"
            alt="Beautiful smile"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-pink-600/90"></div>
        </div>
        <div className="relative z-10 text-center text-white py-16 px-6">
          <h2 className="text-3xl font-bold mb-4">Start Your Smile Transformation Today!</h2>
          <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
            Discover the Damon difference – faster, more comfortable orthodontic treatment with beautiful, lasting results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+1234567890" className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              Call us at 123-456-7890
            </a>
            <a href="https://wa.me/1234567890" className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition">
              WhatsApp Us
            </a>
            <Link href="/booking" className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition">
              Free Ortho Consultation
            </Link>
          </div>
          <p className="text-gray-200 mt-6">Your perfect smile is closer than you think!</p>
        </div>
      </section>
    </main>
  );
}