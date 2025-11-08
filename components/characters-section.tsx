"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const characters = [
  {
    id: 1,
    name: "SKYE (Maeve)",
    title: "A Chama Impulsiva",
    description: "Impulsiva, explosiva e ferozmente leal. Vive na beira do abismo entre raiva e amor.",
    image: "/skye.png",
    story:
      "Skye tem o pavio curto: impulsiva, explosiva e pronta para agir antes de pensar. É ferozmente leal — quem conquista sua confiança tem um aliado que mata e morre por eles. Vive na beira do abismo entre raiva e amor, lutando para não se perder nas próprias emoções. Apesar da coragem, carrega um chamado sombrio pelo desconhecido; permanece por amor à irmã, não por covardia.",
  },
  {
    id: 2,
    name: "IRIS (Bruna)",
    title: "A Guardiã Silenciosa",
    description: "Calma, observadora e profundamente protetora. Fronteira entre o real e o espiritual.",
    image: "/iris.png",
    story:
      "Iris é calma e observadora, com uma mente analítica guiada por uma curiosidade quase mística. Fala pouco, mas sente muito — suas emoções correm fundo, mesmo quando escondidas sob serenidade. Tem um senso protetor inabalável, especialmente em relação à irmã, sua razão de existir. Entre o medo e a fascinação pelo desconhecido, vive na fronteira entre o real e o espiritual, buscando coragem em meio à escuridão.",
  },
  {
    id: 3,
    name: "DAMIAN (Atlas)",
    title: "O Guerreiro Interior",
    description: "Intenso e reservado. Força silenciosa moldada por dor e disciplina.",
    image: "/damian.png",
    story:
      "Damian é intenso e reservado, moldado por uma vida de dor e disciplina. Carrega uma força silenciosa — o tipo que não precisa provar nada, apenas agir. Sua luta é interna, entre quem foi forçado a ser e quem escolhe ser. Determina-se a buscar redenção, não glória, combatendo para nunca se tornar o que jurou destruir.",
  },
  {
    id: 4,
    name: "GUILHERME (Bob)",
    title: "O Explorador Incansável",
    description: "Destemido e insaciável por desafio. Espírito livre movido pela adrenalina.",
    image: "/gui.png",
    story:
      "Guilherme é curioso e destemido, guiado por uma sede insaciável por desafio e descoberta. Tem um espírito livre e energético, movido pela adrenalina de se superar a cada passo. Apesar do sorriso fácil e do jeito descontraído, carrega uma determinação firme e quase obsessiva. É leal aos seus e encara o desconhecido não com medo, mas com fascínio — como quem nasceu para ir além do limite humano.",
  },
  {
    id: 5,
    name: "DYLAN (Breno)",
    title: "O Observador Silencioso",
    description: "Reservado e metódico. Olhar que atravessa pessoas e tempo.",
    image: "/dylan.png",
    story:
      "Dylan é reservado, metódico e distante, como alguém que aprendeu cedo demais o preço de sentir. Carrega uma serenidade inquietante — fala pouco, observa tudo. Seu olhar parece atravessar as pessoas e o tempo, buscando algo que perdeu. Sob a aparência fria, há um homem que busca redenção mais do que glória. Determinado, leal e implacável, luta não por ódio, mas para nunca se tornar o que jurou destruir.",
  },
  {
    id: 6,
    name: "RAIMUNDO (Gueto)",
    title: "O Caçador do Bosque",
    description: "Esqueceu o que era viver até uma criança aparecer.",
    image: "/raimundo.jpeg",
    story:
      "Durante anos, Raimundo esqueceu o que era viver. A rotina, a dor e o silêncio o transformaram em parte da floresta — um homem sem rumo. Até que uma criança apareceu. Frágil e curiosa, reacendeu sua humanidade. Mas o bosque cobra caro pelo que devolve. A criança desapareceu, e Raimundo passou a vagar novamente, não como eremita, mas como caçador.",
  },
  {
    id: 7,
    name: "CAIO (Dk)",
    title: "O Sobrevivente",
    description: "Sorri diante do caos. Abismo aberto pela perda.",
    image: "/caio.png",
    story:
      "Caio é o tipo de homem que sorri diante do caos não por coragem, mas por lembrança. Por trás do olhar sereno existe um abismo, aberto no dia em que perdeu quem mais amava. Sua missão no bosque é provar que ainda pode viver, mesmo enfrentando o tempo, a morte e os mundos que o separam do passado.",
  },
  {
    id: 8,
    name: "KOG (Giovani)",
    title: "O Espadachim do Fim",
    description: "Frio como aço. Volta para deixar sua marca com fogo, ferro e sangue.",
    image: "/kog.png",
    story:
      "Kog é frio como o aço de sua katana. Olhar fixo, voz controlada e ausência de emoção. Por trás do silêncio há dor e fardo. Nenhum obstáculo o detém, nenhuma súplica o desvia. O Bosque Profano já o marcou uma vez, e agora ele voltou para marcar o bosque em retorno — com fogo, ferro e sangue.",
  },
]

export function CharactersSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const charPerSlide = 4
  const totalSlides = Math.ceil(characters.length / charPerSlide)
  const startIdx = currentSlide * charPerSlide
  const currentCharacters = characters.slice(startIdx, startIdx + charPerSlide)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
    setExpandedId(null)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
    setExpandedId(null)
  }

  return (
    <section className="relative w-full py-24 px-4 bg-gradient-to-b from-purple-950 to-slate-950 border-t border-purple-900/30 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-2">As Almas Perdidas</h2>
          <p className="text-purple-300/60 text-lg">Do Bosque Profano</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {currentCharacters.map((char) => (
            <div
              key={char.id}
              className={`group relative cursor-pointer bg-gradient-to-br from-purple-900/40 to-purple-800/20 border border-purple-700/50 rounded-xl p-4 backdrop-blur-sm transition-all duration-500 hover:border-purple-500/70 hover:shadow-lg hover:shadow-purple-500/30 ${
                expandedId === char.id
                  ? "scale-[1.02] border-purple-500 bg-purple-900/50 shadow-xl"
                  : "hover:scale-[1.03]"
              }`}
              onClick={() => setExpandedId(expandedId === char.id ? null : char.id)}
            >
              <div className="relative w-full h-52 overflow-hidden rounded-xl mb-4">
                <Image
                  src={char.image}
                  alt={char.name}
                  fill
                  sizes="100%"
                  className="object-cover rounded-xl transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
              </div>

              <h3 className="text-xl font-semibold text-purple-200">{char.name}</h3>
              <p className="text-sm text-purple-400/80">{char.title}</p>
              <p className="mt-2 text-xs text-purple-100/60">{char.description}</p>

              {expandedId === char.id && (
                <div className="mt-4 pt-3 border-t border-purple-700/40 text-purple-100/80 text-sm animate-fadeIn">
                  {char.story}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Navegação entre slides */}
        <div className="flex justify-between items-center mt-10">
          <button
            onClick={prevSlide}
            className="p-3 bg-purple-900/40 hover:bg-purple-800/60 border border-purple-700/50 hover:border-purple-500 rounded-lg transition-all duration-300 transform hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5 text-purple-300 group-hover:text-purple-100" />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === idx ? "bg-purple-500 w-8" : "bg-purple-700/50 hover:bg-purple-600"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-3 bg-purple-900/40 hover:bg-purple-800/60 border border-purple-700/50 hover:border-purple-500 rounded-lg transition-all duration-300 transform hover:scale-110"
          >
            <ChevronRight className="w-5 h-5 text-purple-300 group-hover:text-purple-100" />
          </button>
        </div>
      </div>
    </section>
  )
}
