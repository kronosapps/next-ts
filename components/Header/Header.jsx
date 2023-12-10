"use client";
import { useState, useEffect } from "react";
import ThemeToggler from "@/components/ThemeToggler/ThemeToggler";
import Logo from "@/components/Logo/Logo";
import Navigation from "@/components/Navigation/Navigation";
import MobileNav from "@/components/Navigation/MobileNav";
import { usePathname } from "next/navigation";

const Header = () => {
    const [header, setHeader] = useState(false);

    const path = usePathname();

    useEffect(() => {
        const scrollYPos = window.addEventListener("scroll", () => {
            window.scrollY > 50 ? setHeader(true) : setHeader(false);
        });

        return () => window.removeEventListener("scroll", scrollYPos);
    });
    return (
        <header
            className={`${
                header
                    ? "py-4 bg-white shadow-lg dark:bg-accent"
                    : "py-6 dark:bg-transparent"
            } sticky top-0 z-30 transition-all ${
                path === "/" && "bg-[#FEF9F5]"
            }`}
        >
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <Logo />
                    <div className="flex items-center gap-x-6">
                        <Navigation
                            containerStyles="hidden md:flex gap-x-8 items-center"
                            underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
                            linkStyles="relative hover:text-primary transition-all"
                        />
                        <ThemeToggler />
                        <div className="md:hidden">
                            <MobileNav />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
