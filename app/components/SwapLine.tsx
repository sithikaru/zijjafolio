'use client';

interface SwapLineProps {
  initialText: string;
  finalText: string;
  active: boolean;
}

export default function SwapLine({ initialText, finalText, active }: SwapLineProps) {
  const common = 'block transition-all duration-1000 ease-in-out';

  return (
    <div className="relative h-[3.8rem] md:h-[4.4rem] overflow-hidden text-left md:text-center text-[2rem] md:text-[2.8rem] font-serif leading-snug">
      <span className={`${common} ${active ? '-translate-y-full' : 'translate-y-0'}`}>
        {initialText}
      </span>
      <span
        className={`absolute top-full left-0 w-full ${common} ${active ? '-translate-y-full' : 'translate-y-0'}`}
      >
        {finalText}
      </span>
    </div>
  );
}
