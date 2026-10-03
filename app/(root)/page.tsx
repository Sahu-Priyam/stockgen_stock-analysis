import TradingViewWidget from "@/components/trading-view-widget";
import {
  marketOverviewWidgetConfig,
  heatMapWidgetConfig,
  topStoriesWidgetConfig,
  marketDataConfig,
} from "@/lib/constants";

const BASE = "https://s3.tradingview.com/external-embedding/embed-widget-";

// span: how many of the 3 columns the widget takes on large screens
const widgets = [
  { title: "Market Overview", script: "market-overview", config: marketOverviewWidgetConfig, span: "lg:col-span-1" },
  { title: "Stock Heatmap", script: "stock-heatmap", config: heatMapWidgetConfig, span: "lg:col-span-2" },
  { title: "Top Stories", script: "timeline", config: topStoriesWidgetConfig, span: "lg:col-span-1" },
  { title: "Market Quotes", script: "market-quotes", config: marketDataConfig, span: "lg:col-span-2" },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {widgets.map(({ title, script, config, span }) => (
          <div
            key={script}
            className={`${span} h-[600px] overflow-hidden rounded-xl border border-gray-700 bg-gray-800/40`}
          >
            <TradingViewWidget
              title={title}
              scriptURL={`${BASE}${script}.js`}
              config={config}
              height={600}
            />
          </div>
        ))}
      </section>
    </main>
  );
}