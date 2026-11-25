
"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";
import { formattedDate } from "./NavSection";



const TodaysMarketPrice = () => {
    const todayDate = formattedDate
  return (
    <section className="max-w-6xl mx-auto py-6 sm:py-10 px-3 sm:px-6 lg:px-8">
      <div className="bg-[#FAFCFA] border border-[#E5ECE6] rounded-2xl p-5 sm:p-8 md:px-10 md:py-9 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 shadow-xs">
    
        {/* date badge */}
        <div className="w-full md:flex-1 text-left">
          <span className="inline-block text-[#05893E] bg-[#05893E]/10 text-xs sm:text-sm font-medium py-1 px-3.5 rounded-full">
            {todayDate}
          </span>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1D271F] mt-3 sm:mt-4 leading-snug">
            আজকের বাজারের দাম এক নজরে
          </h1>

          <p className="mt-3 sm:mt-4 mb-5 sm:mb-7 text-xs sm:text-sm md:text-base text-[#526055] max-w-xl leading-relaxed">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          <Button
            as={Link}
            href="/products"
            className="bg-[#05893E] hover:bg-[#047233] text-[#F3FBF4] text-xs sm:text-sm font-semibold px-5 sm:px-6 h-9 sm:h-11 rounded-xl shadow-sm transition-colors"
          >
            সব পণ্য দেখুন
          </Button>
        </div>

        {/* right side img  */}
        <div className="w-40 sm:w-52 md:w-60 lg:w-64 shrink-0 flex justify-center md:justify-end">
          <Image
            src="/images/bazar-hero.png"
            alt="আজকের বাজার দর ঝুড়ি"
            width={260}
            height={240}
            priority
            className="w-full h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default TodaysMarketPrice;