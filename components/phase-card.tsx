"use client"

import { motion } from "framer-motion"

interface PhaseCardProps {
  phase: string
  title: string
  description: string
  color: "blue" | "teal" | "purple" | "indigo"
  className?: string
  onClick?: () => void
  active?: boolean
}

export function PhaseCard({
  phase,
  title,
  description,
  color,
  className = "",
  onClick,
  active = false,
}: PhaseCardProps) {
  const colorClasses = {
    blue: {
      bg: "bg-blue-500/10",
      border: active ? "border-blue-500" : "border-blue-500/30",
      text: "text-blue-300",
      highlight: "bg-blue-500/20",
    },
    teal: {
      bg: "bg-teal-500/10",
      border: active ? "border-teal-500" : "border-teal-500/30",
      text: "text-teal-300",
      highlight: "bg-teal-500/20",
    },
    purple: {
      bg: "bg-purple-500/10",
      border: active ? "border-purple-500" : "border-purple-500/30",
      text: "text-purple-300",
      highlight: "bg-purple-500/20",
    },
    indigo: {
      bg: "bg-indigo-500/10",
      border: active ? "border-indigo-500" : "border-indigo-500/30",
      text: "text-indigo-300",
      highlight: "bg-indigo-500/20",
    },
  }

  const { bg, border, text, highlight } = colorClasses[color]

  return (
    <motion.div
      className={`${bg} p-6 rounded-xl border ${border} backdrop-blur-sm ${className} ${active ? "ring-2 ring-offset-2 ring-offset-black" : ""} cursor-pointer`}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      <div className={`inline-block px-3 py-1 rounded-full ${highlight} ${text} text-sm font-medium mb-4`}>{phase}</div>
      <h3 className={`text-xl font-semibold mb-3 ${text}`}>{title}</h3>
      <p className="text-gray-300">{description}</p>
      {active && (
        <div className="mt-4 flex justify-end">
          <div className={`${text} text-sm`}>Click to view details</div>
        </div>
      )}
    </motion.div>
  )
}

