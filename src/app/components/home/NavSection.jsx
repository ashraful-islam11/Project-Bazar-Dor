'use client'
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


export const formattedDate = new Intl.DateTimeFormat("bn-BD", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
}).format(new Date());

const NavSection = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-2">
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <div className="relative bg-[#05893E] w-7 h-9 sm:w-11 sm:h-12 shrink-0 rounded-lg overflow-hidden">
            <Image
              src="/images/logo-icon.png"
              alt="বাজার দর লোগো"
              fill
              sizes="(max-width: 640px) 28px, 44px"
              className="object-contain"
              priority
            />
          </div>

          <div className="flex flex-col min-w-0">
            <span className="text-base sm:text-xl font-bold text-gray-900 leading-tight truncate">
              বাজার দর
            </span>
            <span className="text-[11px] sm:text-xs text-gray-500 leading-snug truncate">
              {formattedDate}
            </span>
          </div>
        </Link>

        {/* ডান পাশ: HeroUI বাটন */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <Link href='/sign-in'>
                <Button
            as={Link}
            href="/login"
            variant="light"
            size="sm"
            className="text-[12px] sm:text-sm font-medium text-gray-700 hover:text-emerald-700 px-2 sm:px-3"
          >
            সাইন ইন
          </Button>
            </Link>
        

        <Link href= '/sing-up' >
          <Button
            as={Link}
            href="/register"
            size="sm"
            className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-semibold px-2 sm:px-5 h-7 sm:h-10 rounded-lg shadow-sm"
          >
            সাইন আপ
          </Button>
           </Link>
        </div>
      </div>
        </div>
    );
};

export default NavSection;