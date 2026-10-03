"use client";

import { useEffect, useRef } from "react";

export default function useTradingViewWidget(
  scriptURL: string,
  config: Record<string, unknown>,
  height: number = 600
) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    if (containerRef.current.dataset.loaded) return;

    containerRef.current.innerHTML = "";
    containerRef.current.style.height = `${height}px`;
    containerRef.current.style.width = "100%";

    const script = document.createElement("script");
    script.src = scriptURL;
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify(config);

    containerRef.current.appendChild(script);
    containerRef.current.dataset.loaded = "true";

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
        delete containerRef.current.dataset.loaded;
      }
    };
  }, [scriptURL, config, height]);

  return containerRef;
}