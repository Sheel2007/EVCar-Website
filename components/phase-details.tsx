"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PhaseCard } from "./phase-card"

// Phase data
const phaseData = {
  phase1: {
    title: "Computer-Controlled Throttle",
    objective:
      "Develop a reliable and safe throttle control system that accurately emulates a driver's throttle input using a Raspberry Pi microcomputer.",
    functionalities: [
      "Power the system using the vehicle's 12 V battery, stepped down via an LM2596 buck converter (mounted near the battery) to supply a regulated 5 V source.",
      "Use a Raspberry Pi to execute both the control logic and the user interface.",
      "Drive an MCP4725 digital-to-analog converter (DAC) to generate a precise 0–3.3 V analog signal, simulating throttle input into the vehicle's existing pedal signal port.",
    ],
    scalability:
      "This phase lays the groundwork for a modular and expandable control system. It is designed to support the seamless integration of additional components such as sensors, decision-making algorithms, and higher-level autonomous functionality in future development phases.",
  },
  phase2: {
    title: "Computer-Controlled Braking",
    objective:
      "Develop a system that can safely and reliably control the vehicle's braking system through computer commands.",
    functionalities: [
      "Install a linear actuator connected to the brake pedal for precise pressure control.",
      "Implement safety protocols to ensure emergency override capabilities.",
      "Develop feedback mechanisms to monitor braking performance and effectiveness.",
    ],
    scalability:
      "The braking system will be designed to work in conjunction with the throttle control from Phase 1, creating a foundation for speed management in autonomous driving scenarios.",
  },
  phase3: {
    title: "Steering Automation",
    objective: "Create a system that allows computer control of the vehicle's steering mechanism.",
    functionalities: ["Coming soon..."],
    scalability: "Coming soon...",
  },
  phase4: {
    title: "Autonomous Driving",
    objective: "Integrate computer vision and artificial intelligence to create a fully autonomous driving system.",
    functionalities: ["Coming soon..."],
    scalability: "Coming soon...",
  },
}

export function PhaseDetails() {
  const [selectedPhase, setSelectedPhase] = useState<string | null>(null)

  const handlePhaseClick = (phase: string) => {
    if (selectedPhase === phase) {
      setSelectedPhase(null)
    } else {
      setSelectedPhase(phase)
    }
  }

  return (
    <div className="w-full">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        <PhaseCard
          phase="Phase 1"
          title="Computer-Controlled Throttle"
          description="Enable the car to move forward with computer-controlled motor speed via a custom throttle signal."
          color="blue"
          onClick={() => handlePhaseClick("phase1")}
          active={selectedPhase === "phase1"}
        />
        <PhaseCard
          phase="Phase 2"
          title="Computer-Controlled Braking"
          description="This will involve using the Raspberry Pi to control a linear actuator that can apply pressure to the brake pedal."
          color="teal"
          onClick={() => handlePhaseClick("phase2")}
          active={selectedPhase === "phase2"}
        />
        <PhaseCard
          phase="Phase 3"
          title="Steering Automation"
          description="Develop a system that allows the computer to physically manipulate the steering wheel, enabling directional control."
          color="purple"
          onClick={() => handlePhaseClick("phase3")}
          active={selectedPhase === "phase3"}
        />
        <PhaseCard
          phase="Phase 4"
          title="Autonomous Driving"
          description="Integrating computer vision and AI to create a fully autonomous driving system."
          color="indigo"
          onClick={() => handlePhaseClick("phase4")}
          active={selectedPhase === "phase4"}
        />
      </div>

      <AnimatePresence>
        {selectedPhase && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 overflow-hidden"
          >
            <div className="bg-gray-800/30 p-8 rounded-xl border border-gray-700 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-4 text-blue-300">
                {phaseData[selectedPhase as keyof typeof phaseData].title} - Objective
              </h3>
              <p className="text-gray-300 mb-6">{phaseData[selectedPhase as keyof typeof phaseData].objective}</p>

              <h3 className="text-2xl font-semibold mb-4 text-blue-300">Core Functionalities</h3>
              <div className="grid gap-4 mb-6">
                {phaseData[selectedPhase as keyof typeof phaseData].functionalities.map((functionality, index) => (
                  <div key={index} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-blue-300 text-sm font-bold">{index + 1}</span>
                      </div>
                      <p className="text-gray-300">{functionality}</p>
                    </div>
                  </div>
                ))}
              </div>

              {phaseData[selectedPhase as keyof typeof phaseData].scalability && (
                <>
                  <h3 className="text-2xl font-semibold mb-4 text-blue-300">Scalability and Future Integration</h3>
                  <p className="text-gray-300">{phaseData[selectedPhase as keyof typeof phaseData].scalability}</p>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

