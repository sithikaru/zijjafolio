'use client';

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#f5f5f5] px-6 py-32 flex flex-col items-center justify-center text-black font-sans"
    >
      <div className="text-center space-y-6 max-w-3xl">
        <h2 className="text-[2.5rem] md:text-[4rem] font-light italic tracking-tight font-[var(--font-italiana)]">
          Let’s make something meaningful.
        </h2>

        <p className="text-lg md:text-xl text-gray-700">
          I’m currently open to freelance, internships, or collaborative side projects. 
          Whether you’ve got an idea or just want to say hi — I’d love to hear from you.
        </p>

        <div className="mt-10 space-y-2">
          <a
            href="mailto:sithija.karunasena@gmail.com"
            className="text-xl font-semibold underline hover:opacity-80 transition"
          >
            sithija.karunasena@gmail.com
          </a>

          {/* Optional social icons */}
          <div className="mt-4 flex justify-center space-x-6 text-gray-600 text-xl">
            <a
              href="https://github.com/sithikaru"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
            <a
              href="www.linkedin.com/in/sithija-lakshan-karunasena"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
