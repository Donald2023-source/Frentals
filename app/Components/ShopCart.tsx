"use client"

import { motion } from "framer-motion"

export default function AnimatedCart() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative h-[200px] w-[200px]">
        {/* Background decorative elements */}
        <motion.div
          className="absolute left-0 right-0 top-[15%] h-6 w-6 rounded-full bg-primary/20"
          animate={{
            x: [0, 20, -20, 0],
            y: [0, -15, 10, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute right-[10%] top-[20%] h-4 w-4 rounded-full bg-secondary/30"
          animate={{
            x: [0, -15, 15, 0],
            y: [0, 10, -10, 0],
            scale: [1, 0.8, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 0.5,
          }}
        />

        <motion.div
          className="absolute bottom-[20%] left-[20%] h-5 w-5 rounded-full bg-primary/30"
          animate={{
            x: [0, 15, -10, 0],
            y: [0, -10, 15, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1,
          }}
        />

        {/* Main cart SVG with continuous animations */}
        <motion.svg
          width="120"
          height="150"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute md:left-0 left-20  top-1/6"
          animate={{
            y: [0, -10, 0, -5, 0],
            rotate: [-1, 1, -0.5, 0.5, -1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          {/* Cart body */}
          <motion.path
            d="M50 100H250L230 180H70L50 100Z"
            fill="white"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinejoin="round"
            animate={{
              fill: ["rgba(255,255,255,0.8)", "rgba(255,255,255,0.9)", "rgba(255,255,255,0.8)"],
              stroke: ["currentColor", "hsl(var(--primary))", "currentColor"],
              scale: [1, 1.02, 0.98, 1],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />

          {/* Cart handle */}
          <motion.path
            d="M230 100C230 100 230 80 230 65C230 40 200 40 150 40C100 40 70 40 70 65C70 80 70 100 70 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            animate={{
              d: [
                "M230 100C230 100 230 80 230 65C230 40 200 40 150 40C100 40 70 40 70 65C70 80 70 100 70 100",
                "M230 100C230 100 230 75 230 60C230 35 200 35 150 35C100 35 70 35 70 60C70 75 70 100 70 100",
                "M230 100C230 100 230 80 230 65C230 40 200 40 150 40C100 40 70 40 70 65C70 80 70 100 70 100",
              ],
              stroke: ["currentColor", "hsl(var(--primary))", "currentColor"],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />

          {/* Left wheel */}
          <motion.circle
            cx="90"
            cy="220"
            r="20"
            fill="white"
            stroke="currentColor"
            strokeWidth="6"
            animate={{
              rotate: 360,
              cx: [90, 88, 92, 90],
              cy: [220, 222, 218, 220],
            }}
            transition={{
              rotate: {
                duration: 3,
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
              },
              cx: {
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              },
              cy: {
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              },
            }}
          />

          {/* Right wheel */}
          <motion.circle
            cx="210"
            cy="220"
            r="20"
            fill="white"
            stroke="currentColor"
            strokeWidth="6"
            animate={{
              rotate: 360,
              cx: [210, 212, 208, 210],
              cy: [220, 222, 218, 220],
            }}
            transition={{
              rotate: {
                duration: 3,
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
              },
              cx: {
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              },
              cy: {
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              },
            }}
          />

          {/* Cart base */}
          <motion.path
            d="M50 180H250V190C250 200 240 210 230 210H70C60 210 50 200 50 190V180Z"
            fill="white"
            stroke="currentColor"
            strokeWidth="6"
            animate={{
              fill: ["rgba(255,255,255,0.8)", "rgba(255,255,255,0.9)", "rgba(255,255,255,0.8)"],
              stroke: ["currentColor", "hsl(var(--primary))", "currentColor"],
              scale: [1, 1.01, 0.99, 1],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 0.5,
            }}
          />

          {/* Wheel connectors - left */}
          <motion.line
            x1="90"
            y1="210"
            x2="90"
            y2="220"
            stroke="currentColor"
            strokeWidth="6"
            animate={{
              stroke: ["currentColor", "hsl(var(--primary))", "currentColor"],
              x1: [90, 88, 92, 90],
              x2: [90, 88, 92, 90],
              y2: [220, 222, 218, 220],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />

          {/* Wheel connectors - right */}
          <motion.line
            x1="210"
            y1="210"
            x2="210"
            y2="220"
            stroke="currentColor"
            strokeWidth="6"
            animate={{
              stroke: ["currentColor", "hsl(var(--primary))", "currentColor"],
              x1: [210, 212, 208, 210],
              x2: [210, 212, 208, 210],
              y2: [220, 222, 218, 220],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />

          {/* Animated items in cart */}
          <motion.rect
            x="80"
            y="130"
            width="30"
            height="30"
            rx="4"
            fill="hsl(var(--primary))"
            animate={{
              opacity: [0, 0.8, 0],
              y: [100, 130, 100],
              rotate: [-5, 5, -5],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />

          <motion.rect
            x="130"
            y="140"
            width="25"
            height="25"
            rx="4"
            fill="hsl(var(--secondary))"
            animate={{
              opacity: [0, 0.7, 0],
              y: [100, 140, 100],
              rotate: [5, -5, 5],
              scale: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 1,
            }}
          />

          <motion.rect
            x="180"
            y="135"
            width="28"
            height="28"
            rx="4"
            fill="hsl(var(--primary))"
            animate={{
              opacity: [0, 0.9, 0],
              y: [100, 135, 100],
              rotate: [-3, 3, -3],
              scale: [0.9, 1, 0.9],
            }}
            transition={{
              duration: 7,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 2,
            }}
          />

          {/* Notification dot */}
          <motion.circle
            cx="240"
            cy="80"
            r="15"
            fill="#ef4444"
            animate={{
              r: [15, 20, 15, 18, 15],
              opacity: [0.7, 1, 0.7],
              fill: ["#ef4444", "#f87171", "#ef4444"],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </motion.svg>

        {/* Floating items around the cart */}
        <motion.div
          className="absolute left-[60%] top-[10%] h-8 w-8 rounded-md bg-primary/80"
          animate={{
            y: [0, 50, 100, 150, 100, 50, 0],
            x: [0, 20, 0, -20, 0],
            rotate: [0, 10, 0, -10, 0],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        />

        <motion.div
          className="absolute left-[30%] top-[5%] h-6 w-6 rounded-md bg-secondary/80"
          animate={{
            y: [0, 40, 80, 120, 80, 40, 0],
            x: [0, -15, 0, 15, 0],
            rotate: [0, -15, 0, 15, 0],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            delay: 2,
          }}
        />

        <motion.div
          className="absolute left-[45%] top-[15%] h-7 w-7 rounded-md bg-primary/70"
          animate={{
            y: [0, 30, 60, 90, 60, 30, 0],
            x: [0, 10, 0, -10, 0],
            rotate: [0, 20, 0, -20, 0],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            delay: 4,
          }}
        />
      </div>
    </div>
  )
}

