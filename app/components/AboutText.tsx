'use client';

import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useRef, useState } from 'react';
import SwapLine from './SwapLine';

export default function AboutScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const [triggerSwap, setTriggerSwap] = useState(false);

  // Listen to scroll and trigger swap at 50%
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest > 0.1) {
      setTriggerSwap(true);
    } else {
      setTriggerSwap(false);
    }
  });

  const paragraph1 = [
    "I build things that live in browsers,",
    "that speak in silence and react with meaning.",
    "Each project starts with a blank file—",
    "a space where logic and layout find harmony,",
    "where form follows function, but never forgets feeling.",
  ];
  

  const paragraph2 = [
    "I see full-stack development as choreography—",
    "frontend gestures, backend rhythms,",
    "APIs like bridges between thought and experience.",
    "I care about speed, structure, and clarity,",
    "but also the soft moments that make users stay.",
  ];
  
  

  return (
    <section ref={containerRef} className="h-[200vh] bg-white text-black">
      <div className="sticky top-0 h-screen flex items-center justify-center w-full">
        <div className="space-y-6 px-6 w-full max-w-[1000px] md:max-w-[1200px] font-italiana">
          {paragraph1.map((line, index) => (
            <SwapLine
              key={index}
              initialText={line}
              finalText={paragraph2[index]}
              active={triggerSwap}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
