import { useEffect, useRef, useState } from "react";
import { NavLink } from "./Navbar";
import { BiChevronDown } from "react-icons/bi";
import Link from "next/link";
import { iconSize } from "@/Constants";

interface Props {
    groupName: string;
    links: NavLink[];
    onClickFn?: () => void;
}

const CollapseLink = ({ groupName, links, onClickFn }: Props) => {
    const
        [isCollapsed, setIsCollapsed] = useState(false),
        collapse = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!isCollapsed) return;

        function handleClick(event: Event) {
            if (collapse.current && !collapse.current.contains(event.target as Node)) {
                setIsCollapsed(false);
            }
        }

        window.addEventListener("click", handleClick);

        return () => window.removeEventListener("click", handleClick);
    }, [isCollapsed]);

    return (
        <div ref={collapse}>
            <div onClick={() => setIsCollapsed(!isCollapsed)} className="flex items-center justify-between">
                <span>{groupName}</span> <BiChevronDown size={iconSize} />
            </div>
            <ul className={`${isCollapsed ? "" : "hidden"} flex flex-col py-2 pl-5 space-y-3 md:mt-5 md:bg-white md:drop-shadow-md md:p-5 md:absolute z-[top]`}>
                {
                    links.map(link => (
                        <Link key={link.id} href={link.href} className="hover:text-black" onClick={onClickFn}>{link.name}</Link>
                    ))
                }
            </ul>
        </div>
    );
};

export default CollapseLink;