"use client";

import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format, isSameDay, getDay } from "date-fns";
import { 
  CalendarDaysIcon, 
  ClockIcon, 
  UserIcon, 
  PhoneIcon, 
  CheckCircleIcon,
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM",
];

const services = [
  { id: "whitening", name: "Teeth Whitening", duration: "60 min", price: "Consultation" },
  { id: "implants", name: "Dental Implants", duration: "90 min", price: "Consultation" },
  { id: "braces", name: "Damon Braces", duration: "60 min", price: "Consultation" },
  { id: "cleaning", name: "Regular Cleaning", duration: "45 min", price: "Consultation" },
];

export default function Booking() {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState(new Date());
  const [bookedSlots, setBookedSlots] = useState([]);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Function to check if a date is Friday (5) or Saturday (6) - Sunday (0) is now available
  const isVacationDay = (date) => {
    const day = getDay(date);
    return day === 5 || day === 6; // 5 = Friday, 6 = Saturday (Sunday = 0 is now available and should be black)
  };

  const fetchBookedSlots = async (selectedDate) => {
    const res = await fetch(
      `/api/appointments?date=${selectedDate.toISOString()}`
    );
    const data = await res.json();
    setBookedSlots(data.map((a) => a.time));
  };

  useEffect(() => {
    fetchBookedSlots(date);
  }, [date]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/appointments", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        phone,
        service: selectedService,
        date,
        time: selectedTime,
        notes,
      }),
    });

    const data = await res.json();
    setLoading(false);

    if (!data.success) {
      alert("This slot has already been booked.");
      fetchBookedSlots(date);
      return;
    }

    setBookingConfirmed(true);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
    fetchBookedSlots(date);
    
    // Reset form after successful booking
    setTimeout(() => {
      setStep(1);
      setSelectedTime("");
      setSelectedService("");
      setName("");
      setEmail("");
      setPhone("");
      setNotes("");
      setBookingConfirmed(false);
    }, 3000);
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const isStep1Valid = selectedService;
  const isStep2Valid = date && selectedTime && !isVacationDay(date);
  const isStep3Valid = name && phone;

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4">
      {/* Success Toast Notification */}
      {showSuccess && (
        <div className="fixed top-24 right-6 z-50 animate-slide-in">
          <div className="bg-green-600 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3">
            <CheckCircleIcon className="h-6 w-6" />
            <div>
              <p className="font-semibold">Booking Confirmed!</p>
              <p className="text-sm text-green-100">We'll see you on {format(date, 'MMMM d')} at {selectedTime}</p>
            </div>
            <button onClick={() => setShowSuccess(false)} className="ml-4">
              <XMarkIcon className="h-5 w-5 hover:text-green-200" />
            </button>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        {/* Header with Steps */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Book Your Appointment</h1>
          <p className="text-xl text-gray-600">Schedule your visit in just a few simple steps</p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center items-center mb-12">
          {[1, 2, 3].map((stepNumber) => (
            <div key={stepNumber} className="flex items-center">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                step >= stepNumber 
                  ? 'border-black bg-black text-white' 
                  : 'border-gray-300 bg-white text-gray-400'
              }`}>
                {stepNumber}
              </div>
              {stepNumber < 3 && (
                <div className={`w-24 h-1 mx-2 transition-all duration-300 ${
                  step > stepNumber ? 'bg-black' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>

        {/* Progress Step Labels */}
        <div className="flex justify-center gap-16 mb-10 text-sm font-medium">
          <span className={step >= 1 ? 'text-black' : 'text-gray-400'}>Select Service</span>
          <span className={step >= 2 ? 'text-black' : 'text-gray-400'}>Choose Date & Time</span>
          <span className={step >= 3 ? 'text-black' : 'text-gray-400'}>Your Details</span>
        </div>

        {/* Main Booking Form */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-5">
            {/* Left Side - Current Step Content */}
            <div className="lg:col-span-3 p-8 md:p-10">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Service Selection */}
                {step === 1 && (
                  <div className="space-y-6 animate-fade-in">
                    <h2 className="text-2xl font-semibold mb-6">What would you like to book?</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {services.map((service) => (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => setSelectedService(service.name)}
                          className={`p-6 rounded-xl border-2 text-left transition-all duration-200 hover:shadow-lg relative ${
                            selectedService === service.name
                              ? 'border-black bg-gray-50 ring-2 ring-black ring-opacity-10'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <h3 className="font-semibold text-lg mb-1">{service.name}</h3>
                          <div className="flex justify-between items-center text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <ClockIcon className="h-4 w-4" />
                              {service.duration}
                            </span>
                            <span className="font-medium">{service.price}</span>
                          </div>
                          {selectedService === service.name && (
                            <CheckCircleIcon className="h-5 w-5 text-green-600 absolute top-4 right-4" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Date & Time Selection */}
                {step === 2 && (
                  <div className="space-y-8 animate-fade-in">
                    <h2 className="text-2xl font-semibold mb-6">When would you like to visit?</h2>
                    
                    {/* Calendar with disabled Friday & Saturday (Sunday is now available) */}
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <div className="flex items-center gap-2 mb-4 text-gray-700">
                        <CalendarDaysIcon className="h-5 w-5" />
                        <span className="font-medium">Select Date</span>
                      </div>
                      {isVacationDay(date) && (
                        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                          <p className="text-red-800 text-sm">
                            ⚠️ We're closed on Fridays and Saturdays. Please select a different day (Sunday is available).
                          </p>
                        </div>
                      )}
                      <Calendar
                        onChange={(value) => setDate(value)}
                        value={date}
                        minDate={new Date()}
                        className="w-full border-none shadow-sm"
                        tileClassName={({ date: tileDate }) => {
                          const classes = [];
                          if (isSameDay(tileDate, new Date())) {
                            classes.push('react-calendar__tile--now');
                          }
                          if (isVacationDay(tileDate)) {
                            classes.push('vacation-day');
                          }
                          return classes.join(' ');
                        }}
                        tileDisabled={({ date: tileDate }) => isVacationDay(tileDate)}
                      />
                    </div>

                    {/* Time Slots - Only show if not a vacation day */}
                    {!isVacationDay(date) ? (
                      <div>
                        <div className="flex items-center gap-2 mb-4 text-gray-700">
                          <ClockIcon className="h-5 w-5" />
                          <span className="font-medium">Available Time Slots for {format(date, 'MMMM d, yyyy')}</span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {timeSlots.map((slot) => {
                            const isBooked = bookedSlots.includes(slot);
                            return (
                              <button
                                key={slot}
                                type="button"
                                disabled={isBooked}
                                onClick={() => setSelectedTime(slot)}
                                className={`p-3 rounded-xl border transition-all duration-200 ${
                                  isBooked
                                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200'
                                    : selectedTime === slot
                                    ? 'bg-black text-white border-black shadow-lg scale-105'
                                    : 'border-gray-200 hover:border-black hover:bg-gray-50'
                                }`}
                              >
                                {slot}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      <div className="p-8 text-center bg-gray-50 rounded-xl">
                        <CalendarDaysIcon className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Closed on Fridays & Saturdays</h3>
                        <p className="text-gray-600">
                          We're taking a break on Fridays and Saturdays. We are open on Sundays! Please select a different day for your appointment.
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Step 3: Personal Details */}
                {step === 3 && (
                  <div className="space-y-6 animate-fade-in">
                    <h2 className="text-2xl font-semibold mb-6">Almost there! Tell us about yourself</h2>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <div className="flex items-center gap-2">
                            <UserIcon className="h-4 w-4" />
                            Full Name *
                          </div>
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <div className="flex items-center gap-2">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Email (Optional)
                          </div>
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <div className="flex items-center gap-2">
                            <PhoneIcon className="h-4 w-4" />
                            Phone Number *
                          </div>
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition"
                          placeholder="(555) 123-4567"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Additional Notes (Optional)
                        </label>
                        <textarea
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          rows="3"
                          className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition"
                          placeholder="Any special requests or concerns?"
                        />
                      </div>
                    </div>

                    {/* Booking Summary */}
                    <div className="bg-gray-50 p-6 rounded-xl mt-6">
                      <h3 className="font-semibold mb-3">Booking Summary</h3>
                      <div className="space-y-2 text-sm">
                        <p className="flex justify-between">
                          <span className="text-gray-600">Service:</span>
                          <span className="font-medium">{selectedService}</span>
                        </p>
                        <p className="flex justify-between">
                          <span className="text-gray-600">Date:</span>
                          <span className="font-medium">{format(date, 'MMMM d, yyyy')}</span>
                        </p>
                        <p className="flex justify-between">
                          <span className="text-gray-600">Time:</span>
                          <span className="font-medium">{selectedTime}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition"
                    >
                      <ChevronLeftIcon className="h-4 w-4" />
                      Back
                    </button>
                  )}
                  
                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={step === 1 ? !isStep1Valid : !isStep2Valid}
                      className={`ml-auto flex items-center gap-2 px-8 py-3 rounded-full transition ${
                        (step === 1 ? isStep1Valid : isStep2Valid)
                          ? 'bg-black text-white hover:bg-gray-800'
                          : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      Continue
                      <ChevronRightIcon className="h-4 w-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={!isStep3Valid || loading || bookingConfirmed}
                      className={`ml-auto px-8 py-3 rounded-full transition ${
                        isStep3Valid && !loading && !bookingConfirmed
                          ? 'bg-black text-white hover:bg-gray-800'
                          : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {loading ? 'Booking...' : bookingConfirmed ? 'Confirmed!' : 'Confirm Booking'}
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* Right Side - Info Panel */}
            <div className="lg:col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 md:p-10">
              <h3 className="text-xl font-semibold mb-6">Why Choose Elite Smile?</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Experienced Professionals</h4>
                    <p className="text-sm text-gray-300">Board-certified dentists with years of expertise</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <ClockIcon className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Flexible Scheduling</h4>
                    <p className="text-sm text-gray-300">Evening and weekend appointments available, including Sundays!</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <svg className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Insurance Accepted</h4>
                    <p className="text-sm text-gray-300">We work with most major insurance providers</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <svg className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">5-Star Reviews</h4>
                    <p className="text-sm text-gray-300">Rated excellent by our patients</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-white/10">
                <p className="text-sm text-gray-300 mb-4">Need help? Contact us:</p>
                <a href="tel:+1234567890" className="block text-lg font-semibold hover:text-gray-300 transition">
                  📞 (123) 456-7890
                </a>
                <a href="mailto:info@elitesmile.com" className="block text-lg font-semibold hover:text-gray-300 transition mt-2">
                  ✉️ info@elitesmile.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-in {
          from { opacity: 0; transform: translateX(100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        
        .animate-slide-in {
          animation: slide-in 0.5s ease-out;
        }
        
        :global(.vacation-day) {
          background-color: #fee2e2 !important;
          color: #991b1b !important;
          text-decoration: line-through;
          opacity: 0.7;
          position: relative;
        }
        
        :global(.vacation-day:hover) {
          background-color: #fecaca !important;
          cursor: not-allowed !important;
        }
        
        :global(.vacation-day::after) {
          content: "Closed";
          position: absolute;
          bottom: -20px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 10px;
          white-space: nowrap;
          background: #991b1b;
          color: white;
          padding: 2px 4px;
          border-radius: 4px;
          opacity: 0;
          transition: opacity 0.2s;
          pointer-events: none;
          z-index: 10;
        }
        
        :global(.vacation-day:hover::after) {
          opacity: 1;
        }

        /* Make Sunday (not a vacation day) have black text */
        :global(.react-calendar__month-view__days__day:not(.vacation-day)) {
          color: #000000 !important;
        }
        
        /* Ensure weekend styling doesn't override Sunday */
        :global(.react-calendar__month-view__days__day--weekend:not(.vacation-day)) {
          color: #000000 !important;
        }
      `}</style>
    </section>
  );
}