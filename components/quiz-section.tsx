"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const quizQuestions = [
  {
    id: 1,
    question: "Quando confrontado pela dor e perda, você:",
    options: [
      { text: "Explode e enfrenta o mundo sem hesitar", character: "SKYE" },
      { text: "Observa em silêncio e aprende com o vazio", character: "DYLAN" },
      { text: "Procura proteger o que resta", character: "RAIMUNDO" },
      { text: "Tenta compreender o motivo oculto", character: "IRIS" },
      { text: "Sorri e segue em frente mesmo ferido", character: "CAIO" },
      { text: "Controla cada emoção e movimento", character: "KOG" },
      { text: "Luta até a última gota de força", character: "DAMIAN" },
      { text: "Corre em direção ao desconhecido", character: "GUILHERME" },
    ],
  },
  {
    id: 2,
    question: "Seu maior impulso é movido por:",
    options: [
      { text: "A fúria que queima por justiça", character: "SKYE" },
      { text: "A busca pela redenção", character: "DAMIAN" },
      { text: "A vontade de proteger alguém", character: "RAIMUNDO" },
      { text: "A curiosidade pelo desconhecido", character: "IRIS" },
      { text: "O desejo de compreender o mundo", character: "DYLAN" },
      { text: "A necessidade de continuar sorrindo", character: "CAIO" },
      { text: "A adrenalina do risco", character: "GUILHERME" },
      { text: "O equilíbrio entre vida e morte", character: "KOG" },
    ],
  },
  {
    id: 3,
    question: "Diante do perigo, você:",
    options: [
      { text: "Parte para o ataque sem pensar", character: "SKYE" },
      { text: "Fica em silêncio, observando tudo", character: "DYLAN" },
      { text: "Protege quem não pode lutar", character: "RAIMUNDO" },
      { text: "Analisa e busca uma saída lógica", character: "IRIS" },
      { text: "Agarra suas armas e avança", character: "CAIO" },
      { text: "Mantém o controle absoluto", character: "KOG" },
      { text: "Enfrenta com determinação e fé", character: "DAMIAN" },
      { text: "Transforma o medo em curiosidade", character: "GUILHERME" },
    ],
  },
  {
    id: 4,
    question: "O que mais o bosque despertaria em você?",
    options: [
      { text: "Raiva e coragem", character: "SKYE" },
      { text: "Silêncio e dor", character: "DYLAN" },
      { text: "Esperança e perda", character: "RAIMUNDO" },
      { text: "Curiosidade e medo", character: "IRIS" },
      { text: "Nostalgia e resistência", character: "CAIO" },
      { text: "Foco e equilíbrio", character: "KOG" },
      { text: "Força e redenção", character: "DAMIAN" },
      { text: "Fascínio e descobertas", character: "GUILHERME" },
    ],
  },
  {
    id: 5,
    question: "Quando tudo parece ruir, você:",
    options: [
      { text: "Se enfurece e enfrenta de cabeça erguida", character: "SKYE" },
      { text: "Se isola, analisando em silêncio o que resta", character: "DYLAN" },
      { text: "Protege quem sobrou, mesmo que se perca", character: "RAIMUNDO" },
      { text: "Procura respostas no impossível", character: "IRIS" },
      { text: "Finge estar bem e tenta seguir", character: "CAIO" },
      { text: "Aceita o caos e o transforma em força", character: "KOG" },
      { text: "Canaliza a dor em disciplina", character: "DAMIAN" },
      { text: "Corre em busca de algo novo, mesmo ferido", character: "GUILHERME" },
    ],
  },
   {
    id: 6,
    question: "Qual destas frases mais combina com você?",
    options: [
      { text: "‘A raiva me mantém vivo’", character: "SKYE" },
      { text: "‘Nada escapa aos olhos que observam em silêncio’", character: "DYLAN" },
      { text: "‘Proteger é o que dá sentido à dor’", character: "RAIMUNDO" },
      { text: "‘A verdade mora nas sombras’", character: "IRIS" },
      { text: "‘Mesmo ferido, ainda rio’", character: "CAIO" },
      { text: "‘O controle é minha fé’", character: "KOG" },
      { text: "‘Redimir é resistir’", character: "DAMIAN" },
      { text: "‘Se há um caminho, eu o encontrarei’", character: "GUILHERME" },
    ],
  },
  {
    id: 7,
    question: "Ao encontrar algo proibido no bosque, você:",
    options: [
      { text: "O destrói sem pensar nas consequências", character: "SKYE" },
      { text: "Observa e tenta compreender", character: "DYLAN" },
      { text: "Procura afastar os outros do perigo", character: "RAIMUNDO" },
      { text: "Estuda, mesmo que isso custe algo", character: "IRIS" },
      { text: "Toca, só para ver o que acontece", character: "GUILHERME" },
      { text: "Ignora e segue, fingindo que não viu", character: "CAIO" },
      { text: "Controla o medo e avalia friamente", character: "KOG" },
      { text: "Sente o peso do destino e age em silêncio", character: "DAMIAN" },
    ],
  },
  {
    id: 8,
    question: "O que mais te assusta?",
    options: [
      { text: "Perder o controle", character: "SKYE" },
      { text: "Ser esquecido", character: "DYLAN" },
      { text: "Ver alguém inocente sofrer", character: "RAIMUNDO" },
      { text: "Descobrir a verdade tarde demais", character: "IRIS" },
      { text: "Não conseguir salvar ninguém", character: "CAIO" },
      { text: "Falhar com sua própria missão", character: "KOG" },
      { text: "Repetir os erros do passado", character: "DAMIAN" },
      { text: "Ficar preso no mesmo lugar", character: "GUILHERME" },
    ],
  },
  {
    id: 9,
    question: "Como você lida com seus próprios demônios?",
    options: [
      { text: "Lutando até o fim", character: "SKYE" },
      { text: "Escondendo-os sob silêncio", character: "DYLAN" },
      { text: "Tentando curar os outros", character: "RAIMUNDO" },
      { text: "Estudando o que não entende", character: "IRIS" },
      { text: "Rindo de si mesmo", character: "CAIO" },
      { text: "Dominando-os até que obedeçam", character: "KOG" },
      { text: "Aceitando a dor como parte do caminho", character: "DAMIAN" },
      { text: "Explorando-os, sem medo do que vê", character: "GUILHERME" },
    ],
  },
  {
    id: 10,
    question: "Qual seria sua arma no bosque profano?",
    options: [
      { text: "Duas lâminas envoltas em fogo", character: "SKYE" },
      { text: "Uma mente fria e lógica", character: "DYLAN" },
      { text: "Um arco ancestral e lembranças do passado", character: "RAIMUNDO" },
      { text: "Um grimório de segredos antigos", character: "IRIS" },
      { text: "Punhos marcados, mas inquebráveis", character: "CAIO" },
      { text: "Uma katana forjada na ruína", character: "KOG" },
      { text: "Uma fé indestrutível", character: "DAMIAN" },
      { text: "Um amuleto desconhecido", character: "GUILHERME" },
    ],
  },
]

