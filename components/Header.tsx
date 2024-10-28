import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Use usePathname for current pathname
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './ui/button';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from 'lucide-react';
import { FadeText } from "@/components/ui/fade-text";

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname() || '/'; // Provide a fallback value
    const { scrollY } = useScroll();
    const marginX = useTransform(scrollY, [0, 100], [-100, -100]);

    // Define your page titles based on the route
    const pageTitles: Record<string, string> = {
        '/': 'Nityasha',
        '/about-us': 'About Us',
        '/contact': 'Contact Us',
        // Add more routes and their corresponding titles as needed
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Determine if the current page is the home page
    const isHomePage = pathname === '/';

    // Get the current page title based on the route
    const currentPageTitle = pageTitles[pathname] || 'Nityasha'; // Use default title if pathname is not found

    return (
        <header className='h-16 z-[50000] flex px-4 md:px-5 items-center justify-between w-full bg-black/50 backdrop-blur-2xl fixed top-0'>
            <Link href={'/'} className='outline-none'>
                <div className='flex items-center justify-center gap-2'>
                    <div className='flex items-center justify-center h-9 w-9 overflow-hidden'>
                        <Image
                            src="/logo.svg"
                            alt="Nityasha"
                            width={100}
                            height={100}
                            className='object-contain scale-150'
                        />
                    </div>

                    <div className='overflow-hidden relative'>
                        <FadeText
                            direction="left"
                            framerProps={{
                                show: { transition: { delay: 1 } },
                            }}
                            text={isHomePage || !scrolled ? 'Nityasha' : currentPageTitle}
                        />
                    </div>
                </div>
            </Link>

            <div className='flex items-center justify-center gap-2 mt-2 md:mt-0'>
                <div className='md:flex hidden gap-1'>
                    <Button className="px-4 py-2 text-sm md:text-base">Download App</Button>
                    <Link href={'/SellerReg'}>
                        <Button className="px-4 py-2 text-sm md:text-base">Register as Seller</Button>
                    </Link>
                </div>
                <div className='md:hidden flex text-white'>
                    <Sheet>
                        <SheetTrigger><AlignJustify /></SheetTrigger>
                        <SheetContent side='left'>
                            <SheetHeader>
                                <Link href={'/'} className='outline-none'>
                                    <div className='flex items-center justify-center gap-2'>
                                        <div className='flex items-center justify-center h-9 w-9 overflow-hidden'>
                                            <Image
                                                src="/logo.svg"
                                                alt="Nityasha"
                                                width={100}
                                                height={100}
                                                className='object-contain scale-150'
                                            />
                                        </div>

                                        <span className='text-lg font-medium font-[NeueMachina] text-white'>
                                            Nityasha
                                        </span>
                                    </div>
                                </Link>
                                <Button className="px-4 py-2 text-sm md:text-base">Download App</Button>
                                <Link href={'/SellerReg'} className='w-full'>
                                    <Button className="px-4 py-2 text-sm md:text-base w-full">Register as Seller</Button>
                                </Link>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}

export default Header;
