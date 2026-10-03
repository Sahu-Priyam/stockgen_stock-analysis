"use client";

import useTradingViewWidget from "@/hooks/use-trading-view-widget";

interface TradingViewWidgetProps {
  title?: string;
  scriptURL: string;
  config: Record<string, unknown>;
  height?: number;
  className?: string;
}

export default function TradingViewWidget({
  title,
  scriptURL,
  config,
  height = 600,
  className
}: TradingViewWidgetProps) {
  const containerRef = useTradingViewWidget(scriptURL, config, height);

  return (
    <div className={`w-full ${className || ""}`}>
      {title && (
        <h3 className="font-semibold text-2xl text-gray-100 mb-5">{title}</h3>
      )}
      <div className="tradingview-widget-container">
        <div ref={containerRef} className="tradingview-widget-container__widget"></div>
      </div>
    </div>
  );
}