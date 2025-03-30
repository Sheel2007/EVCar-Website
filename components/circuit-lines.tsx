"use client"

import { useEffect, useRef } from "react"

interface CircuitLinesProps {
  className?: string
}

export function CircuitLines({ className = "" }: CircuitLinesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    // Draw circuit lines
    function drawCircuitLines() {
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Set line style
      ctx.strokeStyle = "rgba(100, 200, 255, 0.15)"
      ctx.lineWidth = 1

      const gridSize = 50
      const nodeChance = 0.2
      const nodeSize = 3

      // Create grid points
      const points = []
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          if (Math.random() < nodeChance) {
            points.push({
              x: x + (Math.random() * gridSize * 0.6 - gridSize * 0.3),
              y: y + (Math.random() * gridSize * 0.6 - gridSize * 0.3),
            })
          }
        }
      }

      // Draw connections between nearby points
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x
          const dy = points[i].y - points[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < gridSize * 2.5) {
            ctx.beginPath()
            ctx.moveTo(points[i].x, points[i].y)

            // Add some circuit-like right angles
            if (Math.random() > 0.5) {
              ctx.lineTo(points[j].x, points[i].y)
              ctx.lineTo(points[j].x, points[j].y)
            } else {
              ctx.lineTo(points[i].x, points[j].y)
              ctx.lineTo(points[j].x, points[j].y)
            }

            ctx.stroke()
          }
        }
      }

      // Draw nodes
      ctx.fillStyle = "rgba(100, 200, 255, 0.3)"
      for (const point of points) {
        ctx.beginPath()
        ctx.arc(point.x, point.y, nodeSize, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    drawCircuitLines()

    // Redraw on resize
    window.addEventListener("resize", drawCircuitLines)

    return () => {
      window.removeEventListener("resize", setCanvasSize)
      window.removeEventListener("resize", drawCircuitLines)
    }
  }, [])

  return <canvas ref={canvasRef} className={`w-full h-full ${className}`} />
}

