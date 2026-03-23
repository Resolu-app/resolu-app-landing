import { useState, useEffect } from 'react';

// Extensão do tipo Window para o evento beforeinstallprompt
interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
  }
}

export function useInstallPrompt() {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isStandalone, setIsStandalone] = useState(false);
  const [isIos, setIsIos] = useState(false);

  useEffect(() => {
    // Detecta se já está instalado (modo standalone)
    const checkStandalone = () => {
      const isDisplayStandalone = window.matchMedia('(display-mode: standalone)').matches;
      setIsStandalone(isDisplayStandalone);
      
      // Se estiver instalado e for a landing page, redireciona para o app
      if (isDisplayStandalone) {
         window.location.href = import.meta.env.VITE_APP_URL || 'https://my.resolu.app/';
      }
    };

    checkStandalone();
    
    // Listener para o evento beforeinstallprompt (Android / Desktop)
    const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setInstallPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Detecta se é iOS Safari
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIos(isIosDevice && !isStandalone);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!installPrompt) {
      if (isIos) {
        // No iOS, não temos como disparar o prompt, mas o componente
        // consumidor deve exibir um Modal explicativo usando esse hook.
        return 'show_ios_modal';
      }
      return 'not_supported';
    }

    try {
      await installPrompt.prompt();
      const { outcome } = await installPrompt.userChoice;
      if (outcome === 'accepted') {
        setInstallPrompt(null);
      }
      return outcome;
    } catch (err) {
      console.error('Erro ao instalar app', err);
      return 'error';
    }
  };

  return {
    isInstallable: !!installPrompt || isIos,
    isIos,
    isStandalone,
    handleInstallClick,
  };
}
