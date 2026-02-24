import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    Chart?: new (ctx: CanvasRenderingContext2D, config: object) => { destroy: () => void }
  }
}

export function CompoundingChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current || !window.Chart) return
    const ctx = canvasRef.current.getContext('2d')
    if (!ctx) return

    const chart = new window.Chart!(ctx, {
      type: 'line',
      data: {
        labels: ['Mês 1', 'Mês 2', 'Mês 3', 'Mês 4', 'Mês 5', 'Mês 6'],
        datasets: [
          {
            label: 'Esforço (Hábitos)',
            data: [90, 92, 91, 95, 94, 96],
            borderColor: '#3b82f6',
            borderWidth: 2,
            fill: false,
            tension: 0.4,
          },
          {
            label: 'Resultado (KR)',
            data: [2, 8, 15, 30, 60, 95],
            borderColor: '#10b981',
            borderWidth: 4,
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            fill: true,
            tension: 0.2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom', labels: { boxWidth: 12, font: { size: 10 } } },
        },
        scales: { y: { beginAtZero: true, max: 100 } },
      },
    })

    return () => chart.destroy()
  }, [])

  return (
    <div className="relative w-full max-w-[600px] mx-auto h-[320px]">
      <canvas ref={canvasRef} />
    </div>
  )
}

export function RetentionChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current || !window.Chart) return
    const ctx = canvasRef.current.getContext('2d')
    if (!ctx) return

    const chart = new window.Chart!(ctx, {
      type: 'bar',
      data: {
        labels: [
          ['Lista de', 'Desejos'],
          ['OKRs', 'Isolados'],
          ['Resolu (OKRs', '+ Hábitos)'],
        ],
        datasets: [
          {
            label: '% Sucesso Anual',
            data: [35, 52, 76],
            backgroundColor: ['#94a3b8', '#3b82f6', '#10b981'],
            borderRadius: 10,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true, max: 100 } },
      },
    })

    return () => chart.destroy()
  }, [])

  return (
    <div className="relative w-full max-w-[600px] mx-auto h-[320px]">
      <canvas ref={canvasRef} />
    </div>
  )
}

/** Diagrama do modelo de Flow: imagem estática para boa legibilidade */
export function FlowDiagram() {
  return (
    <div className="w-full max-w-md mx-auto flex items-center justify-center">
      <img
        src="/flow-diagram.png"
        alt="Diagrama do Canal de Flow: eixo Habilidade (hábitos) e eixo Desafio (KRs), com a faixa verde do Flow no centro; zonas Ansiedade e Tédio nas extremidades."
        className="w-full h-auto rounded-xl shadow-md object-contain"
        width={480}
        height={400}
      />
    </div>
  )
}
