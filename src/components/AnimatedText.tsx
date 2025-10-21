'use client'

interface AnimatedTextProps {
  text: string
  animatedIndices?: number[]  // Array of character indices to animate
  className?: string
  duration?: string          // Animation duration (default: "3s")
  delay?: string            // Base delay between characters (default: "0.2s")
  style?: React.CSSProperties // Style prop for the container
}

export default function AnimatedText({
  text,
  animatedIndices = [],
  className = '',
  duration = '5s',
  delay = '0.2s',
  style
}: AnimatedTextProps) {
  return (
    <span className={className} style={style}>
      {text.split('').map((char, index) => {
        const isAnimated = animatedIndices.includes(index)
        // Optimize: Use indexOf result directly instead of calling it twice
        const animatedIndex = isAnimated ? animatedIndices.indexOf(index) : -1
        const animationDelay = animatedIndex >= 0 ? `${parseFloat(delay) * animatedIndex}s` : '0s'

        return (
          <span
            key={index}
            className={isAnimated ? 'inline-block animate-shake-bounce' : 'inline-block'}
            style={{
              color: 'inherit', // All characters inherit the same color from parent span
              animationDuration: duration,
              animationDelay: animationDelay,
              animationIterationCount: 'infinite',
              animationTimingFunction: 'ease-in-out'
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        )
      })}
    </span>
  )
}