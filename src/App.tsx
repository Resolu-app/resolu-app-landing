import { useState, useEffect } from 'react'
import {
  Target,
  Sparkles,
  ChevronRight,
  Menu,
  X,
  CheckCircle2,
  TrendingUp,
  Share2,
  PieChart,
  GitBranch,
  LineChart,
  ShieldCheck,
  Gift,
  Trophy
} from 'lucide-react'

const APP_URL = (import.meta.env.VITE_APP_URL ?? 'https://my.resolu.app').replace(/\/$/, '')
const SIGNUP_BASE = `${APP_URL}/cadastro`

function getSignupUrl(): string {
  if (typeof window === 'undefined') return SIGNUP_BASE
  const params = new URLSearchParams(window.location.search)
  const token = params.get('token') ?? params.get('invite') ?? params.get('code')
  if (!token) return SIGNUP_BASE
  return `${SIGNUP_BASE}?token=${encodeURIComponent(token)}`
}

function App() {
  const [signupUrl, setSignupUrl] = useState(SIGNUP_BASE)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setSignupUrl(getSignupUrl())

  }, [])

  const coreFeatures = [
    {
      icon: PieChart,
      title: '1. Dimensões & Foco',
      desc: 'Comece dividindo sua vida em áreas como Saúde, Carreira ou Família. Encontre de forma clara onde focar no seu ano.',
      colorClass: 'bg-[#3cb371]/10 text-[#3cb371]',
      borderClass: 'hover:border-[#3cb371]/50'
    },
    {
      icon: Target,
      title: '2. Definição de Objetivos',
      desc: 'Crie objetivos claros e audaciosos para cada dimensão. Estabeleça exatamente o que o sucesso significa para o seu ano de forma tangível.',
      colorClass: 'bg-blue-500/10 text-blue-500',
      borderClass: 'hover:border-blue-500/50'
    },
    {
      icon: GitBranch,
      title: '3. Quebra & Execução',
      desc: 'Desdobre os grandes objetivos em Metas atingíveis, Tarefas pontuais e, o mais importante, Hábitos recorrentes para automação do sucesso.',
      colorClass: 'bg-purple-500/10 text-purple-500',
      borderClass: 'hover:border-purple-500/50'
    },
    {
      icon: LineChart,
      title: '4. Dashboards de Hábitos',
      desc: 'Acompanhe seu progresso real com gráficos e dashboards diários. Marque seus check-ins de hábitos e veja a evolução macro acontecer.',
      colorClass: 'bg-amber-500/10 text-amber-500',
      borderClass: 'hover:border-amber-500/50'
    }
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
            <a href="#assistente-ia" className="text-sm hover:text-[#3cb371] font-semibold text-[#3cb371]">Assistente IA</a>
            <a href="#metodologia" className="text-sm hover:text-[#3cb371]">Metodologia & Ciência</a>
            <a href="#roadmap" className="text-sm hover:text-[#3cb371]">O que vem por aí</a>
            <span className="w-px h-4 bg-slate-300 dark:bg-slate-600 mx-1" aria-hidden />
            <a href={APP_URL} className="text-sm font-medium hover:text-[#3cb371] transition-colors">Entrar</a>
            <a href={signupUrl} className="px-5 py-2 text-sm font-medium text-white bg-[#3cb371] hover:bg-[#2e8b57] rounded-full transition-colors hidden lg:block">
              Começar Agora
            </a>
          </nav>

          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-sm" onClick={() => setIsMobileMenuOpen(false)}>Funcionalidades</a>
              <a href="#assistente-ia" className="text-sm font-semibold text-[#3cb371]" onClick={() => setIsMobileMenuOpen(false)}>Assistente IA</a>
              <a href="#metodologia" className="text-sm" onClick={() => setIsMobileMenuOpen(false)}>Metodologia & Ciência</a>
              <a href="#roadmap" className="text-sm" onClick={() => setIsMobileMenuOpen(false)}>O que vem por aí</a>
              <hr className="border-slate-200 dark:border-slate-800" />
              <a href={APP_URL} className="text-sm font-medium">Entrar na conta</a>
              <a href={signupUrl} className="px-5 py-2 text-sm font-medium text-white bg-[#3cb371] rounded-full text-center">
                Começar agora gratuitamente
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="pt-24 lg:pt-32">
        {/* Hero Section */}
        <section className="relative overflow-hidden pb-20">
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-[#3cb371] opacity-5 dark:opacity-10 blur-[120px] -translate-x-1/2 -translate-y-1/2" aria-hidden />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500 opacity-5 dark:opacity-10 blur-[100px]" aria-hidden />

          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-8 mt-10 md:mt-20">
              <Sparkles className="w-4 h-4 text-[#3cb371]" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Lançamento Oficial: O Novo Planejador Inteligente 2026
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight leading-tight max-w-4xl mx-auto">
              Para quem constrói o{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3cb371] to-emerald-400">futuro</span>
              {' '}no presente.
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
              Do objetivo à rotina: defina metas claras, crie hábitos e veja o resultado acumular com a nossa <strong className="text-[#3cb371]">ai-powered</strong> metodologia{' '}
              <span className="inline-flex items-center gap-1 font-bold tracking-tight text-xl pt-0.5" style={{ fontFamily: "'Comfortaa', sans-serif" }}>
                <svg
                  className="w-5 h-5 text-[#3cb371]"
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
              </span>{' '}
              de planejamento anual.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a href={signupUrl} className="w-full sm:w-auto px-8 py-4 bg-[#3cb371] text-white rounded-full font-medium hover:bg-[#2e8b57] transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-green-500/20">
                Criar uma conta gratuita
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#features" className="w-full sm:w-auto px-8 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                Como funciona
              </a>
            </div>
          </div>
        </section>

        {/* Dashboard Preview - Light base / Dark base */}
        <section className="pb-24 -mt-8 relative z-20">
          <div className="container mx-auto px-6">
            <div className="relative rounded-[2rem] bg-white dark:bg-[#0B1120] border border-slate-200 dark:border-slate-800 p-2 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-100/50 dark:from-slate-900/50 to-transparent rounded-[2rem] pointer-events-none" />

              <div className="bg-slate-50 dark:bg-slate-950 rounded-[1.75rem] border border-slate-200 dark:border-slate-800 overflow-hidden relative">
                {/* Fake browser header */}
                <div className="h-12 border-b border-slate-200 dark:border-slate-800 flex items-center px-4 gap-2 bg-slate-100 dark:bg-slate-900">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700" />
                    <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700" />
                    <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700" />
                  </div>
                  <div className="mx-auto bg-white dark:bg-slate-800 rounded-md px-32 py-1.5 text-xs text-slate-400 font-medium flex items-center justify-center border border-slate-200 dark:border-slate-700">
                    <span className="text-slate-900 dark:text-slate-100 tracking-[-0.03em] font-bold" style={{ fontFamily: "'Comfortaa', sans-serif" }}>resolu<span className="text-slate-400 dark:text-slate-500">.app</span></span>
                  </div>
                </div>

                {/* Dashboard layout */}
                <div className="flex flex-col md:flex-row h-[600px] overflow-hidden bg-slate-50 dark:bg-slate-950">
                  {/* Fake Sidebar */}
                  <div className="hidden md:flex flex-col w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
                    <div className="flex items-center gap-2 mb-8 px-2 mt-2">
                      <svg viewBox="-8 -5 115 110" className="w-6 h-6 text-[#3cb371]" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M 80,35 A 40,40 0 1,0 40,90" />
                        <polyline points="25,55 45,75 85,30" />
                      </svg>
                      <span className="font-bold">resolu</span>
                    </div>
                    <div className="space-y-1">
                      <div className="bg-[#3cb371]/10 text-[#3cb371] px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" /> Visão Geral
                      </div>
                      <div className="hover:bg-slate-100 dark:hover:bg-slate-800 px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2 text-slate-600 dark:text-slate-400">
                        <Target className="w-4 h-4" /> Objetivos
                      </div>
                      <div className="hover:bg-slate-100 dark:hover:bg-slate-800 px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2 text-slate-600 dark:text-slate-400">
                        <GitBranch className="w-4 h-4" /> Tarefas & Hábitos
                      </div>
                    </div>
                  </div>

                  {/* Fake Content Area */}
                  <div className="flex-1 p-6 md:p-8 bg-slate-50 dark:bg-slate-950 overflow-hidden relative">
                    <div className="flex justify-between items-end mb-8">
                      <div>
                        <h2 className="text-2xl font-bold mb-1">Bem-vindo(a) de volta 👋</h2>
                        <p className="text-slate-500 text-sm">Seu progresso esta semana está excelente.</p>
                      </div>
                      <div className="hidden sm:inline-flex px-3 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-xs font-medium text-slate-500">
                        Semana 42 / 2026
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                      {/* Metric cards */}
                      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <div className="text-slate-500 text-xs font-semibold mb-1 uppercase tracking-wider">Hábitos Concluídos</div>
                        <div className="text-2xl font-bold">24 <span className="text-sm font-normal text-slate-400">/ 30</span></div>
                        <div className="mt-2 text-xs text-[#3cb371] flex items-center gap-1"><TrendingUp className="w-3 h-3" /> +12% qto anterior</div>
                      </div>
                      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <div className="text-slate-500 text-xs font-semibold mb-1 uppercase tracking-wider">Metas Ativas</div>
                        <div className="text-2xl font-bold">5</div>
                        <div className="mt-2 text-xs text-slate-500">2 próximas do fim</div>
                      </div>
                      <div className="bg-[#3cb371] text-white p-4 rounded-xl relative overflow-hidden">
                        <div className="absolute -right-4 -bottom-4 opacity-20">
                          <Target className="w-24 h-24" />
                        </div>
                        <div className="relative z-10">
                          <div className="text-green-100 text-xs font-semibold mb-1 uppercase tracking-wider">Score Semanal</div>
                          <div className="text-3xl font-bold">A+</div>
                          <div className="mt-1 text-xs text-green-50">Você está no top 10%</div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {/* Dashboard skeleton items */}
                      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 h-64 flex flex-col">
                        <div className="text-sm font-bold mb-4">Seus Hábitos de Hoje</div>
                        <div className="space-y-3 flex-1">
                          {[
                            { title: 'Ler 20 páginas', tag: 'Desenvolvimento' },
                            { title: 'Treino de força (45min)', tag: 'Saúde' },
                            { title: 'Meditar', tag: 'Mentalidade' }
                          ].map((habit, i) => (
                            <div key={i} className="flex items-center justify-between p-3 border border-slate-100 dark:border-slate-800/60 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-default">
                              <div className="flex gap-3 items-center">
                                <div className={`w-5 h-5 rounded-md border-2 ${i === 0 ? 'bg-[#3cb371] border-[#3cb371]' : 'border-slate-300 dark:border-slate-600'} flex items-center justify-center`}>
                                  {i === 0 && <CheckCircle2 className="w-3 h-3 text-white" />}
                                </div>
                                <div className="text-sm font-medium">{habit.title}</div>
                              </div>
                              <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                                {habit.tag}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 h-64 flex flex-col">
                        <div className="flex justify-between items-center mb-4">
                          <div className="text-sm font-bold">Progresso das Metas</div>
                          <span className="text-xs text-[#3cb371] font-medium cursor-pointer">Ver todas</span>
                        </div>
                        <div className="space-y-5 mt-2">
                          {[
                            { title: 'Guardar fundo de emergência', perc: 65, color: 'bg-[#3cb371]' },
                            { title: 'Certificação AWS', perc: 30, color: 'bg-blue-500' },
                            { title: 'Correr 10km', perc: 85, color: 'bg-purple-500' }
                          ].map((meta, i) => (
                            <div key={i}>
                              <div className="flex justify-between text-xs mb-1.5">
                                <span className="font-medium">{meta.title}</span>
                                <span className="text-slate-500">{meta.perc}%</span>
                              </div>
                              <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                                <div className={`${meta.color} h-2 rounded-full`} style={{ width: `${meta.perc}%` }} />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Gradient overlay to fake scrolling content fading out */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 dark:from-slate-950 to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features Workflow */}
        <section id="features" className="py-20 bg-white dark:bg-slate-950">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-12 text-center mx-auto text-balance">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-2 md:gap-3 flex-wrap">
                Como o
                <span className="inline-flex items-center gap-1.5 font-bold tracking-tight text-3xl md:text-4xl pt-1" style={{ fontFamily: "'Comfortaa', sans-serif" }}>
                  <svg
                    className="w-7 h-7 md:w-9 md:h-9 text-[#3cb371]"
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
                </span>
                funciona
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Uma esteira completa de engenharia comportamental: do planejamento macro à execução diária de hábitos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreFeatures.map((feat, i) => {
                const Icon = feat.icon
                return (
                  <div key={i} className={`bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 transition-colors ${feat.borderClass} flex flex-col h-full`}>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${feat.colorClass}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{feat.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-1">
                      {feat.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section id="metodologia" className="bg-white dark:bg-slate-950 py-16 md:py-20 scroll-mt-24 border-t border-slate-100 dark:border-slate-800/60">
          <div className="container mx-auto px-6 mb-14 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 flex items-center justify-center gap-2 md:gap-3 flex-wrap text-slate-900 dark:text-white">
              A Ciência por trás do
              <span className="inline-flex items-center gap-1.5 font-bold tracking-tight text-3xl md:text-4xl pt-1" style={{ fontFamily: "'Comfortaa', sans-serif" }}>
                <svg
                  className="w-7 h-7 md:w-9 md:h-9 text-[#3cb371]"
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
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              Abandone a motivação vazia. Construímos o app baseados em estudos empíricos de comportamento humano.
            </p>
          </div>

          {/* Core Engine - Sistemas > Resultados */}
          <div id="sistemas" className="container mx-auto px-6 max-w-6xl">
            <div className="bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/50 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-200 dark:bg-emerald-800 opacity-20 blur-[80px] -mr-32 -mt-32" aria-hidden />

              <div className="inline-flex items-center justify-center p-3 bg-white dark:bg-slate-900 rounded-2xl shadow-sm mb-6 relative z-10 mx-auto">
                <Target className="w-8 h-8 text-emerald-500" />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900 dark:text-white relative z-10">
                Sistemas são maiores que objetivos
              </h3>

              <p className="text-slate-600 dark:text-slate-400 text-lg max-w-3xl mx-auto mb-8 relative z-10">
                Perdedores e vencedores têm os mesmos objetivos. A diferença está nos sistemas que constroem. No Resolu, o objetivo é apenas a bússola; <strong className="text-emerald-600 dark:text-emerald-400">os hábitos são a esteira de execução</strong>.
              </p>

              {/* James Clear Quote Block */}
              <blockquote className="bg-white/80 dark:bg-slate-900/80 backdrop-blur border border-slate-100 dark:border-slate-800 p-6 md:p-8 rounded-2xl max-w-4xl mx-auto text-left relative z-10 shadow-sm">
                <p className="text-lg md:text-xl font-semibold text-slate-700 dark:text-slate-300 leading-relaxed italic">
                  &quot;Unir Hábitos Atômicos(James Clear) à execução de OKRs(John Doerr) transforma metas ambiciosas em rotinas sustentáveis. O segredo: priorizar sistemas — os hábitos que você mantém — em vez de resultados isolados.&quot;
                </p>
                <div className="mt-3 text-sm text-[#3cb371] font-medium uppercase tracking-wider flex items-center gap-1.5">
                  Metodologia
                  <span className="inline-flex items-center gap-1 font-bold tracking-tight text-sm normal-case pt-0.5" style={{ fontFamily: "'Comfortaa', sans-serif" }}>
                    <svg
                      className="w-4 h-4 text-[#3cb371]"
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
                  </span>
                </div>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Assistente IA - Solo Section */}
        <section id="assistente-ia" className="py-16 md:py-20 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800/60 scroll-mt-24">
          <div className="container mx-auto px-6 flex items-center justify-center">
            <div className="w-full max-w-6xl">
              <div className="bg-emerald-50/50 dark:bg-slate-950 rounded-[3rem] p-8 md:p-16 relative overflow-hidden border border-emerald-100 dark:border-slate-800/60 shadow-sm dark:shadow-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3cb371] opacity-10 blur-[120px] -mr-40 -mt-40" />

                <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                  <div>
                    <div className="inline-flex items-center gap-3 mb-6 flex-wrap">
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3cb371]/10 dark:bg-[#3cb371]/25 text-[#3cb371] text-sm font-semibold">
                        <Sparkles className="w-4 h-4" />
                        <span>Powered by AI</span>
                      </div>
                      <span className="text-xs font-bold text-[#3cb371] bg-[#3cb371]/10 dark:bg-[#3cb371]/20 px-2.5 py-1 rounded-full border border-[#3cb371]/20 dark:border-[#3cb371]/40">
                        Em breve
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                      Seu assistente de IA para alcançar suas metas
                    </h3>

                    <div className="space-y-4 text-slate-600 dark:text-slate-400">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3cb371] flex items-center justify-center mt-1">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <p><strong className="text-slate-900 dark:text-white">Começo é sempre difícil:</strong> Transforme objetivos ambiciosos em metas quantitativas e realizáveis com auxílio de IA.</p>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3cb371] flex items-center justify-center mt-1">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <p><strong className="text-slate-900 dark:text-white">Divisão inteligente:</strong> O agente de IA ajuda você a construir hábitos semanais a partir das suas metas.</p>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3cb371] flex items-center justify-center mt-1">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <p><strong className="text-slate-900 dark:text-white">Feedbacks semanais:</strong> Receba conselhos personalizados e ajustes baseados no seu progresso real.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 rounded-3xl p-8 shadow-sm dark:shadow-none">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#3cb371] to-emerald-400 flex items-center justify-center">
                        <Sparkles className="text-white w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 font-bold tracking-tight" style={{ fontFamily: "'Comfortaa', sans-serif" }}>
                          Assistente
                          <span className="text-slate-900 dark:text-slate-100 tracking-[-0.03em]">resolu<span className="text-slate-400 dark:text-slate-500">.app</span></span>
                        </div>
                        <div className="text-[#3cb371] text-xs">Analista de Planejamento</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="bg-slate-100 dark:bg-white/10 p-4 rounded-2xl rounded-tl-none text-slate-700 dark:text-slate-200 text-sm">
                        Vi que você tem focado na <b>Saúde</b>. Um avanço de 80% em relação ao mês passado!
                      </div>
                      <div className="bg-[#3cb371]/10 dark:bg-[#3cb371]/20 p-4 rounded-2xl rounded-tr-none text-slate-800 dark:text-white text-sm ml-auto max-w-[80%]">
                        Obrigado pela informação!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* O que vem por aí: Comunidade */}
        <section id="roadmap" className="py-16 md:py-20 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800/60 scroll-mt-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900 dark:text-white">O que vem por aí</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                <strong className="text-blue-500">Comunidade</strong> para manter o engajamento na jornada com quem você mais importa.
              </p>
            </div>

            <div className="bg-blue-50/50 dark:bg-slate-950 rounded-[3rem] p-8 md:p-16 relative overflow-hidden border border-blue-100 dark:border-slate-800/60 shadow-sm dark:shadow-none">
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500 opacity-5 blur-[120px] -ml-40 -mb-40" />

              <div className="relative z-10">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-3 mb-6 justify-center flex-wrap">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-semibold">
                      <Share2 className="w-4 h-4" />
                      <span>Comunidade</span>
                    </div>
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-500/10 dark:bg-blue-500/20 px-2.5 py-1 rounded-full border border-blue-500/20 dark:border-blue-500/40">
                      Em planejamento
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Modo Família</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                    Ferramentas de engajamento para manter a motivação com quem importa.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                  <div className="flex flex-col gap-4 p-6 rounded-3xl bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none items-start">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center flex-shrink-0">
                      <Target className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Metas Compartilhadas</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">O esforço de todos conta. Crie metas conjuntas e vejam a barra de progresso encher com a colaboração da casa.</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 p-6 rounded-3xl bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none items-start">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-400 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Modo Guardião</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Assuma compromissos! Um familiar se torna seu &apos;Guardião&apos;, recebendo status semanais para te cobrar ou celebrar.</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 p-6 rounded-3xl bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none items-start">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-400 flex items-center justify-center flex-shrink-0">
                      <Gift className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Recompensas Familiares</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Atingiram 80% dos hábitos juntos? Destravem recompensas conjuntas, como a Noite da Pizza.</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 p-6 rounded-3xl bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none items-start">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center flex-shrink-0">
                      <Trophy className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Competição Saudável</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Desafie amigos e família em hábitos saudáveis para manter a motivação em alta.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer científico - base */}
        <section className="py-16 md:py-20 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800/60">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 text-slate-700 dark:text-slate-300 p-10 md:p-12 rounded-[3rem] shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
                <div>
                  <h4 className="text-[#3cb371] font-bold uppercase text-xs tracking-widest mb-4">A Tese</h4>
                  <p className="text-sm leading-relaxed">
                    Não somos um &quot;to-do list&quot;. Somos um sistema de engenharia comportamental que usa OKRs para alinhamento e Hábitos Atômicos para automação.
                  </p>
                </div>
                <div>
                  <h4 className="text-[#3cb371] font-bold uppercase text-xs tracking-widest mb-4">O Diferencial</h4>
                  <p className="text-sm leading-relaxed">
                    Ao priorizar sistemas sobre resultados, reduzimos a ansiedade de performance e aumentamos a taxa de sucesso anual em mais de 2x.
                  </p>
                </div>
                <div>
                  <h4 className="text-[#3cb371] font-bold uppercase text-xs tracking-widest mb-4">A Ciência</h4>
                  <p className="text-sm leading-relaxed">
                    Baseado em James Clear (Hábitos), John Doerr (OKRs) e Mihaly Csikszentmihalyi (Flow). Metodologia com 76% de validação empírica.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 text-center text-[10px] uppercase tracking-[0.5em] text-slate-500 dark:text-slate-500">
              <span className="inline-flex items-center gap-1 font-bold tracking-tight text-xs pt-0.5" style={{ fontFamily: "'Comfortaa', sans-serif" }}>
                <svg
                  className="w-3 h-3 text-[#3cb371]"
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
              </span>
              <span className="px-1.5">•</span> Strategic Personal Achievement
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-20 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800/60">
          <div className="container mx-auto px-6">
            <div className="bg-slate-50 dark:bg-slate-950 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden border border-slate-200 dark:border-0 shadow-sm dark:shadow-none">
              <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-[#3cb371] opacity-5 dark:opacity-10 blur-[100px] -translate-x-1/2 -translate-y-1/2" aria-hidden />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">Pronto para transformar seu ano?</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-10 text-lg">Junte-se a milhares de pessoas que já estão planejando com intenção.</p>
                <a href={signupUrl} className="px-10 py-5 bg-[#3cb371] text-white rounded-full font-medium hover:bg-[#2e8b57] text-lg inline-block">
                  Começar minha jornada grátis
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Resolu.app. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  )
}

export default App
