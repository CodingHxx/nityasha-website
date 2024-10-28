"use client";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from 'next/font/google';
import Footer from "@/components/Footer";
import Particles from "@/components/ui/particles";
import { useEffect, useRef } from "react";
import { MagicCard } from "@/components/magicui/magic-card";
import LocomotiveScroll from 'locomotive-scroll';

const inter = Inter({ subsets: ['latin'] });

// Declare the type definitions for Locomotive Scroll
declare module 'locomotive-scroll' {
    export interface ILocomotiveScrollOptions {
        el: HTMLElement; // Ensure 'el' is declared here
        smooth?: boolean;
        // Add any other properties needed
    }

    export class CustomLocomotiveScroll { // Renamed class
        constructor(options: ILocomotiveScrollOptions);
        destroy(): void;
    }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const scrollRef = useRef<HTMLBodyElement>(null); // Use HTMLBodyElement for the ref

    useEffect(() => {
        let scrollInstance: LocomotiveScroll | null = null; // Declare as nullable

        if (scrollRef.current) {
            scrollInstance = new LocomotiveScroll({
                el: scrollRef.current, // Use 'el' as defined in your custom types
                smooth: true,
            });
        }

        return () => {
            if (scrollInstance) scrollInstance.destroy(); // Clean up
        };
    }, []);

    return (
        <html lang="en">
            <body ref={scrollRef} className={`font-[Gilroy] antialiased scrollbar-thin relative bg-black`}>
                <link rel="stylesheet" href="https://fonts-dsd1.vercel.app/globals.css" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" />
                <ThemeProvider attribute="class" defaultTheme="dark">
                    <MagicCard className="w-full flex items-center h-full justify-center" gradientColor={"#262626"}>
                        <Header />
                        {children}
                        <Footer />
                        <Particles
                            className="absolute inset-0 -z-10 md:flex hidden"
                            quantity={600}
                            ease={100}
                            color={"#fff"}
                            refresh
                        />
                    </MagicCard>
                </ThemeProvider>
            </body>
        </html>
    );
}
