import React from 'react';

// Simple, brand-colored dashboard illustration (responsive SVG)
export default function DashboardIllustration({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="title desc"
    >
      <title id="title">Ilustrasi Dashboard System</title>
      <desc id="desc">Tampilan dashboard dengan sidebar, header, kartu KPI, dan grafik batang serta garis.</desc>

      {/* Colors (match Tailwind brand):
          brand-dark: #043873
          brand-primary: #4F9CF9
          brand-accent: #FFE492
      */}

      {/* Background panel */}
      <rect x="20" y="20" width="760" height="460" rx="16" fill="#0b2f5d" opacity="0.2" />
      <rect x="20" y="20" width="760" height="460" rx="16" stroke="#4F9CF9" strokeOpacity="0.15" />

      {/* Sidebar */}
      <rect x="40" y="40" width="120" height="420" rx="12" fill="#043873" />
      {/* Sidebar items */}
      <rect x="56" y="70" width="88" height="12" rx="6" fill="#4F9CF9" opacity="0.9" />
      <rect x="56" y="100" width="72" height="10" rx="5" fill="#4F9CF9" opacity="0.5" />
      <rect x="56" y="126" width="82" height="10" rx="5" fill="#4F9CF9" opacity="0.5" />
      <rect x="56" y="152" width="60" height="10" rx="5" fill="#4F9CF9" opacity="0.5" />
      <rect x="56" y="178" width="76" height="10" rx="5" fill="#4F9CF9" opacity="0.5" />
      <rect x="56" y="204" width="68" height="10" rx="5" fill="#4F9CF9" opacity="0.5" />

      {/* Header */}
      <rect x="180" y="40" width="580" height="48" rx="10" fill="#043873" />
      <rect x="196" y="56" width="160" height="16" rx="8" fill="#FFE492" opacity="0.9" />
      <rect x="368" y="56" width="110" height="16" rx="8" fill="#4F9CF9" opacity="0.7" />
      <circle cx="736" cy="64" r="8" fill="#FFE492" />

      {/* KPI cards */}
      <g>
        <rect x="180" y="108" width="176" height="88" rx="12" fill="#ffffff" fillOpacity="0.9" />
        <rect x="200" y="124" width="96" height="12" rx="6" fill="#043873" opacity="0.9" />
        <rect x="200" y="146" width="76" height="10" rx="5" fill="#4F9CF9" />
        <rect x="200" y="166" width="56" height="8" rx="4" fill="#A3C8FE" />

        <rect x="372" y="108" width="176" height="88" rx="12" fill="#ffffff" fillOpacity="0.9" />
        <rect x="392" y="124" width="96" height="12" rx="6" fill="#043873" opacity="0.9" />
        <rect x="392" y="146" width="76" height="10" rx="5" fill="#4F9CF9" />
        <rect x="392" y="166" width="56" height="8" rx="4" fill="#A3C8FE" />

        <rect x="564" y="108" width="196" height="88" rx="12" fill="#ffffff" fillOpacity="0.9" />
        <rect x="584" y="124" width="116" height="12" rx="6" fill="#043873" opacity="0.9" />
        <rect x="584" y="146" width="86" height="10" rx="5" fill="#4F9CF9" />
        <rect x="584" y="166" width="66" height="8" rx="4" fill="#A3C8FE" />
      </g>

      {/* Chart area */}
      <rect x="180" y="214" width="580" height="246" rx="14" fill="#ffffff" fillOpacity="0.9" />
      {/* Bars */}
      <g>
        <rect x="210" y="412" width="24" height="36" fill="#A3C8FE" />
        <rect x="246" y="392" width="24" height="56" fill="#4F9CF9" />
        <rect x="282" y="356" width="24" height="92" fill="#A3C8FE" />
        <rect x="318" y="324" width="24" height="124" fill="#4F9CF9" />
        <rect x="354" y="368" width="24" height="80" fill="#A3C8FE" />
        <rect x="390" y="340" width="24" height="108" fill="#4F9CF9" />
      </g>
      {/* Line chart */}
      <path d="M430 420 C 470 360, 510 360, 550 400 S 630 360, 700 340" stroke="#FFE492" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* Axes */}
      <line x1="196" y1="440" x2="740" y2="440" stroke="#E5EAF3" />
      <line x1="196" y1="260" x2="196" y2="440" stroke="#E5EAF3" />
    </svg>
  );
}
