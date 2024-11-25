"use client";

import logo from "@/../public/logo-dark.svg";
import Image from "next/image";
import Link from "next/link";
import { Twirl as Hamburger } from "hamburger-react";
import { useEffect, useRef, useState } from "react";
import MobileMenu from "./MobileMenu";
import links from "@/app/links.json";
import DeskMenu from "./DeskMenu";
import SocialIcons from "./SocialIcons";

export interface NavLink {
    id: string,
    name: string,
    href: string,
    subpages?: NavLink[];
};

const NavBar = () => {
    const
        [isOpen, setIsOpen] = useState(false),
        nav = useRef<HTMLDivElement | null>(null),
        onScroll = () => {
            if (!nav.current)
                return;
            else if (window.scrollY > 1) {
                nav?.current.classList.add("py-4", "bg-background-default", "shadow-lg");
                nav?.current.classList.remove("py-8");
            }
            else {
                nav?.current.classList.remove("py-4", "bg-background-default", "shadow-lg");
                nav?.current.classList.add("py-8");
            }

        };

    useEffect(() => {
        if (!nav) return;

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [nav]);

    return (
        <div ref={nav} className="fixed w-full z-top px-4 py-8 transition-all duration-300">
            <nav className="relative container mx-auto">

                <div className="flex items-center justify-between" >

                    <Link href="/">
                        <Image src={logo} alt="bsolga.dev" />
                    </Link>

                    <DeskMenu links={links} />

                    <MobileMenu isOpen={isOpen} links={links} onClickFn={() => setIsOpen(false)} />

                    <div className="hidden space-x-3 lg:flex">
                        <SocialIcons />
                    </div>

                    <div className="block lg:hidden">
                        <Hamburger toggle={() => setIsOpen(!isOpen)} />
                    </div>

                </div>

            </nav>
        </div>
    );
};

export default NavBar;