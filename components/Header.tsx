import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from 'lucide-react';
import { gsap } from 'gsap';

function Header() {
    const pathname = usePathname() || '/';
    const titleRef = useRef<HTMLParagraphElement | null>(null);
    const subtitleRef = useRef<HTMLParagraphElement | null>(null);
    const [isAtTop, setIsAtTop] = useState(true);

    // Define your page titles based on the route
    const pageTitles: Record<string, string> = {
        '/': 'Nityasha',
        '/about-us': 'About Us',
        '/contact': 'Contact Us',
    };

    // Get the current page title based on the route
    const currentPageTitle = pageTitles[pathname] || 'Nityasha';

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 10 && isAtTop) {
                setIsAtTop(false);
                gsap.to(titleRef.current, { x: -100, opacity: 0, duration: 0.5 });
                gsap.to(subtitleRef.current, { x: 0, opacity: 1, duration: 0.5 });
            } else if (currentScrollY <= 10 && !isAtTop) {
                setIsAtTop(true);
                gsap.to(titleRef.current, { x: 0, opacity: 1, duration: 0.5 });
                gsap.to(subtitleRef.current, { x: -100, opacity: 0, duration: 0.5 });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isAtTop]);

    return (
        <header className='h-16 z-[50000] flex px-4 md:px-5 items-center justify-between w-full bg-black/50 backdrop-blur-2xl fixed top-0'>
            <Link href={'/'} className='outline-none'>
                <div className='flex items-center justify-center gap-2'>
                    <div className='flex items-center justify-center h-9 w-9 overflow-hisaasddden'>
                        <Image
                            src="/logo.svg"
                            alt="Nityasha"
                            width={100}
                            height={100}
                            className='object-contain scale-150'
                        />
                    </div>

                    <div className='relative border-l-2 border-white px-2 h-full items-center justify-center flex overflow-hidden'>
                        Nityasha
                    </div>
                </div>
            </Link>

            <div className='flex items-center justify-center gap-2 mt-2 md:mt-0'>
                <div className='md:flex hidden gap-1'>
                    <a href='https://insightword.in/website/Nityasha.apk'>
                        <Button
                            className="ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 px-4 py-2 -translate-y-4 animate-fade-in gap-1 rounded-lg text-white opacity-0 ease-in-out [--animation-delay:600ms] dark:text-black"
                        >
                            Download App
                        </Button>
                    </a>
                    <Link href='/SellerReg'>
                        <Button
                            className="ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 px-4 py-2 -translate-y-4 animate-fade-in gap-1 rounded-lg text-white opacity-0 ease-in-out [--animation-delay:600ms] dark:text-black"
                        >
                            Register N Partner
                        </Button>
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
                                <a href='https://insightword.in/website/Nityasha.apk'>
                                    <Button
                                        className="ring-offset-background w-full focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 px-4 py-2 -translate-y-4 animate-fade-in gap-1 rounded-lg text-white opacity-0 ease-in-out [--animation-delay:600ms] dark:text-black"
                                    >
                                        Download App
                                    </Button>
                                </a>
                                <Link href='/SellerReg'>
                                    <Button
                                        className="ring-offset-background w-full focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 px-4 py-2 -translate-y-4 animate-fade-in gap-1 rounded-lg text-white opacity-0 ease-in-out [--animation-delay:600ms] dark:text-black"
                                    >
                                        Register N Partner
                                    </Button>
                                </Link>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
                <title>Nityasha.com | Make Your Simle</title>
            </div>
        </header>
    );
}

export default Header;
