"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const treatments = [
  {
    title: "Dental Implants",
    before: "/Images/DentalBefore.jpeg",
    after: "/Images/DentalAfter.jpeg",
  },
  {
    title: "Teeth Whitening",
    before:
      "/Images/TeethBefore.jpg",
    after:
      "/Images/TeethAfter.jpg",
  },
]

function BeforeAfter({ before, after }) {
  const [position, setPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMove = (e) => {
    if (!isDragging) return

    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100
    setPosition(Math.min(100, Math.max(0, percentage)))
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="relative w-full h-[380px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] group"
      onMouseMove={handleMove}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
    >
      {/* Before Image */}
<motion.img
  src={before}
  alt="Before"
  className="absolute inset-0 w-full h-full object-cover scale-[0.9] md:scale-[0.92] transition-transform duration-700 group-hover:scale-[0.95]"
/>

      {/* After Image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
<motion.img
  src={after}
  alt="After"
  className="w-full h-full object-cover scale-[0.9] md:scale-[0.92] transition-transform duration-700 group-hover:scale-[0.95]"
/>
      </div>

      {/* Soft Gradient Edge */}
      <div
        className="absolute top-0 bottom-0 w-20 pointer-events-none"
        style={{
          left: `${position}%`,
          transform: "translateX(-50%)",
          background:
            "linear-gradient(to right, transparent, rgba(255,255,255,0.25), transparent)",
        }}
      />

      {/* Divider Line */}
      <motion.div
        className="absolute top-0 bottom-0 w-[3px] bg-white z-20 shadow-[0_0_15px_rgba(255,255,255,0.8)]"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        animate={{ boxShadow: isDragging ? "0 0 25px #22d3ee" : "" }}
      >
        {/* Handle */}
        <div
          onMouseDown={() => setIsDragging(true)}
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white backdrop-blur-xl border border-gray-200 shadow-2xl flex items-center justify-center cursor-ew-resize transition hover:scale-110 active:scale-95"
        >
          <div className="flex gap-1">
            <div className="w-1 h-5 bg-cyan-500 rounded-full"></div>
            <div className="w-1 h-5 bg-cyan-500 rounded-full"></div>
          </div>
        </div>
      </motion.div>

      {/* Overlay glass effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

      {/* Labels */}
      <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md px-5 py-2 rounded-full text-sm font-medium tracking-wide">
        After
      </div>

      <div className="absolute top-6 right-6 bg-cyan-500 px-5 py-2 rounded-full text-sm font-medium tracking-wide shadow-lg shadow-cyan-500/40">
        Before
      </div>

      {/* Instruction Hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/70 tracking-wider uppercase">
        Drag to compare
      </div>
    </motion.div>
  )
}

export default function GalleryPage() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen text-white py-20 px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Smile Transformations
        </h1>
        <p className="text-gray-400 mt-4 text-lg">
          Real Results. Real Confidence.
        </p>
      </motion.div>

      <div className="space-y-24 max-w-5xl mx-auto">
        {treatments.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {item.title}
            </h2>

            <BeforeAfter
              before={item.before}
              after={item.after}
            />
          </motion.div>
        ))}
      </div>

      {/* Decorative Blur Circles */}
      <div className="fixed top-0 left-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl -z-10"></div>
      <div className="fixed bottom-0 right-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
    </div>
  )
}