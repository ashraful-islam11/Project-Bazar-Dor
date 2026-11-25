 
 const Footer = () => {
    return (
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-4 text-center sm:px-6 md:flex-row md:items-center md:justify-between md:gap-6 md:text-left lg:px-8">
        <p className="w-full text-[11px] leading-relaxed text-gray-500 sm:text-xs md:w-auto">
          <span className="font-semibold text-gray-700">বাজার দর</span>
          <span aria-hidden="true" className="mx-1.5 text-gray-300">
            —
          </span>
          প্রত্যেকটি বাজারের দাম এক নজরে।
        </p>

        <p className="w-full text-[11px] leading-relaxed text-gray-500 sm:text-xs md:w-auto md:text-right">
          সকল দাম সর্বোচ্চ; বাজার অবস্থার এবং গুণের ভিত্তিতে দাম পরিবর্তিত
          হতে পারে।
        </p>
      </div>
    </footer>
    );
 };
 
 export default Footer;