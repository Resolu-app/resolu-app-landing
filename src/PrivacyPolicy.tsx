import { ArrowLeft, Lock, ShieldCheck, Eye, Mail } from 'lucide-react'

interface PrivacyPolicyProps {
  onBack: () => void
}

export function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200">
      {/* Top Navigation / Progress bar simulation */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-[#3cb371] dark:hover:text-[#3cb371] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para o Início</span>
          </button>
          
          <div className="flex items-center gap-1.5 font-bold tracking-tight text-lg" style={{ fontFamily: "'Comfortaa', sans-serif" }}>
            <span className="text-[#3cb371]">resolu</span>
            <span className="text-slate-400 dark:text-slate-500">.app</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Header Block */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-[#3cb371] opacity-5 blur-[100px] -z-10" />
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3cb371]/10 border border-[#3cb371]/20 text-[#3cb371] text-xs font-bold uppercase tracking-wider mb-6">
            <Lock className="w-3.5 h-3.5" />
            <span>Privacidade em Primeiro Lugar</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Política de Privacidade
          </h1>
          
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Esta política descreve como o <strong>Resolu.app</strong> trata seus dados pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD) e o nosso compromisso inegociável de segurança.
          </p>
          
          <div className="text-xs text-slate-400 dark:text-slate-500 mt-4">
            Última atualização: Junho de 2026
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white">Conformidade LGPD</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Garantia de todos os direitos previstos na Lei Federal nº 13.709/2018, incluindo direito de acesso, correção e exclusão de dados.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white">Privacidade Total (PIN)</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Seus dados criptografados localmente com chave derivada de um PIN que só você conhece. Nem nós conseguimos ler seus dados sensíveis.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white">Não Comercialização</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Seus dados de rotina, saúde e bem-estar pertencem estritamente a você. Nós nunca venderemos ou compartilharemos seus dados para fins comerciais.
            </p>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-10 shadow-sm space-y-10">
          
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-xl pb-2 border-b border-slate-100 dark:border-slate-800">
              <span className="text-[#3cb371] font-mono">1.</span> Quais dados nós coletamos?
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Para fornecer o sistema operacional de metas e o cálculo do Resolu Score, coletamos os seguintes tipos de informações:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <strong className="text-slate-800 dark:text-slate-200">Informações Cadastrais:</strong> Nome e endereço de e-mail (usado para autenticação por código OTP e comunicações operacionais).
              </li>
              <li>
                <strong className="text-slate-800 dark:text-slate-200">Dados de Objetivos, Hábitos e Tarefas:</strong> Descrição de suas metas de ano, rotinas de hábitos (ex: "ler 15 páginas"), frequência de realização e registros diários (check-ins).
              </li>
              <li>
                <strong className="text-slate-800 dark:text-slate-200">Integração de Saúde (Opcional):</strong> Se autorizado por você, coletamos métricas brutas dos sensores do seu celular através do Apple Health (iOS) ou Google Health Connect (Android), limitando-se a: passos diários, horas de sono, minutos de atividade física (treinos), peso corporal e consumo de água.
              </li>
              <li>
                <strong className="text-slate-800 dark:text-slate-200">Bem-Estar Subjetivo (Check-in Emocional):</strong> Registros informados por você contendo seu nível de energia e humor diário.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-xl pb-2 border-b border-slate-100 dark:border-slate-800">
              <span className="text-[#3cb371] font-mono">2.</span> Modo Privacidade Total: Zero-Knowledge
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Respeitamos profundamente a intimidade dos seus objetivos. Por isso, desenvolvemos o mecanismo de <strong className="text-slate-800 dark:text-slate-200">Privacidade Total</strong>:
            </p>
            <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/10 text-sm space-y-3">
              <p className="text-slate-700 dark:text-slate-300 font-medium">
                Como funciona a criptografia baseada em PIN:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600 dark:text-slate-400 text-xs">
                <li>Seus hábitos, tarefas, humor e notas são criptografados no seu dispositivo usando chaves derivadas do seu PIN pessoal de 6 dígitos.</li>
                <li>O PIN de 6 dígitos nunca é enviado à nossa API e nunca é salvo em nosso banco de dados.</li>
                <li>Os dados salvos em nossa nuvem permanecem criptografados com algoritmos padrão da indústria (HMAC-SHA256 e criptografia simétrica).</li>
                <li><strong className="text-amber-600 dark:text-amber-400">Importante:</strong> Não mantemos cópia da sua senha de PIN. Se você esquecer seu PIN, não conseguiremos decodificar nem recuperar seus dados criptografados.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-xl pb-2 border-b border-slate-100 dark:border-slate-800">
              <span className="text-[#3cb371] font-mono">3.</span> Como utilizamos seus dados?
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Seus dados têm utilidade exclusiva para apoiar sua própria jornada de consistência:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <strong className="text-slate-800 dark:text-slate-200">Cálculo de Score (Resolu Score):</strong> Avaliar estatisticamente seu progresso, constância, momentum e vitalidade biológica (esta última apenas quando integrado aos apps de saúde).
              </li>
              <li>
                <strong className="text-slate-800 dark:text-slate-200">Inteligência Artificial Personalizada:</strong> Criar roteiros de metas sob medida a partir do momento de vida que você nos informa durante o onboarding e recomendar pequenos ajustes na rotina de hábitos.
              </li>
              <li>
                <strong className="text-slate-800 dark:text-slate-200">Correlação de Produtividade:</strong> Ajudar você a entender como noites mal dormidas ou falta de exercícios afetam estatisticamente sua consistência em hábitos profissionais e de estudo.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-xl pb-2 border-b border-slate-100 dark:border-slate-800">
              <span className="text-[#3cb371] font-mono">4.</span> Direitos do Titular (LGPD)
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Você tem controle total sobre suas informações pessoais. Em conformidade com a LGPD, o Resolu garante:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <strong className="text-slate-800 dark:text-slate-200">Confirmação e Acesso:</strong> Você pode consultar todas as suas informações cadastradas a qualquer momento diretamente no aplicativo.
              </li>
              <li>
                <strong className="text-slate-800 dark:text-slate-200">Revogação de Consentimento:</strong> Desative a integração com Apple Health / Google Health Connect instantaneamente nas configurações de Preferências do aplicativo. Ao desativar, todas as permissões são revogadas.
              </li>
              <li>
                <strong className="text-slate-800 dark:text-slate-200">Direito de Exclusão (Esquecimento):</strong> Disponibilizamos um botão de "Excluir Conta" na tela de configurações da conta. Ao acioná-lo, todos os seus dados cadastrais, objetivos, hábitos, check-ins e histórico de saúde são eliminados de forma definitiva e imediata de todos os nossos servidores de produção.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-xl pb-2 border-b border-slate-100 dark:border-slate-800">
              <span className="text-[#3cb371] font-mono">5.</span> Compartilhamento de dados com terceiros
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              O Resolu <strong className="text-slate-950 dark:text-white">não compartilha nem vende</strong> seus dados de saúde ou objetivos para corretoras de seguros, anunciantes ou terceiros.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Seus dados biológicos e de rotina são processados exclusivamente na nossa infraestrutura em nuvem segura fornecida pela Microsoft Azure e, no caso de consultas de IA (sugestão de rotinas e feedbacks), os textos são processados pelo motor de IA Google Gemini, respeitando contratos rígidos de tratamento de dados que proíbem o uso de seus dados pessoais para treinamento público de modelos de terceiros.
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-xl pb-2 border-b border-slate-100 dark:border-slate-800">
              <span className="text-[#3cb371] font-mono">6.</span> Contato e Suporte de Privacidade
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Se você tiver dúvidas sobre esta política, sobre como tratamos seus dados pessoais, ou se desejar exercer qualquer um dos seus direitos, entre em contato diretamente pelo e-mail:
            </p>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 w-fit">
              <Mail className="w-5 h-5 text-[#3cb371]" />
              <a href="mailto:contato@resolu.app" className="text-sm font-semibold text-[#3cb371] hover:underline">
                contato@resolu.app
              </a>
            </div>
          </section>

        </div>

        {/* Back button at the bottom */}
        <div className="mt-12 text-center">
          <button
            onClick={onBack}
            className="px-6 py-3 bg-[#3cb371] text-white font-medium rounded-full hover:bg-[#2e8b57] transition-colors shadow-sm inline-flex items-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para a página inicial</span>
          </button>
        </div>

      </div>
    </div>
  )
}
