import type { ReactNode } from "react";

export function Icon({ name, className }: { name: string; className?: string }) {
  const paths: Record<string, ReactNode> = {
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></>,
    moon: <path d="M20.7 13.2A8.8 8.8 0 0 1 10.8 3.3a8.8 8.8 0 1 0 9.9 9.9Z" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    scales: <><path d="M12 3v17m-5 1h10M4 7h16M7 5l-3 2-3 7h6L4 7m13-2 3 2 3 7h-6l3-7" /><path d="M1 14a3 3 0 0 0 6 0m10 0a3 3 0 0 0 6 0" /></>,
    university: <><path d="m2 8 10-5 10 5H2Zm2 3v7m5-7v7m6-7v7m5-7v7M2 21h20M3 18h18" /><path d="M12 5.5v.01" /></>,
    building: <path d="M4 21V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v16M17 10h3v11M2 21h20M9 21v-4h3v4M8 7h1m3 0h1M8 11h1m3 0h1" />,
    globe: <><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18M4.5 7.5h15m-15 9h15" /></>,
    compass: <><circle cx="12" cy="12" r="9" /><path d="m16 8-2.5 5.5L8 16l2.5-5.5L16 8Z" /></>,
    ship: <path d="M12 3v13m-6-4V6h12v6M3 15l9-4 9 4-3 5M6 20l-3-5M9 6V3h6v3M2 21c1.7 1 3.3 1 5 0 1.7 1 3.3 1 5 0 1.7 1 3.3 1 5 0 1.7 1 3.3 1 5 0" />,
    laptop: <><rect x="4" y="4" width="16" height="12" rx="1" /><path d="m4 16-2 4h20l-2-4M9 20h6" /><circle cx="12" cy="10" r="3" /><path d="M9 10h6m-3-3v6" /></>,
    phone: <path d="M5 3h4l2 5-3 2a14 14 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A18 18 0 0 1 3 5a2 2 0 0 1 2-2Z" />,
    mail: <><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m3 6 9 7 9-7" /></>,
    chevron: <path d="m6 14 6-6 6 6" />,
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">{paths[name] ?? paths.globe}</svg>;
}
