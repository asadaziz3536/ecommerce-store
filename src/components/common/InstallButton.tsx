import { useState, useEffect } from "react";

import { showInstallPrompt } from "@/pwa";

import { isMobile } from "@/utils/isMobile";
import { isPWA } from "@/utils/isPWA";
import { Button } from "../ui/button";

const InstallButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isMobile() && !isPWA()) {
      setShow(true);
    }
  }, []);

  if (!show) return null;
  return <Button onClick={() => showInstallPrompt()}>Install App</Button>;
};

export default InstallButton;
