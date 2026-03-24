import { useState, useMemo, useEffect } from 'react'
import { appInsights } from './lib/appInsights'
import { CompoundingChart, RetentionChart, FlowDiagram } from './ScientificCharts'
import {
  Sun,
  Moon,
  Laptop,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Share2,
  LayoutDashboard,
  Target,
  Repeat,
  CalendarCheck,
  Zap,
  CircleDot,
  Flame,
  Clock,
  ChevronRight,
  ChevronDown,
  CheckSquare,
  CalendarDays,
  Info,
  ShieldCheck,
  Gift,
  Trophy,
  Apple,
  LayoutGrid,
  LineChart
} from 'lucide-react'

const APP_URL = (import.meta.env.VITE_APP_URL ?? 'https://my.resolu.app').replace(/\/$/, '')
const SIGNUP_BASE = `${APP_URL}/onboarding`

function getSignupUrl(): string {
  if (typeof window === 'undefined') return SIGNUP_BASE
  const params = new URLSearchParams(window.location.search)
  const token = params.get('token') ?? params.get('invite') ?? params.get('code')
  if (!token) return SIGNUP_BASE
  return `${SIGNUP_BASE}?token=${encodeURIComponent(token)}`
}

function ResoluLogo({ className = "w-6 h-6 text-[#3cb371]" }: { className?: string }) {
  return (
    <svg
      className={className}
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
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const signupUrl = useMemo(getSignupUrl, [])

  useEffect(() => {
    const connectionString = import.meta.env.VITE_APPINSIGHTS_CONNECTION_STRING
    if (typeof connectionString === 'string' && connectionString.length > 0) {
      appInsights.trackPageView({ name: 'Landing Page' })
    }
  }, [])


  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('resolu-theme') as 'light' | 'dark' | 'system') || 'system'
    }
    return 'system'
  })

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      root.classList.add(systemTheme)
    } else {
      root.classList.add(theme)
    }

    localStorage.setItem('resolu-theme', theme)
  }, [theme])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      if (theme === 'system') {
        const root = window.document.documentElement
        root.classList.remove('light', 'dark')
        root.classList.add(mediaQuery.matches ? 'dark' : 'light')
      }
    }
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [theme])

  const coreFeatures = [
    {
      icon: LayoutGrid,
      title: '1. Foco & Equilíbrio',
      desc: 'Divida sua vida nas áreas que mais importam para você. Crescimento equilibrado entre carreira, saúde, finanças e espiritualidade.',
      colorClass: 'bg-emerald-500/10 text-emerald-500',
      borderClass: 'hover:border-emerald-500/50'
    },
    {
      icon: Repeat,
      title: '2. Sistemas de Conquista',
      desc: 'Desdobre grandes objetivos em hábitos atômicos. No Resolu, o sucesso não é um evento, é um sistema diário.',
      colorClass: 'bg-blue-500/10 text-blue-500',
      borderClass: 'hover:border-blue-500/50'
    },
    {
      icon: Zap,
      title: '3. Vitalidade & Saúde',
      desc: 'Monitore o tripé da longevidade: sono, alimentação e exercício. Saiba exatamente como sua biologia afeta sua performance.',
      colorClass: 'bg-purple-500/10 text-purple-500',
      borderClass: 'hover:border-purple-500/50'
    },
    {
      icon: LineChart,
      title: '4. Score Resolu AI',
      desc: 'Nossa inteligência correlaciona seu progresso e vitalidade. Insights automáticos para você nunca perder o momentum.',
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
          <a href="#" className="flex items-center gap-1.5 font-bold tracking-tight text-xl transition-opacity hover:opacity-80" style={{ fontFamily: "'Comfortaa', sans-serif" }}>
            <ResoluLogo className="w-6 h-6 text-[#3cb371]" />
            <span className="text-slate-900 dark:text-slate-100 tracking-[-0.03em]">resolu<span className="text-slate-400 dark:text-slate-500">.app</span></span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm hover:text-[#3cb371]">Metodologia</a>
            <a href="#score-resolu" className="text-sm hover:text-[#3cb371]">Score AI</a>
            <a href="#assistente-ia" className="text-sm hover:text-[#3cb371]">Assistente IA</a>
            <a href="#bem-estar" className="text-sm hover:text-[#3cb371]">Bem-Estar</a>
            <span className="w-px h-4 bg-slate-300 dark:bg-slate-600 mx-1" aria-hidden />
            <a href={`${APP_URL}/login`} className="text-sm hover:text-[#3cb371]">Entrar</a>
            <a href={signupUrl} className="px-4 py-2 bg-[#3cb371] text-white rounded-full text-sm font-medium hover:bg-[#2e8b57] inline-block">
              Criar conta
            </a>
            <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-900 rounded-full p-1 ml-2 border border-slate-200 dark:border-slate-800">
              <button
                onClick={() => setTheme('light')}
                className={`p-1.5 rounded-full transition-colors ${theme === 'light' ? 'bg-white text-amber-500 shadow-sm' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'}`}
                title="Claro"
              >
                <Sun className="w-4 h-4" />
              </button>
              <button
                onClick={() => setTheme('system')}
                className={`p-1.5 rounded-full transition-colors ${theme === 'system' ? 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 shadow-sm' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'}`}
                title="Sistema"
              >
                <Laptop className="w-4 h-4" />
              </button>
              <button
                onClick={() => setTheme('dark')}
                className={`p-1.5 rounded-full transition-colors ${theme === 'dark' ? 'bg-slate-800 text-blue-400 shadow-sm' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'}`}
                title="Escuro"
              >
                <Moon className="w-4 h-4" />
              </button>
            </div>
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
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-xl border-b border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-3">
            <a href="#features" onClick={() => setMenuOpen(false)} className="p-3 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-[#3cb371] transition-colors">Metodologia</a>
            <a href="#score-resolu" onClick={() => setMenuOpen(false)} className="p-3 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-[#3cb371] transition-colors">Score AI</a>
            <a href="#assistente-ia" onClick={() => setMenuOpen(false)} className="p-3 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-[#3cb371] transition-colors">Assistente IA</a>
            <a href="#bem-estar" onClick={() => setMenuOpen(false)} className="p-3 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-[#3cb371] transition-colors">Bem-Estar</a>
            <div className="border-t border-slate-200 dark:border-slate-800 my-2" />

            <div className="flex items-center justify-between p-3">
              <span className="text-sm font-medium text-slate-500">Tema</span>
              <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-900 rounded-full p-1 border border-slate-200 dark:border-slate-800">
                <button
                  onClick={() => setTheme('light')}
                  className={`p-2 rounded-full transition-colors ${theme === 'light' ? 'bg-white text-amber-500 shadow-sm' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'}`}
                >
                  <Sun className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setTheme('system')}
                  className={`p-2 rounded-full transition-colors ${theme === 'system' ? 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 shadow-sm' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'}`}
                >
                  <Laptop className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setTheme('dark')}
                  className={`p-2 rounded-full transition-colors ${theme === 'dark' ? 'bg-slate-800 text-blue-400 shadow-sm' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'}`}
                >
                  <Moon className="w-4 h-4" />
                </button>
              </div>
            </div>

            <a href={`${APP_URL}/login`} onClick={() => setMenuOpen(false)} className="p-3 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-[#3cb371] transition-colors">Entrar</a>
            <a href={signupUrl} onClick={() => setMenuOpen(false)} className="mt-2 px-4 py-3 bg-[#3cb371] text-white rounded-full text-sm font-medium hover:bg-[#2e8b57] text-center shadow-md">
              Criar conta
            </a>
          </div>
        )}
      </header>

      <main className="pt-20 bg-white dark:bg-slate-950">
        {/* Hero - base */}
        <section className="container mx-auto px-6 py-20 text-center bg-white dark:bg-slate-950">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3cb371]/10 text-[#3cb371] text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>O novo padrão para planejamento anual</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-b from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
            A ciência da conquista e do bem-estar
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
            Vá além das listas de tarefas. Una <strong className="text-[#3cb371]">foco implacável</strong> em metas com o cuidado científico do seu bem-estar através de uma plataforma <strong className="text-[#3cb371]">ai-powered</strong>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href={signupUrl} className="px-8 py-4 bg-[#3cb371] text-white rounded-full font-medium hover:bg-[#2e8b57] flex items-center gap-2 inline-flex">
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
                    <ResoluLogo className="w-6 h-6 text-[#3cb371]" />
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
                          <div className="text-xl md:text-3xl font-bold text-[#3cb371]">84</div>
                          <div className="text-[9px] md:text-xs text-slate-500 font-semibold uppercase tracking-wider">Score</div>
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
                      {coreFeatures.slice(0, 3).map((feat, i) => {
                        const Icon = feat.icon
                        const progress = [75, 60, 90][i]
                        return (
                          <div key={i} className="flex items-center gap-1.5 md:gap-2">
                            <div className="w-5 h-5 md:w-6 md:h-6 rounded bg-[#3cb371]/10 flex items-center justify-center shrink-0">
                              <Icon className="w-2.5 h-2.5 md:w-3 md:h-3 text-[#3cb371]" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-0.5 md:mb-1">
                                <span className="text-[9px] md:text-[10px] text-slate-600 dark:text-slate-400 truncate">{feat.title.split('. ')[1] || feat.title}</span>
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

        {/* Core Features Workflow */}
        <section id="features" className="py-20 bg-white dark:bg-slate-950">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-12 text-center mx-auto text-balance">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-2 md:gap-3 flex-wrap">
                Como o
                <span className="inline-flex items-center gap-1.5 font-bold tracking-tight text-3xl md:text-4xl pt-1" style={{ fontFamily: "'Comfortaa', sans-serif" }}>
                  <ResoluLogo className="w-7 h-7 md:w-9 md:h-9 text-[#3cb371]" />
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
                  <div key={i} className={`bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 transition-colors ${feat.borderClass} shadow-sm dark:shadow-none flex flex-col`}>
                    <div className={`w-14 h-14 rounded-2xl ${feat.colorClass} flex items-center justify-center mb-6`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Score Resolu - Scientific Section */}
        <section id="score-resolu" className="py-20 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800/60 scroll-mt-24">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3cb371]/10 text-[#3cb371] text-xs font-bold uppercase tracking-wider mb-6">
                  <Zap className="w-3 h-3" />
                  <span>A Métrica Mestra</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
                  Conheça o seu <br /><span className="text-[#3cb371]">Score AI</span>
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  Diferente de apps que apenas contam tarefas, o Resolu utiliza uma <strong className="text-[#3cb371]">engine de inteligência artificial</strong> para medir seu desempenho holístico. O seu Score é o equilíbrio dinâmico entre conquista e vitalidade.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">30%</div>
                    <div className="text-sm font-semibold uppercase text-slate-500">Progresso</div>
                    <p className="text-xs text-slate-500">Alinhamento com seus grandes marcos anuais.</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">25%</div>
                    <div className="text-sm font-semibold uppercase text-slate-500">Constância</div>
                    <p className="text-xs text-slate-500">Sua disciplina em manter hábitos nos últimos 30 dias.</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">25%</div>
                    <div className="text-sm font-semibold uppercase text-[#3cb371]">Vitalidade</div>
                    <p className="text-xs text-slate-500">Como você está cuidando do seu sono e bem-estar emocional.</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">20%</div>
                    <div className="text-sm font-semibold uppercase text-blue-500">Momentum</div>
                    <p className="text-xs text-slate-500">Sua velocidade e tendência nos últimos 7 dias.</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-[#3cb371] opacity-10 blur-[100px] -z-10" />
                <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 p-8 md:p-12 shadow-2xl relative overflow-hidden">
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="relative w-48 h-48 md:w-64 md:h-64 mb-6">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle cx="50%" cy="50%" r="42%" fill="none" stroke="currentColor" strokeWidth="12" className="text-slate-100 dark:text-slate-800" />
                        <circle cx="50%" cy="50%" r="42%" fill="none" stroke="currentColor" strokeWidth="12" className="text-[#3cb371]" strokeDasharray="100 100" strokeDashoffset="15" strokeLinecap="round" style={{ strokeDasharray: 'calc(2 * 3.14 * 42%)', strokeDashoffset: 'calc(2 * 3.14 * 42% * (1 - 0.85))' }} />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white">85</span>
                        <span className="text-xs md:text-sm font-bold text-[#3cb371] uppercase tracking-widest mt-1">Ótimo Ritmo</span>
                      </div>
                    </div>
                    <div className="space-y-4 w-full">
                      <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800">
                        <span className="text-sm font-medium">Análise AI: Vitalidade subiu 12%</span>
                        <span className="text-xs font-bold text-emerald-500">+12 pts</span>
                      </div>
                      <p className="text-sm text-slate-500 italic">"Nossa IA detectou que seu foco em sono elevou sua constância nos hábitos em 25% esta semana."</p>
                    </div>
                  </div>
                </div>
              </div>
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
                    </div>


                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                      O cérebro por trás da sua evolução
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
                        <p>
                          <strong className="text-slate-900 dark:text-white">Feedbacks semanais:</strong> Receba conselhos personalizados e ajustes baseados no seu progresso real.
                          <span className="ml-2 inline-flex items-center text-[10px] font-bold text-[#3cb371] bg-[#3cb371]/10 dark:bg-[#3cb371]/20 px-1.5 py-0.5 rounded-full border border-[#3cb371]/20 dark:border-[#3cb371]/40 whitespace-nowrap">
                            Em breve
                          </span>
                        </p>

                      </div>
                    </div>
                  </div>

                  <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 rounded-3xl p-8 shadow-sm dark:shadow-none">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#3cb371] to-emerald-400 flex items-center justify-center">
                        <Sparkles className="text-white w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-slate-900 dark:text-white font-bold">Assistente Inteligente</div>
                        <div className="text-[#3cb371] text-xs">Analista de Planejamento</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="bg-slate-100 dark:bg-white/10 p-4 rounded-2xl rounded-tl-none text-slate-700 dark:text-slate-200 text-sm">
                        Vi que você focou em <b>Saúde</b> esta semana. Sua constância subiu 80% porque você priorizou o sono!
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

        {/* Bem-Estar - New Pillar - Redesigned for Premium Look */}
        <section id="bem-estar" className="py-24 bg-white dark:bg-slate-950 scroll-mt-24 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full -z-10" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full -z-10" />

          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
                <ShieldCheck className="w-3 h-3" />
                <span>Base Biológica</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
                O Tripé da Longevidade
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Sua biologia é o motor da sua performance. O Resolu monitora os três pilares que definem sua clareza mental e energia diária.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              {[
                {
                  icon: Moon,
                  title: 'Sono',
                  desc: 'A base da regulação hormonal. No Resolu, o sono é o primeiro passo para um dia de alta performance.',
                  color: 'blue',
                  gradient: 'from-blue-500 to-indigo-600',
                  bg: 'bg-blue-50 dark:bg-blue-500/5',
                  border: 'border-blue-100 dark:border-blue-500/20'
                },
                {
                  icon: Apple,
                  title: 'Alimentação',
                  desc: 'Combustível limpo para o seu cérebro. Controle inflamatório direto no seu dashboard de vitalidade.',
                  color: 'emerald',
                  gradient: 'from-emerald-500 to-teal-600',
                  bg: 'bg-emerald-50 dark:bg-emerald-500/5',
                  border: 'border-emerald-100 dark:border-emerald-500/20'
                },
                {
                  icon: Flame,
                  title: 'Movimento',
                  desc: 'Neurogênese e foco. O exercício é o catalisador que acelera seus resultados no Score AI.',
                  color: 'orange',
                  gradient: 'from-orange-500 to-red-600',
                  bg: 'bg-orange-50 dark:bg-orange-500/5',
                  border: 'border-orange-100 dark:border-orange-500/20'
                }
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <div
                    key={i}
                    className={`group p-10 rounded-[2.5rem] ${item.bg} border ${item.border} hover:shadow-2xl hover:shadow-${item.color}-500/10 transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden`}
                  >
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity blur-3xl`} />
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} text-white flex items-center justify-center mb-8 shadow-xl shadow-${item.color}-500/20 group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                      {item.desc}
                    </p>
                  </div>
                )
              })}
            </div>

            <div className="mt-20 p-1 md:p-1.5 rounded-[3.5rem] bg-gradient-to-r from-emerald-500/20 via-[#3cb371]/20 to-blue-500/20 shadow-2xl">
              <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-10 md:p-16 border border-white/50 dark:border-slate-800/50 backdrop-blur-3xl overflow-hidden relative">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#3cb371]/10 blur-[80px] rounded-full" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full" />

                <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                      <Sparkles className="w-3 h-3" />
                      <span>Análise Preditiva</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">Bem-Estar Emocional</h3>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                      Não é sobre "bom ou mau". Nossa IA mapeia o equilíbrio entre sua <strong className="text-slate-900 dark:text-white">Valência</strong> e sua <strong className="text-slate-900 dark:text-white">Ativação</strong> para prever seus picos de produtividade.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-sm font-semibold text-slate-700 dark:text-slate-300">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        </div>
                        <span>Correlação biológica automatizada</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm font-semibold text-slate-700 dark:text-slate-300">
                        <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-blue-500" />
                        </div>
                        <span>Previsão de burnout e tédio</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-950/50 border border-slate-100 dark:border-slate-800 shadow-inner">
                    <div className="space-y-8">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                          <span>Valência Emocional</span>
                          <span className="text-emerald-500">80% Positiva</span>
                        </div>
                        <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-full p-1 border border-slate-300 dark:border-slate-700 shadow-inner">
                          <div className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full shadow-lg shadow-emerald-500/20" style={{ width: '80%' }} />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                          <span>Nível de Energia / Ativação</span>
                          <span className="text-blue-500">65% Alta</span>
                        </div>
                        <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-full p-1 border border-slate-300 dark:border-slate-700 shadow-inner">
                          <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full shadow-lg shadow-blue-500/20" style={{ width: '65%' }} />
                        </div>
                      </div>

                      <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-center">
                        <div className="px-6 py-3 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                          <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 text-center uppercase tracking-widest">
                            Estado Atual: Fluxo / Motivado
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="metodologia" className="bg-white dark:bg-slate-950 py-16 md:py-20 scroll-mt-24 border-t border-slate-100 dark:border-slate-800/60">
          <div className="container mx-auto px-6 mb-14 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 flex items-center justify-center gap-2 md:gap-3 flex-wrap text-slate-900 dark:text-white">
              A Ciência por trás do
              <span className="inline-flex items-center gap-1.5 font-bold tracking-tight text-3xl md:text-4xl pt-1" style={{ fontFamily: "'Comfortaa', sans-serif" }}>
                <ResoluLogo className="w-7 h-7 md:w-9 md:h-9 text-[#3cb371]" />
                <span className="text-slate-900 dark:text-slate-100 tracking-[-0.03em]">resolu<span className="text-slate-400 dark:text-slate-500">.app</span></span>
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              Abandone a motivação vazia. Construímos o app baseados em estudos empíricos de comportamento humano.
            </p>
          </div>

          {/* Core Engine - Sistemas > Resultados */}
          <div id="sistemas" className="container mx-auto px-6 max-w-6xl scroll-mt-24">
            <div className="bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-10 shadow-sm dark:shadow-inner overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                <div className="lg:col-span-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3cb371]/10 text-[#3cb371] text-xs font-bold uppercase tracking-wider mb-5">
                    <span>Métrica Lead</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                    Identidade <span className="text-[#3cb371]">&gt;</span> Sistemas <span className="text-[#3cb371]">&gt;</span> Resultados
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                    A maioria falha porque foca apenas no <strong className="text-slate-700 dark:text-slate-300">Resultado (Metas)</strong>. No Resolu, unimos a execução de <strong className="text-[#3cb371]">hábitos</strong> à <strong className="text-[#3cb371]">identidade</strong>. Quando você pergunta &quot;o que uma pessoa saudável faria?&quot;, a vitalidade vira consequência.
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm border-l-2 border-[#3cb371]/50 pl-4 italic">
                    Quando o hábito vira rotina, a meta é consequência.
                  </p>
                </div>
                <div className="lg:col-span-7">
                  <div className="bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-600 shadow-inner">
                    <div className="flex flex-col items-center gap-1">
                      {/* Objetivo - Direção: tom frio em dark para destacar */}
                      <div className="w-full flex items-center gap-3 p-4 md:p-5 bg-slate-200/90 dark:bg-slate-700 border border-slate-300 dark:border-slate-500 rounded-2xl shadow-md">
                        <div className="w-10 h-10 rounded-xl bg-slate-400/30 dark:bg-sky-500/20 flex items-center justify-center shrink-0">
                          <Target className="w-5 h-5 text-slate-600 dark:text-sky-400" />
                        </div>
                        <div className="text-left min-w-0 flex-1">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-sky-400/90">Direção (Objetivo)</span>
                          <p className="text-base md:text-lg font-bold mt-0.5 text-slate-800 dark:text-slate-100">Conquistar Liberdade Física e Mental</p>
                        </div>
                      </div>
                      <ChevronDown className="w-5 h-5 text-slate-400 dark:text-slate-500 shrink-0" strokeWidth={2.5} />
                      {/* KRs */}
                      <div className="w-full flex items-center gap-3 p-4 md:p-5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/50 rounded-2xl">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
                        </div>
                        <div className="text-left min-w-0 flex-1">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700/80 dark:text-emerald-400/80">Validação (Metas)</span>
                          <p className="text-sm font-bold mt-0.5 text-emerald-800 dark:text-emerald-300">Correr Maratona em 4h • Perder 5kg de gordura</p>
                        </div>
                      </div>
                      <ChevronDown className="w-5 h-5 text-slate-400 dark:text-slate-500 shrink-0" strokeWidth={2.5} />
                      {/* Hábitos - destaque */}
                      <div className="w-full flex items-center gap-3 p-4 md:p-5 bg-[#3cb371]/15 dark:bg-[#3cb371]/20 border-2 border-[#3cb371]/40 dark:border-[#3cb371]/50 rounded-2xl shadow-md ring-2 ring-[#3cb371]/10">
                        <div className="w-10 h-10 rounded-xl bg-[#3cb371] flex items-center justify-center shrink-0">
                          <Repeat className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-left min-w-0 flex-1">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[#2e8b57] dark:text-[#3cb371]">Execução (Hábitos Atômicos)</span>
                          <p className="text-sm md:text-base font-bold mt-0.5 text-slate-800 dark:text-slate-200">Treinar 45min (Seg/Qua/Sex) • 10min Mobilidade diária</p>
                        </div>
                      </div>
                      <ChevronDown className="w-5 h-5 text-slate-400 dark:text-slate-500 shrink-0" strokeWidth={2.5} />
                      {/* Tarefas - Ativação: tom quente em dark para destacar */}
                      <div className="w-[85%] flex items-center gap-3 p-3 bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-500 rounded-xl">
                        <div className="w-8 h-8 rounded-lg bg-slate-400/20 dark:bg-amber-500/20 flex items-center justify-center shrink-0">
                          <CheckSquare className="w-4 h-4 text-slate-500 dark:text-amber-400" />
                        </div>
                        <div className="text-left min-w-0 flex-1">
                          <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500 dark:text-amber-400/90">Ativação (Tarefas)</span>
                          <p className="text-xs font-semibold mt-0.5 text-slate-600 dark:text-slate-300">Comprar suplementos • Agendar clínico</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Faixa: Citação + Sistemas > Resultados */}
          <div className="container mx-auto px-6 max-w-4xl mt-20">
            <blockquote className="border-l-4 border-[#3cb371] bg-white/80 dark:bg-slate-800/80 p-6 md:p-8 rounded-2xl shadow-sm">
              <p className="text-lg md:text-xl font-semibold text-slate-700 dark:text-slate-300 leading-relaxed italic">
                &quot;Unir a visão holística da Roda da Vida à execução dos OKRs e ao desenvolvimento de hábitos atômicos, sustentados pela ciência da longevidade e do bem-estar emocional, é o nosso diferencial.&quot;
              </p>
              <div className="mt-3 text-sm text-[#3cb371] font-medium uppercase tracking-wider flex items-center gap-1.5">
                Metodologia
                <span className="inline-flex items-center gap-1 font-bold tracking-tight text-sm normal-case pt-0.5" style={{ fontFamily: "'Comfortaa', sans-serif" }}>
                  <ResoluLogo className="w-4 h-4 text-[#3cb371]" />
                  <span className="text-slate-900 dark:text-slate-100 tracking-[-0.03em]">resolu<span className="text-slate-400 dark:text-slate-500">.app</span></span>
                </span>
              </div>
            </blockquote>
          </div>

          {/* Data Analytics - faixa */}
          <div className="container mt-20 mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 rounded-3xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Efeito Juros Compostos</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                  James Clear prova que 1% de melhoria diária gera resultados exponenciais. O Resolu torna o hábito <strong className="text-[#3cb371]">satisfatório</strong> ao mostrar o impacto imediato na sua vitalidade.
                </p>
                <CompoundingChart />
              </div>
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 rounded-3xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">A Retenção da Metodologia</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                  Comprovação da Dominican University: Objetivos escritos + Definição de Sistemas (Hábitos) + Check-in semanal geram 76% de sucesso contra 35% de listas simples.
                </p>
                <RetentionChart />
              </div>
            </div>
          </div>

          {/* A Convergência - mesma faixa que Ciência (metodologia), separada da IA */}
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="mt-20 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 rounded-3xl p-6 md:p-10 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
                <div className="md:col-span-5">
                  <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">A Convergência</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    No diagrama, a relação entre <strong>Habilidade</strong> (construída pelos hábitos) e <strong>Nível de Desafio</strong> (definido pelos KRs). No centro está o &quot;Canal de Flow&quot;.
                  </p>
                  <div className="mt-6 p-4 bg-green-50 dark:bg-green-950/30 rounded-xl border border-green-100 dark:border-green-900/50">
                    <p className="text-xs text-green-800 dark:text-green-300 font-medium">
                      <strong>Diferencial:</strong> Nós monitoramos seus hábitos semanais para garantir que você esteja sempre na zona de crescimento ideal, evitando o abandono por frustração ou monotonia.
                    </p>
                  </div>
                </div>
                <div className="md:col-span-7 flex items-center justify-center bg-slate-50/50 dark:bg-slate-800/30 rounded-2xl min-h-[280px] p-6">
                  <FlowDiagram />
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
        <section className="py-16 md:py-20 bg-white dark:bg-slate-950">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 text-slate-700 dark:text-slate-300 p-10 md:p-12 rounded-[3rem] shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
                <div>
                  <h4 className="text-[#3cb371] font-bold uppercase text-xs tracking-widest mb-4">A Tese</h4>
                  <p className="text-sm leading-relaxed">
                    Não somos um &quot;to-do list&quot;. Somos a convergência entre a visão da Roda da Vida, a precisão dos OKRs e a satisfação imediata dos hábitos atômicos.
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
                    Baseado na tríade: Paul J. Meyer (Visão Holística), John Doerr (Foco e Execução Corporativa) e James Clear (Microcomportamentos). Metodologia com 76% de validação empírica.
                  </p>
                </div>
              </div>
              <div className="mt-10 text-center text-[10px] tracking-[0.5em] text-slate-500 dark:text-slate-500">
                <span className="inline-flex items-center gap-1 font-bold tracking-tight text-xs pt-0.5" style={{ fontFamily: "'Comfortaa', sans-serif" }}>
                  <ResoluLogo className="w-3 h-3 text-[#3cb371]" />
                  <span className="text-slate-900 dark:text-slate-100 tracking-[-0.03em]">resolu<span className="text-slate-400 dark:text-slate-500">.app</span></span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA - mesmo fundo do card IA */}
        <section className="py-16 md:py-20 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800/60">
          <div className="container mx-auto px-6">
            <div className="bg-slate-50 dark:bg-slate-950 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden border border-slate-200 dark:border-0 shadow-sm dark:shadow-none">
              <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-[#3cb371] opacity-5 dark:opacity-10 blur-[100px] -translate-x-1/2 -translate-y-1/2" aria-hidden />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">A ciência da IA a serviço da sua vida</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-10 text-lg">Junte-se a quem já planeja com inteligência e vive com equilíbrio.</p>
                <a href={signupUrl} className="px-10 py-5 bg-[#3cb371] text-white rounded-full font-medium hover:bg-[#2e8b57] text-lg inline-block">
                  Começar agora — É grátis
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
