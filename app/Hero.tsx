// components/Hero.tsx
'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#f5f5f5] text-black px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl"
      >
        <h1 className="text-5xl md:text-7xl font-serif tracking-tight mb-4">
          Sithija Karunasena
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Creating intuitive digital experiences with full-stack magic.
        </p>
      </motion.div>
    </section>
  );
}
