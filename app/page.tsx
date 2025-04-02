import Image from "next/image"
import { PhotoGallery } from "@/components/photo-gallery"
import { ParticleBackground } from "@/components/particle-background"
import { FadeIn } from "@/components/fade-in"
import { CircuitLines } from "@/components/circuit-lines"
import { PhaseDetails } from "@/components/phase-details"
import { Footer } from "@/components/footer"
import carCover from "@/public/front-view-cc.png"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32">
        <CircuitLines className="absolute inset-0 z-0 opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <FadeIn>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
                  Career Center EV
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Pioneering the future of autonomous electric vehicles through innovative engineering and sustainable
                  technology.
                </p>
                <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                  <a href="#overview">Learn More</a>
                </button>
              </FadeIn>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-xl blur-xl"></div>
              <div className="relative rounded-xl overflow-hidden border border-gray-800">
                <Image
                  src={ carCover }
                  alt="Switch Labs Electric Vehicle"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section id="overview" className="py-20 bg-gray-900/50 relative">
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Project <span className="text-blue-400">Overview</span>
            </h2>
            <div className="max-w-4xl mx-auto bg-gray-800/50 p-8 rounded-xl border border-gray-700 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-4 text-blue-300">End Goal</h3>
              {/* <p className="text-gray-300 mb-6">
                How can we implement a custom throttle control system for the Switch Labs electric vehicle using a
                Raspberry Pi and an MCP4725 DAC—powered by a 5 V regulated supply from the vehicle's 12 V battery—to
                emulate a 0–3.3 V throttle signal, incorporating both a user interface and circuit control, while also
                ensuring the system's scalability for future autonomous driving phases?
              </p> */}
              <p className="text-gray-300">
                Controlling a vehicle entirely through a computer is a daunting task. Even the world's leading
                companies spend countless years on. Our approach is divided into manageable development
                phases. Each Phase focuses on a specific component for the end goal of making an autonomous vehicle.
              </p><br />
              <h3 className="text-2xl font-semibold mb-4 text-blue-300">Progress</h3>
              <p className="text-gray-300">
                During the 2024-25 school year, Phase 1 of the project was completed. The computer, a Raspberry Pi, 
                is now connected to the throttle port of the car and can send a voltage signal to move the car
                forward by using the MCP4725 circuit component.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Development Plans - Now above Phase 1 */}
      <section className="py-20 relative">
        <CircuitLines className="absolute inset-0 z-0 opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Development <span className="text-blue-400">Plans</span>
            </h2>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
              Our approach is divided into four key phases, with Phase 1 already successfully completed. Click on each
              phase to learn more about our implementation details and future plans.
            </p>

            <PhaseDetails />
          </FadeIn>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-gray-900/50 relative">
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Project <span className="text-teal-400">Gallery</span>
            </h2>
            <div className="max-w-5xl mx-auto">
              <PhotoGallery />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer with Donate Link */}
      <Footer />
    </main>
  )
}

