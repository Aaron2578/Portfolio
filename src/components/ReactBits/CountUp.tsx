import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  to: number;
  from?: number;
  direction?: "up" | "down";
  delay?: number; // Delay in seconds
  duration?: number; // Duration in seconds
  className?: string;
  decimals?: number;
  decimal?: string;
  separator?: string;
  suffix?: string;
  prefix?: string;
  stepStrict?: boolean;
  start?: boolean;
  onEnd?: () => void;
}

export default function CountUp({
  to,
  from = 0,
  direction = "up",
  delay = 0,
  duration = 2.0,
  className = "",
  decimals = 0,
  decimal = ".",
  separator = "",
  suffix = "",
  prefix = "",
  stepStrict = true,
  start = true,
  onEnd,
}: CountUpProps) {
  const [count, setCount] = useState<number>(from);
  const hasStarted = useRef(false);
  const onEndRef = useRef(onEnd);
  onEndRef.current = onEnd;

  useEffect(() => {
    if (!start || hasStarted.current) return;
    hasStarted.current = true;

    let intervalId: ReturnType<typeof setInterval> | null = null;
    let animationFrameId: number | null = null;

    const timeoutId = setTimeout(() => {
      const diff = Math.abs(to - from);

      // Strict 1-by-1 stepping for integer values
      if (stepStrict && decimals === 0 && diff <= 100) {
        if (diff === 0) {
          setCount(to);
          onEndRef.current?.();
          return;
        }

        // Each step has a deliberate, readable delay:
        // For diff=17 with duration=2.2s -> ~130ms per step
        // For diff=5 with duration=1.6s -> ~320ms per step
        // For diff=1 with duration=0.6s -> ~450ms
        const stepTime = Math.max(60, Math.min(500, Math.floor((duration * 1000) / diff)));
        let current = from;
        const step = direction === "down" ? -1 : 1;

        intervalId = setInterval(() => {
          current += step;
          setCount(current);

          if ((direction === "up" && current >= to) || (direction === "down" && current <= to)) {
            setCount(to);
            if (intervalId) clearInterval(intervalId);
            onEndRef.current?.();
          }
        }, stepTime);

        return;
      }

      // Smooth interpolation for floating numbers or larger ranges
      let startTime: number | null = null;

      const animateStep = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3);

        const currentVal =
          direction === "down"
            ? from - (from - to) * easeProgress
            : from + (to - from) * easeProgress;

        setCount(currentVal);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animateStep);
        } else {
          setCount(to);
          onEndRef.current?.();
        }
      };

      animationFrameId = requestAnimationFrame(animateStep);
    }, delay * 1000);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [start, from, to, duration, delay, direction, decimals, stepStrict]);

  const formatNumber = (val: number) => {
    const fixed = val.toFixed(decimals);
    const [intPart, decPart] = fixed.split(".");
    const formattedInt = separator
      ? intPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator)
      : intPart;

    return decPart !== undefined && decimals > 0
      ? `${formattedInt}${decimal}${decPart}`
      : formattedInt;
  };

  return (
    <span className={className}>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  );
}
