'use client';

import { useRef } from 'react';

export default function Img1() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="min-h-[120vh] w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/img1.jpg')" }}
    >
      {/* Optional overlay or content goes here */}
    </section>
  );
}