const characterData: Record<
  string,
  { title: string; description: string; image: string }
> = {
  SKYE: {
    title: "A Chama Impulsiva",
    description:
      "Você é Skye — pavio curto, ferozmente leal e pronta para agir antes de pensar. Vive entre a fúria e o amor, lutando para não se perder em si mesma.",
    image: "/skye.png",
  },
  IRIS: {
    title: "A Guardiã Silenciosa",
    description:
      "Você é Iris — calma e observadora, com um coração protetor e uma mente curiosa. Sente o mundo antes de compreendê-lo, e o protege com devoção serena.",
    image: "/iris.png",
  },
  DAMIAN: {
    title: "O Guerreiro Interior",
    description:
      "Você é Damian — intenso, disciplinado e movido por propósito. Luta não por glória, mas para nunca repetir os erros do passado.",
    image: "/damian.png",
  },
  GUILHERME: {
    title: "O Explorador Incansável",
    description:
      "Você é Guilherme — audacioso e curioso. Enfrenta o desconhecido com coragem e fascínio, sempre pronto para ultrapassar limites.",
    image: "/gui.png",
  },
  DYLAN: {
    title: "O Observador Silencioso",
    description:
      "Você é Dylan — analítico, distante e sereno. Vê o que os outros não percebem e carrega a sabedoria que nasce da dor.",
    image: "/dylan.png",
  },
  RAIMUNDO: {
    title: "O Caçador do Bosque",
    description:
      "Você é Raimundo — marcado pela solidão e pela perda. Vive entre a humanidade e a selva, buscando o que o bosque levou.",
    image: "/raimundo.jpeg",
  },
  CAIO: {
    title: "O Sobrevivente",
    description:
      "Você é Caio — resiliente e determinado. Sorri diante do caos, não por coragem, mas por lembrar o que já sobreviveu.",
    image: "/caio.png",
  },
  KOG: {
    title: "O Espadachim do Fim",
    description:
      "Você é Kog — frio e implacável. Vive para cumprir o que o destino lhe negou, marcando o bosque com ferro e fogo.",
    image: "/kog.png",
  },
}

