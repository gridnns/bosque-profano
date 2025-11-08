"use client"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative w-full py-12 px-4 bg-gradient-to-b from-slate-950 to-black border-t border-purple-900/30">
      <div className="max-w-6xl mx-auto text-center">
        {/* Texto de direitos reservados */}
        <div className="pt-4 border-t border-purple-900/30 text-purple-200/60 text-sm">
          <p>© 2025 Bosque Profano. Todos os direitos reservados.</p>
        </div>

        {/* Botão voltar ao topo */}
        <div className="flex justify-center mt-6">
          <button
            onClick={scrollToTop}
            className="px-6 py-2 bg-purple-600/50 hover:bg-purple-600 text-white rounded-full transition-all duration-300 transform hover:scale-105 text-sm font-semibold"
          >
            ↑ VOLTAR AO TOPO
          </button>
        </div>
      </div>
    </footer>
  )
}
