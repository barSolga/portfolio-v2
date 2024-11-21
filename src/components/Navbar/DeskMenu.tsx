import Link from "next/link";
import { NavLink } from "./Navbar";
import CollapseLink from "./CollapseLink";

interface Props {
    links: NavLink[];
}

const DeskMenu = ({ links }: Props) => {
    return (
        <menu className="hidden space-x-6 md:flex items-center">
            {
                links.map(link => (
                    !link.subpages
                        ?
                        <Link key={link.id} href={link.href} className="hover:text-black">{link.name}</Link>
                        :
                        <CollapseLink key={link.id} groupName={link.name} links={link.subpages} />
                ))
            }
        </menu>
    );
};

export default DeskMenu;