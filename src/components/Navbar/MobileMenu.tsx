import { NavLink } from "./Navbar";
import Link from "next/link";
import { BiLogoGithub, BiLogoInstagramAlt, BiLogoLinkedin } from "react-icons/bi";
import CollapseLink from "./CollapseLink";
import { iconSize } from "@/Constants";

interface Props {
    isOpen: boolean;
    links: NavLink[];
    onClickFn: () => void;
}

const MobileMenu = ({ isOpen, links, onClickFn }: Props) => {
    return (
        <menu className={`w-1/2 fixed h-svh left-0 top-0 bg-white drop-shadow-md transition-all ${!isOpen ? "-translate-x-full" : ""} cursor-pointer md:hidden`}>
            <div className="h-full flex flex-col justify-between p-6">
                <div className="w-full h-auto space-y-10">
                    <div className="flex flex-col self-end space-y-3">
                        {
                            links.map(link => (
                                !link.subpages
                                    ?
                                    <Link key={link.id} href={link.href} className="hover:text-black" onClick={onClickFn}>{link.name}</Link>
                                    :
                                    <CollapseLink key={link.id} groupName={link.name} links={link.subpages} onClickFn={onClickFn} />
                            ))
                        }
                    </div>

                    <div className="flex w-full items-center space-x-4">
                        <Link href=""><BiLogoLinkedin size={iconSize} /></Link>
                        <Link href=""><BiLogoGithub size={iconSize} /></Link>
                        <Link href=""><BiLogoInstagramAlt size={iconSize} /></Link>
                    </div>

                </div>
                <p className="font-normal text-sm">COPYRIGHT@{new Date().getFullYear()} <br /> Bartosz Sołga</p>
            </div>
        </menu>
    );
};

export default MobileMenu;