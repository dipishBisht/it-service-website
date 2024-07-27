import { HeroHighlight } from "../ui/hero-highlight";
import { useState, useEffect, useRef } from "react";

export function HeroHighlightDemo() {
  return <HeroHighlight />;
}

export default function AboutText() {
  const divRef = useRef<HTMLDivElement>(null);
  const [bgPercent, setBgPercent] = useState(100);
  const [bgReversePercent, setBgReversePercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (divRef.current) {
        const rect = divRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
          const percentInView = Math.min(
            1,
            Math.max(
              0,
              (windowHeight - rect.top) / (windowHeight + rect.height)
            )
          );

          setBgPercent(100 - percentInView * 100);
          setBgReversePercent(percentInView * 100);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <div
        ref={divRef}
        className="absolute z-10 w-full h-full left-1/2 top-10 -translate-x-1/2"
        style={{
          background: `conic-gradient(from 90deg at ${bgPercent}% 0%, rgba(97, 106, 115, .12), transparent 180deg) 0% 0% / 50% 100% no-repeat, conic-gradient(from 270deg at ${bgReversePercent}% 0%, transparent 180deg, rgba(97, 106, 115, .12)) 100% 0% / 50% 100% no-repeat`,
        }}
      />
      <HeroHighlight />
    </div>
  );
}