export function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [scores, setScores] = useState<Record<string, number>>({})
  const [result, setResult] = useState<string | null>(null)

  const handleAnswer = (character: string) => {
    const newScores = { ...scores, [character]: (scores[character] || 0) + 1 }
    setScores(newScores)

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      const winner = Object.entries(newScores).reduce((a, b) => (a[1] > b[1] ? a : b))[0]
      setResult(winner)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setScores({})
    setResult(null)
  }

  if (result) {
    const char = characterData[result]

    return (
      <section className="relative w-full min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-[#0b0312] via-purple-950 to-[#10071f] overflow-hidden">
        {/* 🌫️ Fumaça e brilhos animados */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute w-[1000px] h-[1000px] bg-purple-700/10 rounded-full blur-[150px] top-1/3 left-1/4 animate-fog"></div>
          <div className="absolute w-[700px] h-[700px] bg-fuchsia-800/10 rounded-full blur-[120px] bottom-1/3 right-1/3 animate-fog-reverse"></div>
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-purple-400/30 rounded-full animate-star"
              style={{
                width: `${Math.random() * 3 + 2}px`,
                height: `${Math.random() * 3 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.4}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-3xl w-full text-center relative z-10 animate-fadeFog">
          <h2 className="text-5xl md:text-6xl font-bold text-purple-200 mb-8 drop-shadow-[0_0_20px_rgba(150,100,255,0.5)]">
            VOCÊ É
          </h2>

          {/* Card com imagem e texto */}
          <div className="bg-gradient-to-br from-purple-900/40 to-slate-900/40 border border-purple-600/50 rounded-xl p-10 backdrop-blur-xl shadow-lg shadow-purple-900/40 transform transition-all duration-700 animate-fogReveal">
            <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-purple-700 shadow-lg shadow-purple-900/50">
              <Image
                src={char.image}
                alt={char.title}
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>

            <p className="text-7xl font-extrabold text-purple-400 mb-4">{result}</p>
            <p className="text-2xl font-semibold text-purple-300 mb-4">{char.title}</p>
            <p className="text-lg text-purple-100/90 leading-relaxed">{char.description}</p>
          </div>

          <div className="flex justify-center mt-10">
            <Button
              onClick={resetQuiz}
              className="px-8 py-3 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              TENTAR NOVAMENTE
            </Button>
          </div>
        </div>
      </section>
    )
  }

  // 🔮 Parte do questionário
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-[#0b0312] via-purple-950 to-[#10071f] overflow-hidden">
      <div className="absolute inset-0 bg-[url('/texture-dark.png')] bg-cover opacity-10"></div>

      <div className="max-w-3xl w-full relative z-10">
        {/* Barra de progresso */}
        <div className="mb-8">
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-600 to-purple-400 transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
            ></div>
          </div>
          <p className="text-purple-300/70 mt-3 text-sm font-semibold text-center">
            Pergunta {currentQuestion + 1} de {quizQuestions.length}
          </p>
        </div>

        {/* Pergunta */}
        <div className="bg-gradient-to-br from-purple-900/40 to-slate-900/40 border border-purple-700/50 rounded-xl p-8 backdrop-blur-xl mb-8 shadow-lg shadow-purple-900/40 animate-fadeIn">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center leading-snug">
            {quizQuestions[currentQuestion].question}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quizQuestions[currentQuestion].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(option.character)}
                className="p-4 bg-slate-800/40 hover:bg-purple-700/50 border border-purple-600/30 hover:border-purple-500 rounded-lg text-left text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
              >
                <span className="font-semibold text-purple-100">{option.text}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
