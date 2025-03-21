"use client"

import { useEffect, useState } from "react"

export default function GeometricCyclist() {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 5) % 360)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  // Color palette
  const colors = {
    primary: "#3E803E",
    accent1: "#FF6B6B",
    accent2: "#4ECDC4",
    dark: "#292F36",
    light: "#F7F7F7",
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Geometric Elements */}

        {/* Circles pattern - top left */}
        <g className="animate-pulse-slow">
          {[...Array(5)].map((_, i) => (
            <circle
              key={`circle-tl-${i}`}
              cx={50 + i * 15}
              cy={50 + i * 15}
              r={5 + i * 2}
              fill="none"
              stroke={colors.accent2}
              strokeWidth="1.5"
              opacity={0.7 - i * 0.1}
            />
          ))}
        </g>

        {/* Triangles - top right */}
        <g className="animate-float">
          <polygon points="420,40 450,90 390,90" fill="none" stroke={colors.accent1} strokeWidth="2" opacity="0.6" />
          <polygon
            points="430,60 460,110 400,110"
            fill="none"
            stroke={colors.accent1}
            strokeWidth="1.5"
            opacity="0.4"
          />
        </g>

        {/* Dotted lines - bottom left */}
        <g>
          {[...Array(3)].map((_, i) => (
            <line
              key={`line-bl-${i}`}
              x1="30"
              y1={320 + i * 20}
              x2="120"
              y2={320 + i * 20}
              stroke={colors.primary}
              strokeWidth="2"
              strokeDasharray="5,5"
              opacity={0.7 - i * 0.2}
            />
          ))}
        </g>

        {/* Squares - bottom right */}
        <g className="animate-rotate-slow">
          {[...Array(3)].map((_, i) => (
            <rect
              key={`rect-br-${i}`}
              x={400 - i * 15}
              y={300 + i * 15}
              width={50 - i * 10}
              height={50 - i * 10}
              fill="none"
              stroke={colors.dark}
              strokeWidth="1.5"
              opacity={0.6 - i * 0.1}
              transform={`rotate(${rotation / 10})`}
              style={{ transformOrigin: `${425 - i * 15}px ${325 + i * 15}px` }}
            />
          ))}
        </g>

        {/* Hexagon pattern - middle top */}
        <path
          d="M250,30 L270,40 L270,60 L250,70 L230,60 L230,40 Z"
          fill="none"
          stroke={colors.primary}
          strokeWidth="2"
          opacity="0.7"
        />

        {/* Diagonal lines - middle left */}
        <g>
          {[...Array(5)].map((_, i) => (
            <line
              key={`diag-ml-${i}`}
              x1={80 + i * 10}
              y1="150"
              x2={120 + i * 10}
              y2="200"
              stroke={colors.accent2}
              strokeWidth="1"
              opacity={0.6 - i * 0.1}
            />
          ))}
        </g>

        {/* Diagonal lines - middle right */}
        <g>
          {[...Array(5)].map((_, i) => (
            <line
              key={`diag-mr-${i}`}
              x1={380 - i * 10}
              y1="150"
              x2={340 - i * 10}
              y2="200"
              stroke={colors.accent1}
              strokeWidth="1"
              opacity={0.6 - i * 0.1}
            />
          ))}
        </g>

        {/* Circular pattern - behind cyclist */}
        <circle cx="250" cy="200" r="100" fill="none" stroke={colors.primary} strokeWidth="0.5" opacity="0.3" />
        <circle cx="250" cy="200" r="120" fill="none" stroke={colors.primary} strokeWidth="0.5" opacity="0.2" />
        <circle cx="250" cy="200" r="140" fill="none" stroke={colors.primary} strokeWidth="0.5" opacity="0.1" />

        {/* Bicycle and Cyclist */}
        <g transform="translate(150, 50)">
          {/* Bicycle wheels */}
          <g>
            {/* Back wheel */}
            <circle cx="100" cy="220" r="40" fill="none" stroke={colors.dark} strokeWidth="3" />
            <circle cx="100" cy="220" r="36" fill="none" stroke={colors.dark} strokeWidth="1" />

            {/* Back wheel spokes */}
            <g style={{ transform: `rotate(${rotation}deg)`, transformOrigin: "100px 220px" }}>
              {[...Array(8)].map((_, i) => (
                <line
                  key={`back-spoke-${i}`}
                  x1="100"
                  y1="220"
                  x2={100 + 40 * Math.cos((i * Math.PI) / 4)}
                  y2={220 + 40 * Math.sin((i * Math.PI) / 4)}
                  stroke={colors.dark}
                  strokeWidth="1.5"
                />
              ))}
            </g>

            {/* Front wheel */}
            <circle cx="250" cy="220" r="40" fill="none" stroke={colors.dark} strokeWidth="3" />
            <circle cx="250" cy="220" r="36" fill="none" stroke={colors.dark} strokeWidth="1" />

            {/* Front wheel spokes */}
            <g style={{ transform: `rotate(${rotation}deg)`, transformOrigin: "250px 220px" }}>
              {[...Array(8)].map((_, i) => (
                <line
                  key={`front-spoke-${i}`}
                  x1="250"
                  y1="220"
                  x2={250 + 40 * Math.cos((i * Math.PI) / 4)}
                  y2={220 + 40 * Math.sin((i * Math.PI) / 4)}
                  stroke={colors.dark}
                  strokeWidth="1.5"
                />
              ))}
            </g>
          </g>

          {/* Bicycle frame */}
          <g>
            {/* Main frame */}
            <line x1="100" y1="220" x2="175" y2="150" stroke={colors.primary} strokeWidth="6" strokeLinecap="round" />
            <line x1="175" y1="150" x2="250" y2="220" stroke={colors.primary} strokeWidth="6" strokeLinecap="round" />
            <line x1="175" y1="150" x2="130" y2="150" stroke={colors.primary} strokeWidth="6" strokeLinecap="round" />

            {/* Seat post */}
            <line x1="175" y1="150" x2="175" y2="120" stroke={colors.primary} strokeWidth="6" strokeLinecap="round" />

            {/* Seat */}
            <ellipse cx="175" cy="120" rx="15" ry="5" fill={colors.dark} />

            {/* Handlebar post */}
            <line x1="250" y1="220" x2="250" y2="150" stroke={colors.primary} strokeWidth="6" strokeLinecap="round" />

            {/* Handlebar */}
            <path
              d="M230,150 Q250,140 270,150"
              stroke={colors.primary}
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
            />

            {/* Pedal crank */}
            <circle cx="175" cy="190" r="15" fill="none" stroke={colors.dark} strokeWidth="4" />

            {/* Pedals */}
            <g style={{ transform: `rotate(${rotation}deg)`, transformOrigin: "175px 190px" }}>
              <line x1="175" y1="190" x2="195" y2="210" stroke={colors.dark} strokeWidth="4" strokeLinecap="round" />
              <rect x="195" y="205" width="15" height="10" fill={colors.dark} />

              <line x1="175" y1="190" x2="155" y2="170" stroke={colors.dark} strokeWidth="4" strokeLinecap="round" />
              <rect x="140" y="165" width="15" height="10" fill={colors.dark} />
            </g>

            {/* Chain */}
            <path
              d="M160,190 Q130,205 100,220 Q130,235 160,190"
              fill="none"
              stroke={colors.dark}
              strokeWidth="2"
              strokeDasharray="4,2"
            />
          </g>

          {/* Cyclist */}
          <g>
            {/* Legs */}
            <g style={{ transform: `rotate(${rotation}deg)`, transformOrigin: "175px 190px" }}>
              {/* Right leg */}
              <path
                d={`M175,150 Q${185 + Math.sin((rotation * Math.PI) / 180) * 5},${170 + Math.cos((rotation * Math.PI) / 180) * 5} 195,210`}
                fill="none"
                stroke={colors.accent2}
                strokeWidth="8"
                strokeLinecap="round"
              />

              {/* Left leg */}
              <path
                d={`M175,150 Q${165 - Math.sin((rotation * Math.PI) / 180) * 5},${170 - Math.cos((rotation * Math.PI) / 180) * 5} 155,170`}
                fill="none"
                stroke={colors.accent2}
                strokeWidth="8"
                strokeLinecap="round"
              />
            </g>
            {/* Torso */}
            <line x1="175" y1="150" x2="210" y2="100" stroke={colors.accent1} strokeWidth="12" strokeLinecap="round" />
            {/* Arms */}
            <line x1="210" y1="100" x2="240" y2="150" stroke={colors.accent1} strokeWidth="6" strokeLinecap="round" />
            <line x1="210" y1="100" x2="260" y2="150" stroke={colors.accent1} strokeWidth="6" strokeLinecap="round" />
            {/* Head */}
            <circle cx="210" cy="80" r="20" fill="#FFD1A9" />
            {/* Helmet */}
            <path d="M190,70 Q210,50 230,70 Q230,85 210,90 Q190,85 190,70" fill={colors.primary} />
            {/* Face */}
            <circle cx="205" cy="80" r="2" fill={colors.dark} /> {/* Left eye */}
            <circle cx="215" cy="80" r="2" fill={colors.dark} /> {/* Right eye */}
            <path d="M205,85 Q210,90 215,85" stroke={colors.dark} strokeWidth="1" fill="none" /> {/* Smile */}
          </g>
        </g>
      </svg>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.05); opacity: 0.5; }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes rotate-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .animate-rotate-slow {
          animation: rotate-slow 20s linear infinite;
        }
      `}</style>
    </div>
  )
}

