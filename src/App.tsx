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
  Trophy,
  LayoutDashboard,
  Target,
  Repeat,
  CalendarCheck,
  Zap,
  CircleDot,
  Flame,
  Clock,
  ChevronRight,
  CheckSquare,
  CalendarDays,
  Info
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
          {/* Logo Resolu Real */}
          <div className="flex items-center gap-1.5 font-bold tracking-tight text-xl" style={{ fontFamily: "'Comfortaa', sans-serif" }}>
            <svg
              className="w-6 h-6 text-[#3cb371]"
              viewBox="-8 -5 115 110"
              fill="none"
              stroke="currentColor"
              strokeWidth="12"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M 80,35 A 40,40 0 1,0 40,90" />
              <polyline points="25,55 45,75 85,30" />
            </svg>
            <span className="text-slate-900 dark:text-slate-100 tracking-[-0.03em]">resolu<span className="text-slate-400 dark:text-slate-500">.app</span></span>
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
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="https://my.resolu.app/cadastro" className="px-8 py-4 bg-[#3cb371] text-white rounded-full font-medium hover:bg-[#2e8b57] flex items-center gap-2 inline-flex">
              Começar agora <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#features" className="px-8 py-4 border-2 border-slate-300 dark:border-slate-700 rounded-full font-medium hover:bg-slate-50 dark:hover:bg-slate-900 inline-block">
              Ver como funciona
            </a>
          </div>

          {/* Mockup Preview - Interface Real do App */}
          <div className="mt-20 relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#3cb371] to-blue-500 rounded-[2.5rem] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity" />
            <div className="relative rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden flex flex-col h-[600px] md:h-[600px]">
              {/* Header Verde Real - muda para dark no dark mode */}
              <div className="h-12 md:h-14 bg-[#3cb371] dark:bg-slate-950 text-white dark:text-slate-100 flex items-center justify-between px-4 md:px-6 border-b border-[#3cb371]/20 dark:border-slate-800 shrink-0">
                <div className="flex items-center gap-3">
                  {/* Logo Resolu Real */}
                  <div className="flex items-center gap-1.5 font-bold tracking-tight text-xl" style={{ fontFamily: "'Comfortaa', sans-serif" }}>
                    <svg
                      className="w-6 h-6 text-[#3cb371]"
                      viewBox="-8 -5 115 110"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="12"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M 80,35 A 40,40 0 1,0 40,90" />
                      <polyline points="25,55 45,75 85,30" />
                    </svg>
                    <span className="text-white dark:text-slate-100 tracking-[-0.03em]">resolu.app</span>
                  </div>
                </div>
                <nav className="hidden md:flex items-center gap-2">
                  <div className="px-3 py-2 rounded-lg bg-white/20 dark:bg-[#3cb371]/20 dark:text-[#3cb371] dark:border-l-2 dark:border-[#3cb371] text-xs font-medium dark:font-semibold flex items-center gap-2">
                    <LayoutDashboard className="w-3.5 h-3.5" />
                    Visão geral
                  </div>
                  <div className="px-3 py-2 rounded-lg text-white/70 dark:text-slate-300/70 dark:hover:bg-slate-800 dark:hover:text-slate-100 text-xs font-medium hover:bg-white/10 flex items-center gap-2">
                    <Target className="w-3.5 h-3.5" />
                    Objetivos
                  </div>
                  <div className="px-3 py-2 rounded-lg text-white/70 dark:text-slate-300/70 dark:hover:bg-slate-800 dark:hover:text-slate-100 text-xs font-medium hover:bg-white/10 flex items-center gap-2">
                    <Repeat className="w-3.5 h-3.5" />
                    Hábitos
                  </div>
                  <div className="px-3 py-2 rounded-lg text-white/70 dark:text-slate-300/70 dark:hover:bg-slate-800 dark:hover:text-slate-100 text-xs font-medium hover:bg-white/10 flex items-center gap-2">
                    <CalendarCheck className="w-3.5 h-3.5" />
                    Check-ins
                  </div>
                </nav>
                <div className="w-8 h-8 rounded-full bg-white/20 dark:bg-slate-800 dark:text-slate-100 flex items-center justify-center text-xs font-semibold">RC</div>
              </div>
              
              {/* Dashboard Content */}
              <div className="p-3 md:p-6 flex-1 flex flex-col overflow-hidden bg-slate-50 dark:bg-slate-950">
                {/* Greeting */}
                <div className="flex items-center justify-between mb-2 md:mb-4">
                  <h1 className="text-sm md:text-lg font-semibold">Bom dia, Maria!</h1>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="hidden md:inline">Ano:</span>
                    <div className="px-2 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded text-xs">2025</div>
                  </div>
                </div>

                {/* Dashboard Stats - 6 Cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-1.5 md:gap-3 mb-2 md:mb-4">
                  {[
                    { icon: Zap, label: 'Check-ins hoje', value: '8', color: 'text-blue-600' },
                    { icon: CheckCircle2, label: 'Check-ins na semana', value: '24', color: 'text-green-600' },
                    { icon: CircleDot, label: 'Hábitos sem check-in', value: '2', color: 'text-amber-600' },
                    { icon: Target, label: 'Marcos em Janeiro', value: '3', color: 'text-purple-600' },
                    { icon: Flame, label: 'Sequência', value: '12 dias', color: 'text-orange-600' },
                    { icon: Clock, label: 'Última atividade', value: 'há 2h', color: 'text-slate-600' },
                  ].map((stat, i) => {
                    const Icon = stat.icon
                    return (
                      <div key={i} className="flex items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-2 md:p-3 shadow-sm">
                        <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                          <Icon className={`w-3.5 h-3.5 md:w-4 md:h-4 ${stat.color}`} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 truncate">{stat.label}</p>
                          <p className={`text-sm md:text-base font-semibold ${stat.color} truncate`}>{stat.value}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Charts Row */}
                <div className="grid md:grid-cols-3 gap-2 md:gap-4 mb-2 md:mb-4 flex-1 min-h-0">
                  {/* Donut Chart */}
                  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3 md:p-4 flex items-center justify-center">
                    <div className="relative w-20 h-20 md:w-32 md:h-32">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle cx="50%" cy="50%" r="40%" fill="none" stroke="currentColor" strokeWidth="6" className="text-slate-200 dark:text-slate-800 md:strokeWidth-8" />
                        <circle cx="50%" cy="50%" r="40%" fill="none" stroke="currentColor" strokeWidth="6" className="md:strokeWidth-8 text-[#3cb371]" strokeDasharray={`${2 * Math.PI * 40} ${2 * Math.PI * 40}`} strokeDashoffset={`${2 * Math.PI * 40 * 0.35}`} strokeLinecap="round" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-sm md:text-xl font-bold text-[#3cb371]">35%</div>
                          <div className="text-[9px] md:text-xs text-slate-500">Marcos</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Week Progress Chart */}
                  <div className="md:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-2 md:p-4 flex flex-col min-h-0">
                    <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2">
                      <CalendarDays className="w-3 h-3 md:w-3.5 md:h-3.5 text-slate-500" />
                      <h3 className="text-[10px] md:text-xs font-semibold uppercase text-slate-500">Semana atual</h3>
                      <Info className="w-2.5 h-2.5 md:w-3 md:h-3 text-slate-400 hidden md:block" />
                    </div>
                    <div className="space-y-1 md:space-y-2 flex-1 min-h-0">
                      {dimensions.slice(0, 3).map((dim, i) => {
                        const Icon = dim.icon
                        const progress = [75, 60, 90][i]
                        return (
                          <div key={i} className="flex items-center gap-1.5 md:gap-2">
                            <div className="w-5 h-5 md:w-6 md:h-6 rounded bg-[#3cb371]/10 flex items-center justify-center shrink-0">
                              <Icon className="w-2.5 h-2.5 md:w-3 md:h-3 text-[#3cb371]" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-0.5 md:mb-1">
                                <span className="text-[9px] md:text-[10px] text-slate-600 dark:text-slate-400 truncate">{dim.title}</span>
                                <span className="text-[9px] md:text-[10px] font-semibold text-[#3cb371] ml-1">{progress}%</span>
                              </div>
                              <div className="h-1 md:h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-[#3cb371] rounded-full" style={{ width: `${progress}%` }} />
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                    <button className="mt-1.5 md:mt-3 w-full flex items-center justify-center gap-1 rounded-lg border border-dashed border-slate-300 dark:border-slate-700 py-1 md:py-1.5 text-[9px] md:text-xs text-slate-500 hover:border-[#3cb371] hover:text-[#3cb371] transition-colors">
                      <CheckSquare className="w-2.5 h-2.5 md:w-3 md:h-3" />
                      <span className="hidden md:inline">Registrar check-in</span>
                      <span className="md:hidden">Check-in</span>
                    </button>
                  </div>
                </div>

                {/* Link to Objetivos */}
                <div className="hidden md:flex items-center gap-1.5 text-xs text-[#3cb371] font-medium mt-auto">
                  Ver detalhes em Objetivos
                  <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            </div>
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
        <section className="pt-12 pb-20">
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
