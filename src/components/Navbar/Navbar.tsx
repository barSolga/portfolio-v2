"use client";

import lightLogo from "@/../public/logo-light.svg";
import Image from "next/image";
import Link from "next/link";
import { Twirl as Hamburger } from "hamburger-react";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import links from "@/app/links.json";
import DeskMenu from "./DeskMenu";
import { BiLogoLinkedin, BiLogoInstagramAlt, BiLogoGithub } from "react-icons/bi";
import { iconSize } from "@/Constants";

export interface NavLink {
    id: string,
    name: string,
    href: string,
    subpages?: NavLink[];
};

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative container mx-auto p-4">

            <div className="flex items-center justify-between" >

                <Link href="/" className="pt-2">
                    <Image src={lightLogo} alt="bsolga.dev" />
                </Link>

                <DeskMenu links={links} />

                <MobileMenu isOpen={isOpen} links={links} onClickFn={() => setIsOpen(!isOpen)} />

                <div className="hidden space-x-3 lg:flex">
                    <Link href=""><BiLogoLinkedin size={iconSize} /></Link>
                    <Link href=""><BiLogoGithub size={iconSize} /></Link>
                    <Link href=""><BiLogoInstagramAlt size={iconSize} /></Link>
                </div>

                <div className="block md:hidden">
                    <Hamburger toggle={() => setIsOpen(!isOpen)} />
                </div>

            </div>

        </nav>
    );
};

export default NavBar;