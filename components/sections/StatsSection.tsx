"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { STATS } from "@/data/content";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = value / 60;
    const timer = setInterval(() => {
      start = Math.min(start + step, value);
      setCount(Math.round(start));
      if (start >= value) clearInterval(timer);
    }, 20);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-syne font-extrabold text-gradient leading-none block"
      style={{ fontSize: "clamp(40px, 5vw, 60px)" }}>
      {count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <div
      className="border-y px-6 md:px-12 lg:px-20 py-0"
      style={{
        background: "var(--color-k-bg2)",
        borderColor: "rgba(255,255,255,0.07)",
      }}
    >
      <div className="container-k">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center text-center py-12 px-6"
              style={{
                borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                // On mobile, 2 col grid — reset right border for col 2
              }}
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <span
                className="mt-2 text-xs tracking-[0.08em] uppercase font-medium"
                style={{ color: "var(--color-k-text2)" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}