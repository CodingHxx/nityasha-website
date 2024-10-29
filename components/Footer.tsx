import React from 'react';
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className=' md:flex hidden w-full'>
      <div className="mx-auto w-full max-w-screen-xl xl:pb-2">
        <div className="gap-4 p-4 px-8 py-16 sm:pb-16 md:flex md:justify-between">
          <div className="mb-12 flex flex-col gap-4">
            <a href="/" className="flex items-center gap-2">
              <div className='flex items-center justify-center h-9 w-9 overflow-hisaasddden'>
                <Image
                  src="/logo.svg"
                  alt="Nityasha"
                  width={100}
                  height={100}
                  className='object-contain scale-150'
                />
              </div>
              <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white border-l-2 border-white px-3">Nityasha</span>
            </a>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10">
            <div>
              <h2 className="mb-6 text-sm font-medium uppercase tracking-tighter text-gray-900 dark:text-white">Community</h2>
              <ul className="grid gap-2">
                <li><a href="https://discord.gg/VkaC3aWtTr" className="cursor-pointer text-sm font-[450] text-gray-400 duration-200 hover:text-gray-200">Discord</a></li>
                <li><a href="https://x.com/innityasha" className="cursor-pointer text-sm font-[450] text-gray-400 duration-200 hover:text-gray-200">Twitter</a></li>
                <li><a href="mailto:hello@nityasha.com" className="cursor-pointer text-sm font-[450] text-gray-400 duration-200 hover:text-gray-200">Email</a></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-medium uppercase tracking-tighter text-gray-900 dark:text-white">Legal</h2>
              <ul className="grid gap-2">
                <li><a href="/terms" className="cursor-pointer text-sm font-[450] text-gray-400 duration-200 hover:text-gray-200">Terms</a></li>
                <li><a href="/about-us" className="cursor-pointer text-sm font-[450] text-gray-400 duration-200 hover:text-gray-200">About Us</a></li>
                <li><a href="/privacy" className="cursor-pointer text-sm font-[450] text-gray-400 duration-200 hover:text-gray-200">Privacy</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 rounded-md border-neutral-700/20 px-8 py-4 sm:flex sm:flex-row sm:items-center sm:justify-center">
          <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            Copyright © 2024 <a href="/" className="cursor-pointer">Nityasha</a>. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
