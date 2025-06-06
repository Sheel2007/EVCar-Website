"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import frontview from "@/public/frontview.png"
import sideview from "@/public/sideview.png"
import circuit from "@/public/circuit.png"
import screen from "@/public/screen.png"
import paint from "@/public/paint.png"
import electronic from "@/public/electronics.png"
import rods from "@/public/rods.png"
import frame from "@/public/frame.png"
import motor from "@/public/motor.png"
import seat from "@/public/front-seat.png"
import frontelectronics from "@/public/front-electronics.png"

const images = [
  {
    src: rods,
    alt: "Rods",
    caption: "Start of Car",
  },
  {
    src: frame,
    alt: "Frame",
    caption: "Frame Completion",
  },
  {
    // src: "/placeholder.svg?height=600&width=800",
    src: paint,
    alt: "Paint",
    caption: "New Paint Job",
  },
  {
    src: motor,
    alt: "Motor",
    caption: "Motor Installation"
  },
  {
    src: seat,
    alt: "Front Seat",
    caption: "Front Seat"
  },
  {
    src: frontelectronics,
    alt: "Front Electronics",
    caption: "Electronics in the Front"
  },
  // {
  //   // src: "/placeholder.svg?height=600&width=800",
  //   src: electronic,
  //   alt: "Electronics",
  //   caption: "Electronics Progress",
  // },
  {
    // src: "/placeholder.svg?height=600&width=800",
    src: frontview,
    alt: "Electric Vehicle Front View",
    caption: "Front view of our electric vehicle",
  },
  {
    src: sideview,
    alt: "Side View",
    caption: "Team working on the car",
  },
  // {
  //   src: circuit,
  //   alt: "MCP4725",
  //   caption: "Voltage control circuit",
  // },
  {
    src: screen,
    alt: "Screen",
    caption: "User inferface of the car",
  },
]

export function PhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div className="relative w-full h-[500px] bg-gray-800/30 rounded-xl border border-gray-700 backdrop-blur-sm overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full relative"
          >
            <Image
              src={images[currentIndex].src || "/placeholder.svg"}
              alt={images[currentIndex].alt}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-white text-lg">{images[currentIndex].caption}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-all z-10"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-all z-10"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-white w-4" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  )
}

