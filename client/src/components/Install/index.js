import React, { useEffect, useState } from "react";
const Install = () => {
  const [promptInstall, setPromptInstall] = useState(null);
  useEffect(() => {
    const handler = e => {
      e.preventDefault();
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("transitionend", handler);
  }, []);
  const onClick = evt => {
    evt.preventDefault();
    if (!promptInstall) {
      const isAppInstalled = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
      if (isAppInstalled) {
        window.location.href = '/';
      }
      return;
    }
    promptInstall.prompt();
  };
  return (
    <button
      className="link-button"
      id="setup_button"
      aria-label="Install app"
      title="Install app"
      onClick={onClick}
    >
      Install
    </button>
  );
};
export default Install;