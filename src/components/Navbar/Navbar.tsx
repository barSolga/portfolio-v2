import logo from "@/../public/logo-dark.svg";
import Image from "next/image";
import Link from "next/link";
import { Hamburger } from "./Hamburger";
import links from "@/app/links.json";

const NavBar = () => {
    return (
        <nav className="relative container mx-auto p-6">

            <div className="flex items-center justify-between">

                <Link href="/" className="pt-2">
                    <Image src={logo} alt="logo" />
                </Link>

                <menu className="hidden space-x-6 md:flex">
                    {
                        links.map(link => (
                            <a key={link.id} href={link.href} className="hover:text-darkGrayishBlue">{link.name}</a>
                        ))
                    }
                </menu>

                <div className="block md:hidden">
                    <Hamburger />
                </div>

            </div>

        </nav>
    );
};

export default NavBar;