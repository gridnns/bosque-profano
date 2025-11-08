"use client"

import { useEffect, useRef, useState } from "react"

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 px-4 bg-gradient-to-b from-slate-900 via-purple-950 to-slate-900 border-t border-purple-900/30 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-purple-800/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section title */}
        <h2
          className={`text-5xl md:text-6xl font-bold text-white mb-12 text-center drop-shadow-lg transform transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ fontFamily: "var(--font-gothic)" }}
        >
          O UNIVERSO AMALDIÇOADO
        </h2>

        {/* Content grid with glassmorphism */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div
            className={`bg-white/5 backdrop-blur-xl border border-purple-500/20 rounded-xl p-8 transform transition-all duration-1000 hover:bg-white/10 hover:border-purple-500/40 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-2xl font-bold text-purple-300 mb-4">A Floresta Distorcida</h3>
            <p className="text-purple-100/80 leading-relaxed">
              Uma floresta amaldiçoada onde o tempo flui de forma irregular. Os arcos da realidade se distorcem entre as
              árvores antigas, criando entradas para dimensões esquecidas.
            </p>
          </div>

          <div
            className={`bg-white/5 backdrop-blur-xl border border-purple-500/20 rounded-xl p-8 transform transition-all duration-1000 delay-100 hover:bg-white/10 hover:border-purple-500/40 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-2xl font-bold text-purple-300 mb-4">Terror Psicológico</h3>
            <p className="text-purple-100/80 leading-relaxed">
              O verdadeiro horror reside não no visível, mas no desconhecido. Sobreviva aos horrores que assombram os
              sobreviventes e desveie os segredos do bosque profano.
            </p>
          </div>
        </div>

        {/* Main description with enhanced styling */}
        <div
          className={`bg-gradient-to-r from-purple-950/40 to-slate-950/40 backdrop-blur-xl border border-purple-500/30 rounded-xl p-8 text-center transform transition-all duration-1000 delay-200 hover:border-purple-500/50 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-lg text-purple-100/90 leading-relaxed">
            O Bosque Profano é um RPG de horror imersivo onde você e seus companheiros exploram uma floresta maldita,
            dominada por uma árvore mágica antiga e entidades corrompidas. Cada decisão afeta sua jornada, e nem todos
            sairão com vida da escuridão.
          </p>
        </div>
       <div
          className={`mt-20 transform transition-all duration-1000 delay-300 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3
            className="text-4xl md:text-5xl font-bold text-purple-300 text-center mb-6"
            style={{ fontFamily: "var(--font-gothic)" }}
          >
            Sinopse
          </h3>
          <p className="text-base md:text-lg text-purple-100/80 leading-relaxed text-center max-w-3xl mx-auto mb-10">
            Dizem que há um lugar onde o tempo não passa e o vento sussurra nomes esquecidos. Aqueles que entram no
            bosque raramente voltam, e os que voltam, nunca são os mesmos. O Bosque Profano é um eco vivo — alimenta-se
            de memórias, arrependimentos e desejos. A floresta observa, julga e reescreve o destino dos que ousam cruzar
            seu limiar.
          </p>

          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-lg shadow-purple-900/40 border border-purple-800/30 hover:border-purple-500/50 transition-all duration-500">
            {/* Substitua o src pelo vídeo que você vai anexar */}
            <video
              controls
              preload="metadata"
              className="w-full h-full object-cover"
            >
              <source src="/bosque-profano.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos HTML5.
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
