export const navItems = [
  { label: "Dashboard", href: "/" },
  { label: "Search", href: "/search" },
  { label: "Watch List", href: "/watch-list" },
];
export const marketOverviewWidgetConfig = {
  colorTheme: "dark",
  dateRange: "12M",
  showChart: true,
  locale: "en",
  width: "100%",
  height: "100%",
  largeChartUrl: "",
  isTransparent: true,
  showSymbolLogo: true,
  showFloatingTooltip: false,
  tabs: [
    {
      title: "Indices",
      symbols: [
        { s: "FOREXCOM:SPXUSD", d: "S&P 500" },
        { s: "FOREXCOM:NSXUSD", d: "US 100" },
        { s: "FOREXCOM:DJI", d: "Dow 30" },
        { s: "INDEX:NKY", d: "Nikkei 225" },
        { s: "INDEX:DEU40", d: "DAX Index" },
        { s: "FOREXCOM:UKXGBP", d: "UK 100" }
      ],
      originalTitle: "Indices"
    }
  ]
};
export const heatMapWidgetConfig = {
  colorTheme: "dark",
  width: "100%",
  height: "100%",
  hasTopBar: false,
  isTransparent: true,
};

export const topStoriesWidgetConfig = {
  colorTheme: "dark",
  width: "100%",
  height: "100%",
  displayMode: "regular",
  isTransparent: true,
};

export const marketDataConfig = {
  colorTheme: "dark",
  width: "100%",
  height: "100%",
  isTransparent: true,
  showSymbolLogo: true,
  symbolsGroups: [
    {
      name: "Popular Stocks",
      symbols: [
        { name: "NASDAQ:AAPL", displayName: "Apple" },
        { name: "NASDAQ:MSFT", displayName: "Microsoft" },
        { name: "NASDAQ:TSLA", displayName: "Tesla" },
      ],
    },
  ],
};