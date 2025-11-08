"use client"

import { useEffect, useRef, useState } from "react"

export function HeroSection({ onExplore }: { onExplore?: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [fruitFalling, setFruitFalling] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      opacity: number
      life: number
    }> = []

    const createParticles = () => {
      for (let i = 0; i < 3; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.3,
          life: Math.random() * 100 + 50,
        })
      }
    }

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy
        p.life--
        p.opacity *= 0.98

        ctx.fillStyle = `rgba(168, 85, 247, ${p.opacity})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()

        if (p.life <= 0) {
          particles.splice(i, 1)
        }
      })

      if (particles.length < 50) {
        createParticles()
      }

      requestAnimationFrame(animateParticles)
    }

    animateParticles()

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const handleTreeClick = () => {
    setFruitFalling(true)
    setTimeout(() => setFruitFalling(false), 1000)
  }

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950 via-slate-900 to-black">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-600/20 via-transparent to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-800/20 via-transparent to-transparent rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </div>

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-60" style={{ mixBlendMode: "screen" }} />

      {/* Atmospheric fog layers */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Glowing orb symbol */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-16 h-16 flex items-center justify-center cursor-pointer" onClick={handleTreeClick}>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full blur-lg opacity-60 animate-pulse"></div>
            <div className="relative text-4xl animate-float">✦</div>

            {fruitFalling && (
              <div
                className="absolute w-3 h-3 bg-purple-500 rounded-full animate-bounce"
                style={{
                  animation: "fall 1s ease-in forwards",
                  top: "0%",
                }}
              />
            )}
          </div>
        </div>

        {/* Title */}
        <h1
          className="text-6xl md:text-8xl font-bold mb-4 text-white drop-shadow-2xl text-balance"
          style={{ fontFamily: "var(--font-gothic)" }}
        >
          O BOSQUE
          <br />
          PROFANO
        </h1>

        {/* Subtitle with enhanced styling */}
        <p className="text-lg md:text-2xl text-purple-200 mb-12 font-light tracking-wider drop-shadow-lg">
          Adentre o bosque. Descubra o que se esconde nas sombras.
        </p>

        {/* Interactive CTA Button */}
        <button
          onClick={onExplore}
          className="group px-12 py-4 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
          <span className="relative">EXPLORAR O BOSQUE</span>
        </button>

        {/* Bottom mystical symbol */}
        <div className="mt-20 flex justify-center opacity-60">
          <div className="relative w-12 h-12 animate-float" style={{ animationDelay: "2s" }}>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-purple-700/30 rounded-full blur-lg"></div>
            <div className="relative text-5xl flex items-center justify-center">☠</div>
          </div>
        </div>
      </div>

      {/* Forest canopy silhouette effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none">
        <svg className="w-full h-full opacity-40" viewBox="0 0 1200 200" preserveAspectRatio="none">
          <path
            d="M0,150 Q150,80 300,120 T600,100 T900,130 T1200,80 L1200,200 L0,200 Z"
            fill="currentColor"
            className="text-slate-900"
          />
        </svg>
      </div>

      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(200px);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  )
}
