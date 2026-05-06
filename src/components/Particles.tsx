import { useMemo } from "react";

export const Particles = ({ count = 20 }: { count?: number }) => {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        size: Math.random() * 4 + 1,
        top: Math.random() * 100,
        left: Math.random() * 100,
        duration: Math.random() * 10 + 8,
        delay: Math.random() * 6,
      })),
    [count],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <span
          key={i}
          className="particle animate-float"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            top: `${p.top}%`,
            left: `${p.left}%`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
};
