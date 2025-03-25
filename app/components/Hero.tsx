// components/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'] })

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white text-black pt-32 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/portrait.jpg" // Replace with your actual image
          alt="Sithija Karunasena"
          width={320}
          height={320}
          className="rounded-sm object-cover mb-12 grayscale"
        />
      </motion.div>
      <div className="h-20 md:h-32" />
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-[9rem] md:text-[13rem] font-normal font-serif tracking-tight leading-[1]"
      >
        Sithija Karunasena
      </motion.h1>
    </section>
  );
}
