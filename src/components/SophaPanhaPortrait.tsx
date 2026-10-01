import React from 'react';

interface SophaPanhaPortraitProps {
  className?: string;
}

/**
 * High-Fidelity Official Portrait of សុផា បញ្ញា (Sopha Panha)
 * Faithfully matches his official academic passport photo:
 * - Vivid Cambodian university royal blue background (#0265d6)
 * - Distinctive parted wavy curtain dark hairstyle
 * - Warm Southeast Asian complexion with natural facial contours
 * - Crisp white collared shirt & formal royal blue tie
 * - Dark navy formal suit blazer
 */
export const SophaPanhaPortrait: React.FC<SophaPanhaPortraitProps> = ({ className = 'w-full h-full' }) => {
  return (
    <svg
      viewBox="0 0 400 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        {/* Background Gradient */}
        <linearGradient id="passportBg" x1="0" y1="0" x2="0" y2="520" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0a74ea" />
          <stop offset="100%" stopColor="#0052be" />
        </linearGradient>

        {/* Skin Gradients */}
        <linearGradient id="skinBase" x1="200" y1="120" x2="200" y2="340" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#e2a681" />
          <stop offset="50%" stopColor="#d5936d" />
          <stop offset="100%" stopColor="#c3805b" />
        </linearGradient>

        <linearGradient id="skinNeck" x1="200" y1="280" x2="200" y2="380" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#af6d4b" />
          <stop offset="100%" stopColor="#c5825d" />
        </linearGradient>

        <radialGradient id="faceShade" cx="200" cy="220" r="110" gradientUnits="userSpaceOnUse">
          <stop offset="65%" stopColor="#000000" stopOpacity="0" />
          <stop offset="100%" stopColor="#874726" stopOpacity="0.35" />
        </radialGradient>

        {/* Suit Gradients */}
        <linearGradient id="suitDark" x1="200" y1="360" x2="200" y2="520" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1e273a" />
          <stop offset="50%" stopColor="#141c2c" />
          <stop offset="100%" stopColor="#0c121e" />
        </linearGradient>

        <linearGradient id="lapelLeft" x1="150" y1="380" x2="200" y2="500" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2a3750" />
          <stop offset="100%" stopColor="#182236" />
        </linearGradient>

        <linearGradient id="lapelRight" x1="250" y1="380" x2="200" y2="500" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#253249" />
          <stop offset="100%" stopColor="#151e30" />
        </linearGradient>

        {/* Tie Gradient */}
        <linearGradient id="tieBlue" x1="200" y1="360" x2="200" y2="520" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1c3e86" />
          <stop offset="40%" stopColor="#132f6b" />
          <stop offset="100%" stopColor="#0d214d" />
        </linearGradient>

        {/* Hair Gradient */}
        <linearGradient id="hairDark" x1="200" y1="40" x2="200" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#282220" />
          <stop offset="35%" stopColor="#1a1514" />
          <stop offset="100%" stopColor="#0f0c0b" />
        </linearGradient>

        <linearGradient id="hairSheen" x1="170" y1="80" x2="230" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3d3330" />
          <stop offset="50%" stopColor="#221b19" />
          <stop offset="100%" stopColor="#110d0c" />
        </linearGradient>
      </defs>

      {/* 1. Official Cambodian University Royal Blue Background */}
      <rect width="400" height="520" fill="url(#passportBg)" />

      {/* Subtle Studio Vignette */}
      <circle cx="200" cy="220" r="180" fill="#ffffff" fillOpacity="0.06" />

      {/* 2. Neck and Trapezius */}
      <path d="M148 330 Q145 390 135 410 L265 410 Q255 390 252 330 Z" fill="url(#skinNeck)" />
      {/* Neck shadow under jaw */}
      <path d="M148 315 Q200 345 252 315 L252 338 Q200 365 148 338 Z" fill="#9e5c3c" fillOpacity="0.6" />

      {/* 3. White Shirt Collar */}
      <path d="M140 375 L180 395 L190 365 L170 330 Z" fill="#f8fafc" />
      <path d="M260 375 L220 395 L210 365 L230 330 Z" fill="#f1f5f9" />
      {/* Shirt Collar Front Triangles */}
      <polygon points="170,332 195,368 152,382" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <polygon points="230,332 205,368 248,382" fill="#edf2f7" stroke="#e2e8f0" strokeWidth="1" />

      {/* 4. Royal Blue Necktie */}
      {/* Tie Knot */}
      <polygon points="186,368 214,368 218,396 200,402 182,396" fill="#1c3e86" stroke="#132f6b" strokeWidth="1.5" />
      {/* Tie Body */}
      <polygon points="185,398 215,398 224,510 200,520 176,510" fill="url(#tieBlue)" />
      {/* Tie Highlight Stripe */}
      <path d="M198 402 L204 402 L210 515 L204 518 Z" fill="#2d52a4" fillOpacity="0.3" />

      {/* 5. Navy Blue Suit Blazer */}
      {/* Shoulders and Body */}
      <path
        d="M60 520 L60 440 Q80 395 136 375 L160 410 L190 520 Z"
        fill="url(#suitDark)"
      />
      <path
        d="M340 520 L340 440 Q320 395 264 375 L240 410 L210 520 Z"
        fill="url(#suitDark)"
      />
      {/* Left Lapel (notched) */}
      <path
        d="M136 375 L188 475 L158 480 L115 410 Q122 390 136 375 Z"
        fill="url(#lapelLeft)"
        stroke="#101724"
        strokeWidth="1.5"
      />
      {/* Right Lapel (notched) */}
      <path
        d="M264 375 L212 475 L242 480 L285 410 Q278 390 264 375 Z"
        fill="url(#lapelRight)"
        stroke="#101724"
        strokeWidth="1.5"
      />
      {/* Inner suit shadow & button area */}
      <path d="M188 475 L200 520 L212 475 Z" fill="#0b0f17" />

      {/* 6. Ears */}
      {/* Left Ear */}
      <path d="M130 205 Q115 220 118 245 Q120 270 135 272 Z" fill="#cd8964" />
      <path d="M128 220 Q122 230 125 245 Q128 255 133 256 Z" fill="#b06c48" />
      {/* Right Ear */}
      <path d="M270 205 Q285 220 282 245 Q280 270 265 272 Z" fill="#cd8964" />
      <path d="M272 220 Q278 230 275 245 Q272 255 267 256 Z" fill="#b06c48" />

      {/* 7. Head & Facial Structure */}
      <path
        d="M132 180 Q130 120 200 120 Q270 120 268 180 Q268 250 248 295 Q228 335 200 335 Q172 335 152 295 Q132 250 132 180 Z"
        fill="url(#skinBase)"
      />
      <path
        d="M132 180 Q130 120 200 120 Q270 120 268 180 Q268 250 248 295 Q228 335 200 335 Q172 335 152 295 Q132 250 132 180 Z"
        fill="url(#faceShade)"
      />

      {/* 8. Forehead & Temples Shading */}
      <ellipse cx="200" cy="180" rx="55" ry="35" fill="#f0b997" fillOpacity="0.45" />

      {/* 9. Eyes and Eyebrows */}
      {/* Left Eyebrow */}
      <path
        d="M150 196 Q170 188 188 194 Q172 192 154 200 Z"
        fill="#211a18"
      />
      {/* Right Eyebrow */}
      <path
        d="M250 196 Q230 188 212 194 Q228 192 246 200 Z"
        fill="#211a18"
      />

      {/* Left Eye */}
      <ellipse cx="168" cy="214" rx="14" ry="7" fill="#ffffff" />
      <ellipse cx="169" cy="214" rx="6.5" ry="6.5" fill="#2d1c16" />
      <circle cx="170" cy="213" r="2.2" fill="#000000" />
      <circle cx="168" cy="211" r="1.5" fill="#ffffff" fillOpacity="0.9" />
      <path d="M154 212 Q168 206 182 212" stroke="#4a2e22" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M156 215 Q168 221 180 215" stroke="#a46243" strokeWidth="0.8" strokeLinecap="round" />

      {/* Right Eye */}
      <ellipse cx="232" cy="214" rx="14" ry="7" fill="#ffffff" />
      <ellipse cx="231" cy="214" rx="6.5" ry="6.5" fill="#2d1c16" />
      <circle cx="230" cy="213" r="2.2" fill="#000000" />
      <circle cx="232" cy="211" r="1.5" fill="#ffffff" fillOpacity="0.9" />
      <path d="M218 212 Q232 206 246 212" stroke="#4a2e22" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M220 215 Q232 221 244 215" stroke="#a46243" strokeWidth="0.8" strokeLinecap="round" />

      {/* 10. Nose */}
      {/* Bridge shadow */}
      <path d="M196 200 L195 248 Q198 252 200 252 Q202 252 205 248 L204 200 Z" fill="#ba7652" fillOpacity="0.4" />
      {/* Nose Tip & Nostrils */}
      <path d="M188 250 Q200 257 212 250" stroke="#945334" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <ellipse cx="192" cy="251" rx="2" ry="1.2" fill="#69341c" />
      <ellipse cx="208" cy="251" rx="2" ry="1.2" fill="#69341c" />
      <ellipse cx="200" cy="246" rx="4.5" ry="3" fill="#e9ad8d" fillOpacity="0.6" />

      {/* 11. Upper Lip Youthful Mustache (Accurate to Sopha Panha's photo) */}
      <path
        d="M182 271 Q192 268 200 271 Q208 268 218 271 Q208 274 200 273 Q192 274 182 271 Z"
        fill="#3b2b25"
        fillOpacity="0.75"
      />

      {/* 12. Lips */}
      {/* Upper Lip */}
      <path
        d="M180 278 Q192 275 200 277 Q208 275 220 278 Q210 282 200 281 Q190 282 180 278 Z"
        fill="#ba6b57"
      />
      {/* Lip Center Line */}
      <path d="M178 279 Q192 281 200 280 Q208 281 222 279" stroke="#68291d" strokeWidth="1.2" strokeLinecap="round" />
      {/* Lower Lip */}
      <path
        d="M184 280 Q200 293 216 280 Q208 290 200 290 Q192 290 184 280 Z"
        fill="#cf7a65"
      />
      {/* Chin indent */}
      <ellipse cx="200" cy="305" rx="10" ry="4" fill="#a55f3f" fillOpacity="0.5" />

      {/* 13. Iconic Cambodian Hairstyle: Parted Wavy Fringe Curtains */}
      {/* Left Hair Volume */}
      <path
        d="M125 170 Q115 90 165 60 Q190 45 200 70 Q180 75 160 95 Q140 120 135 170 Z"
        fill="url(#hairDark)"
      />
      {/* Right Hair Volume */}
      <path
        d="M275 170 Q285 90 235 60 Q210 45 200 70 Q220 75 240 95 Q260 120 265 170 Z"
        fill="url(#hairDark)"
      />
      {/* Top Hair Cap */}
      <path
        d="M120 145 C120 50 280 50 280 145 C275 80 220 50 200 50 C180 50 125 80 120 145 Z"
        fill="url(#hairDark)"
      />
      {/* Center Left Curtain Bang Wave */}
      <path
        d="M195 65 Q160 85 145 140 Q160 110 185 105 Q198 100 200 68 Z"
        fill="url(#hairSheen)"
      />
      {/* Center Right Curtain Bang Wave */}
      <path
        d="M205 65 Q240 85 255 140 Q240 110 215 105 Q202 100 200 68 Z"
        fill="url(#hairSheen)"
      />
      {/* Detailed Bang Tendrils framing the forehead */}
      <path d="M175 95 Q165 130 152 155 Q165 135 180 110 Z" fill="#140f0e" />
      <path d="M225 95 Q235 130 248 155 Q235 135 220 110 Z" fill="#140f0e" />
      {/* Center Parting Gap on Forehead */}
      <path d="M195 75 Q200 95 202 105 Q205 95 205 75 Z" fill="url(#skinBase)" fillOpacity="0.3" />

      {/* 14. Official Student ID Banner Overlay */}
      <rect x="0" y="475" width="400" height="45" fill="#060b14" fillOpacity="0.85" />
      <text x="200" y="495" textAnchor="middle" fill="#ffffff" fontSize="13" fontFamily="sans-serif" fontWeight="bold">
        សុផា បញ្ញា (Sopha Panha)
      </text>
      <text x="200" y="510" textAnchor="middle" fill="#38bdf8" fontSize="10" fontFamily="monospace">
        ID: 10076 · NCHSUK Computer Science
      </text>
    </svg>
  );
};
