'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full px-6 py-10 bg-[#f5f5f5] text-black font-sans text-sm">
      <div className="max-w-full mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
        
        {/* Left: Copyright */}
        <div>
          <p className="text-gray-500 font-semibold">Copyright:</p>
          <p className="font-bold">All Rights Reserved ©{currentYear}</p>
        </div>

        {/* Center: Scroll to Top */}
        <div onClick={scrollToTop} className="cursor-pointer">
          <p className="text-gray-500 font-semibold">Fast Travel:</p>
          <p className="font-bold hover:underline">Go Back to Top</p>
        </div>

        {/* Right: Credits */}
        <div className="text-left md:text-right">
          <p className="text-gray-500 font-semibold">Design by:</p>
          <p className="font-bold">Sithija Karunasena</p>
        </div>
        <div className="text-left md:text-right">
          <p className="text-gray-500 font-semibold">Code by:</p>
          <p className="font-bold">Sithija Karunasena</p>
        </div>
      </div>
    </footer>
  );
}
