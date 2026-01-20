let deferredPrompt: any = null;

export const initPWAInstall = () => {
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault(); // ❌ stop auto popup
    deferredPrompt = e;
  });
};

export const showInstallPrompt = async () => {
  if (!deferredPrompt) return false;

  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  deferredPrompt = null;

  return outcome === "accepted";
};
