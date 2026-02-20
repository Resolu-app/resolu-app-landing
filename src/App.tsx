import { useState } from 'react'
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2,
  Users2,
  DollarSign,
  Briefcase,
  BookOpen,
  HeartPulse,
  Star,
  Share2,
  Trophy
} from 'lucide-react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const dimensions = [
    { icon: Users2, title: "Família", desc: "Relações familiares e tempo de qualidade" },
    { icon: DollarSign, title: "Financeiro", desc: "Finanças pessoais e investimentos" },
    { icon: Briefcase, title: "Carreira", desc: "Crescimento profissional" },
    { icon: BookOpen, title: "Intelectual", desc: "Aprendizado, leitura e idiomas" },
    { icon: HeartPulse, title: "Saúde", desc: "Condicionamento, alimentação e sono" },
    { icon: Star, title: "Realização", desc: "Propósito, sonhos e bem-estar" },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 rounded-lg bg-[#3cb371] flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white rounded-full" />
            </div>
            <span>resolu<span className="text-slate-400">.app</span></span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm hover:text-[#3cb371]">Funcionalidades</a>
            <a href="#ia" className="text-sm hover:text-[#3cb371]">IA</a>
            <a href="https://my.resolu.app/login" className="text-sm hover:text-[#3cb371]">Entrar</a>
            <a href="https://my.resolu.app/cadastro" className="px-4 py-2 bg-[#3cb371] text-white rounded-full text-sm font-medium hover:bg-[#2e8b57] inline-block">
              Criar conta
            </a>
          </nav>

          <button 
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-4">
            <a href="#features" onClick={() => setMenuOpen(false)} className="text-sm hover:text-[#3cb371]">Funcionalidades</a>
            <a href="#ia" onClick={() => setMenuOpen(false)} className="text-sm hover:text-[#3cb371]">IA</a>
            <a href="https://my.resolu.app/login" onClick={() => setMenuOpen(false)} className="text-sm hover:text-[#3cb371]">Entrar</a>
            <a href="https://my.resolu.app/cadastro" onClick={() => setMenuOpen(false)} className="px-4 py-2 bg-[#3cb371] text-white rounded-full text-sm font-medium hover:bg-[#2e8b57] text-center">
              Criar conta
            </a>
          </div>
        )}
      </header>

      <main className="pt-20">
        {/* Hero */}
        <section className="container mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3cb371]/10 text-[#3cb371] text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>O novo padrão para planejamento anual</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-b from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
            Transforme suas resoluções em realidade
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
            Planeje e acompanhe seus objetivos em todas as áreas da vida com o sistema estruturado de dimensões do Resolu.app.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://my.resolu.app/cadastro" className="px-8 py-4 bg-[#3cb371] text-white rounded-full font-medium hover:bg-[#2e8b57] flex items-center gap-2 inline-flex">
              Começar agora <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#features" className="px-8 py-4 border-2 border-slate-300 dark:border-slate-700 rounded-full font-medium hover:bg-slate-50 dark:hover:bg-slate-900 inline-block">
              Ver como funciona
            </a>
          </div>
        </section>

        {/* Dimensions */}
        <section id="features" className="py-20 bg-slate-50 dark:bg-slate-900/50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <h2 className="text-4xl font-bold mb-4">Equilíbrio em todas as áreas</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Organizamos seus objetivos em 6 dimensões fundamentais para garantir crescimento equilibrado.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dimensions.map((dim, i) => {
                const Icon = dim.icon
                return (
                  <div key={i} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-[#3cb371]/50 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-[#3cb371]/10 text-[#3cb371] flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{dim.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{dim.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* AI Section */}
        <section id="ia" className="py-20">
          <div className="container mx-auto px-6">
            <div className="bg-slate-950 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3cb371] opacity-10 blur-[120px] -mr-40 -mt-40" />
              
              <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3cb371]/20 text-[#3cb371] text-sm font-semibold mb-6">
                    <Sparkles className="w-4 h-4" />
                    <span>Powered by AI</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Seu assistente de IA para alcançar suas metas
                  </h2>
                  
                  <div className="space-y-4 text-slate-400">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3cb371] flex items-center justify-center mt-1">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <p><strong className="text-white">Divisão inteligente:</strong> O agente de IA ajuda você a dividir grandes metas em hábitos práticos e realizáveis.</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3cb371] flex items-center justify-center mt-1">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <p><strong className="text-white">Feedbacks semanais:</strong> Receba conselhos personalizados e ajustes baseados no seu progresso real.</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3cb371] flex items-center justify-center mt-1">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <p><strong className="text-white">Pequenos passos:</strong> Transforme objetivos ambiciosos em micro-tarefas diárias com auxílio inteligente.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#3cb371] to-emerald-400 flex items-center justify-center">
                      <Sparkles className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-white font-bold">Assistente Resolu</div>
                      <div className="text-[#3cb371] text-xs">Analista de Planejamento</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-white/10 p-4 rounded-2xl rounded-tl-none text-slate-200 text-sm">
                      Vi que você tem focado na <b>Saúde</b>. Um avanço de 80% em relação ao mês passado!
                    </div>
                    <div className="bg-[#3cb371]/20 p-4 rounded-2xl rounded-tr-none text-white text-sm ml-auto max-w-[80%]">
                      Obrigado pela informação!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Features */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">O que vem por aí</h2>
              <p className="text-slate-600 dark:text-slate-400">Estamos construindo ferramentas para tornar sua jornada ainda mais engajadora.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex gap-4 p-6 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center flex-shrink-0">
                  <Share2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-blue-600 bg-blue-500/20 px-2 py-0.5 rounded-full inline-block mb-2">Em breve</div>
                  <h3 className="text-lg font-bold mb-1">Compartilhamento Social</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Compartilhe seu quadro de objetivos com quem você ama e receba apoio mútuo.</p>
                </div>
              </div>
              
              <div className="flex gap-4 p-6 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-amber-600 bg-amber-500/20 px-2 py-0.5 rounded-full inline-block mb-2">Em breve</div>
                  <h3 className="text-lg font-bold mb-1">Competição Saudável</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Desafie amigos e família em hábitos saudáveis para manter a motivação.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="bg-[#3cb371] rounded-[3rem] p-12 md:p-20 text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto para transformar seu ano?</h2>
              <p className="text-white/80 mb-10 text-lg">Junte-se a milhares de pessoas que já estão planejando com intenção.</p>
              <a href="https://my.resolu.app/cadastro" className="px-10 py-5 bg-white text-[#3cb371] rounded-full font-medium hover:bg-slate-100 text-lg inline-block">
                Começar minha jornada grátis
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Resolu.app. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  )
}

export default App
