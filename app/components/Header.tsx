'use client';

import { useEffect, useState } from 'react';

export default function Header() {
  const [time, setTime] = useState('');
  const [blinker, setBlinker] = useState(true);

  // Update hours/minutes every 60s
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // "HH:MM" format
      const formatted = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
      setTime(formatted);
    };
    updateTime();
    const minuteInterval = setInterval(updateTime, 60000);
    return () => clearInterval(minuteInterval);
  }, []);

  // Blink the colon every 1s
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlinker((prev) => !prev);
    }, 1000);
    return () => clearInterval(blinkInterval);
  }, []);

  // Split "HH:MM" into [HH, MM]
  const [hours, minutes] = time ? time.split(':') : ['', ''];

  return (
    <header className="fixed top-0 left-0 w-full bg-[#f5f5f500] z-50 mix-blend-difference">
      <div className="mx-auto grid grid-cols-4 text-[1.2rem] text-white px-6 py-4 font-bold">
        <div>
          <span className="text-gray-400">Sithija Karunasena:</span>
          <br />
          Full Stack Developer
        </div>

        <div>
          <span className="text-gray-400">Location:</span>
          <br />
          {/* Show "HH:MM" but blink the colon */}
          Colombo, Sri Lanka (
            {hours}
            {blinker ? '.' : ' '}
            {minutes}
          )
        </div>

        <div>
          <span className="text-gray-400">Navigation:</span>
          <br />
          <span className="space-x-2">
            <a href="#index" className="hover:underline font-semibold">
              Index
            </a>
            ,
            <a href="#work" className="hover:underline font-semibold">
              Work
            </a>
            ,
            <a href="#archive" className="hover:underline font-semibold">
              Archive
            </a>
            ,
            <a href="#contact" className="hover:underline font-semibold">
              Contact
            </a>
          </span>
        </div>

        <div>
          <span className="text-gray-400">Theme:</span>
          <br />
          <span className="font-semibold">Light Mode</span>, Dark Mode
        </div>
      </div>
    </header>
  );
}
