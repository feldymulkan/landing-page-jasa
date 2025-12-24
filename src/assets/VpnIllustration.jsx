import React from 'react';

// Brand-colored VPN illustration: shield + lock + connection nodes
export default function VpnIllustration({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      role="img"
      aria-labelledby="title desc"
    >
      <title id="title">Ilustrasi VPN Remote</title>
      <desc id="desc">Perisai dengan gembok dan jalur koneksi terenkripsi.</desc>

      {/* Panel background */}
      <rect x="40" y="40" width="720" height="420" rx="20" fill="#0b2f5d" opacity="0.16" />
      <rect x="40" y="40" width="720" height="420" rx="20" stroke="#4F9CF9" strokeOpacity="0.15" />

      {/* Shield */}
      <path d="M400 110c60 30 120 26 160 46 0 128-60 186-160 230-100-44-160-102-160-230 40-20 100-16 160-46z" fill="#043873" />
      <path d="M400 130c50 27 100 24 133 39 0 104-50 152-133 188-83-36-133-84-133-188 33-15 83-12 133-39z" fill="#0e3f7e" />

      {/* Lock */}
      <rect x="360" y="210" width="80" height="70" rx="10" fill="#4F9CF9"/>
      <path d="M376 210v-18c0-20 16-36 36-36s36 16 36 36v18" stroke="#FFE492" strokeWidth="8"/>
      <circle cx="400" cy="245" r="8" fill="#043873" />

      {/* Encrypted connection lines */}
      <g stroke="#4F9CF9" strokeWidth="4" strokeLinecap="round">
        <path d="M140 360 C 260 300, 320 320, 360 270" opacity="0.7" />
        <path d="M660 360 C 540 300, 480 320, 440 270" opacity="0.7" />
        <path d="M140 260 C 280 240, 320 230, 360 230" opacity="0.3" />
        <path d="M660 260 C 520 240, 480 230, 440 230" opacity="0.3" />
      </g>

      {/* Nodes */}
      <g fill="#FFE492" opacity="0.9">
        <circle cx="140" cy="360" r="8" />
        <circle cx="200" cy="332" r="6" />
        <circle cx="660" cy="360" r="8" />
        <circle cx="600" cy="332" r="6" />
      </g>
    </svg>
  );
}
