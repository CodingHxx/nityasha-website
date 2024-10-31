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
import Cursor from "@/components/cusor";

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
            <head>
                {/* Add Open Graph metadata for favicon */}
                <meta property="og:title" content="Nityasha Make Your Smile" />
                <meta property="og:description" content="Discover a world where smiles and success go hand-in-hand. At Nityasha, we specialize in consulting solutions designed to elevate your brand, boost your online presence, and create lasting connections with your audience. Our expert team brings innovative, customized strategies to help you shine in today’s competitive landscape. Whether you’re looking to expand your reach, improve your engagement, or create an impactful digital footprint, we’re here to make it happen—with a smile." />
                <meta property="og:image" content="https://insightword.in/website/favicon.ico" />
                <meta property="og:url" content="https://nityasha-theta.vercel.app/" />
                <meta property="og:image" content="https://insightword.in/website/favicon.ico" />
                <meta property="og:type" content="website" />

                {/* Include the favicon link for general browsers */}
                <link rel="icon" href="https://insightword.in/website/favicon.ico" sizes="any" />

                {/* Optional: Include additional sizes for Apple and other devices */}
                <link rel="apple-touch-icon" href="https://insightword.in/website/favicon.ico" />
                <link rel="icon" type="image/png" sizes="32x32" href="https://insightword.in/website/favicon.ico" />
                <link rel="icon" type="image/png" sizes="16x16" href="https://insightword.in/website/favicon.ico" />

                {/* Include additional CSS links */}
                <link rel="stylesheet" href="https://fonts-dsd1.vercel.app/globals.css" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap" />
            </head>
            <body ref={scrollRef} className={`font-[Gilroy] antialiased scrollbar-thin relative bg-black`}>
                <Cursor />
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
