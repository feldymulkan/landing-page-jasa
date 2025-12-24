import React from 'react';

// Brand-colored RADIUS/Server illustration: racks + cloud + links
export default function RadiusIllustration({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      role="img"
      aria-labelledby="title desc"
    >
      <title id="title">Ilustrasi BeeRadius / Server Radius</title>
      <desc id="desc">Rak server terhubung dengan cloud melalui jalur jaringan.</desc>

      {/* Panel */}
      <rect x="40" y="40" width="720" height="420" rx="20" fill="#0b2f5d" opacity="0.16" />
      <rect x="40" y="40" width="720" height="420" rx="20" stroke="#4F9CF9" strokeOpacity="0.15" />

      {/* Server rack */}
      <g>
        <rect x="120" y="120" width="220" height="280" rx="12" fill="#043873" />
        {/* Trays */}
        {[0,1,2,3,4].map((i) => (
          <g key={i} transform={`translate(136 ${140 + i*52})`}>
            <rect width="188" height="36" rx="6" fill="#0e3f7e" />
            <rect x="10" y="10" width="60" height="8" rx="4" fill="#A3C8FE" />
            <circle cx="170" cy="18" r="5" fill="#FFE492" />
          </g>
        ))}
      </g>

      {/* Cloud */}
      <g>
        <ellipse cx="570" cy="180" rx="90" ry="50" fill="#ffffff" fillOpacity="0.92" />
        <ellipse cx="610" cy="170" rx="60" ry="38" fill="#ffffff" fillOpacity="0.92" />
        <ellipse cx="525" cy="170" rx="55" ry="32" fill="#ffffff" fillOpacity="0.92" />
        <rect x="500" y="160" width="140" height="50" fill="#ffffff" fillOpacity="0.92" />
        <rect x="500" y="160" width="140" height="50" fill="#4F9CF9" opacity="0.08" />
      </g>

      {/* Network links */}
      <g stroke="#4F9CF9" strokeWidth="4" strokeLinecap="round">
        <path d="M340 240 C 420 220, 460 220, 500 200" />
        <path d="M340 300 C 440 280, 480 250, 520 220" opacity="0.6" />
      </g>

      {/* Packets */}
      <g>
        <circle cx="440" cy="220" r="6" fill="#FFE492" />
        <circle cx="470" cy="210" r="5" fill="#FFE492" opacity="0.8" />
        <circle cx="455" cy="245" r="5" fill="#FFE492" opacity="0.8" />
      </g>
    </svg>
  );
}
