import Link from "next/link";

export default function Logo({ className = "", size = 40 }) {
  return (
    <Link
      href="/"
      className={`filmora-brand group ${className}`}
      aria-label="Filmora home"
    >
      <span
        className="filmora-mark transition-transform duration-500 ease-out group-hover:scale-[1.06] group-hover:rotate-[-4deg]"
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="0 0 64 64"
          width="100%"
          height="100%"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="fm-tile"
              x1="8" y1="4" x2="56" y2="60"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#ffb066" />
              <stop offset="35%" stopColor="#ff8a3d" />
              <stop offset="70%" stopColor="#ff5f7a" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>

            <linearGradient
              id="fm-hi"
              x1="16" y1="4" x2="48" y2="28"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
              <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>

            <radialGradient
              id="fm-reel"
              cx="32" cy="32" r="22"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#1a1024" />
              <stop offset="70%" stopColor="#0a0d18" />
              <stop offset="100%" stopColor="#050710" />
            </radialGradient>

            <linearGradient
              id="fm-play"
              x1="26" y1="22" x2="42" y2="44"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#fff1dc" />
              <stop offset="100%" stopColor="#ff8a3d" />
            </linearGradient>
          </defs>

          {/* Tile */}
          <rect width="64" height="64" rx="16" fill="url(#fm-tile)" />
          <rect width="64" height="64" rx="16" fill="url(#fm-hi)" />
          <rect
            x="0.75" y="0.75" width="62.5" height="62.5" rx="15.25"
            fill="none" stroke="#ffffff" strokeOpacity="0.22" strokeWidth="1.2"
          />

          {/* Reel body */}
          <circle cx="32" cy="32" r="19" fill="url(#fm-reel)" opacity="0.96" />
          <circle
            cx="32" cy="32" r="19"
            fill="none" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="1"
          />

          {/* Aperture teeth */}
          <g fill="#ffffff" opacity="0.8">
            <circle cx="32" cy="16.5" r="1.7" />
            <circle cx="43.5" cy="20.5" r="1.7" />
            <circle cx="47.5" cy="32" r="1.7" />
            <circle cx="43.5" cy="43.5" r="1.7" />
            <circle cx="32" cy="47.5" r="1.7" />
            <circle cx="20.5" cy="43.5" r="1.7" />
            <circle cx="16.5" cy="32" r="1.7" />
            <circle cx="20.5" cy="20.5" r="1.7" />
          </g>

          {/* Inner hub ring */}
          <circle
            cx="32" cy="32" r="13.5"
            fill="none" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="1"
          />

          {/* Play triangle */}
          <path
            d="M28 24.5 L28 39.5 L41 32 Z"
            fill="url(#fm-play)"
            stroke="#ffffff" strokeOpacity="0.3" strokeWidth="0.6"
            strokeLinejoin="round"
          />
          <path d="M28 24.5 L28 30 L34 27 Z" fill="#ffffff" opacity="0.35" />
        </svg>
      </span>

      <span className="filmora-word">
        Filmo<span>ra</span>
      </span>
    </Link>
  );
}